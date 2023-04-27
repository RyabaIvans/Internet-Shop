import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    items: [],
    status: 'loading', //loading , success , error
}


export const fetchUserById = createAsyncThunk(
    'product/fetchByIdStatus',
    async (param: any, thunkAPI) => {
        const {currentPage, categoryType, search, sort} = param
        const res = await axios.get(`https://642e703d8ca0fe3352cf841b.mockapi.io/items?page=${currentPage}&limit=4
             &${
            categoryType > 0 ? `category=${categoryType}` : ''
        }${search}&sortBy=${sort.sortProperty}&order=desc`)
        
        return res.data
    }
)


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            state.items = action.payload
            state.status = 'success'
        }).addCase(fetchUserById.pending, (state, action) => {
            // Add user to the state array
        })
    },

})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer