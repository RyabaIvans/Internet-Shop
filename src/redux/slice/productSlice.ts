import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {sortArrayType} from "../../components/Sort";

export type ItemsResponse = ItemsResponseChild[];

export type ItemsResponseChild = {
    id: string;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}


type ProductTypeState = {
    items: ItemsResponse,
    status: 'loading' | 'success' | 'error'
}
const initialState: ProductTypeState = {
    items: [],
    status: 'loading', //loading , success , error
}

type FetchPizza = {
    currentPage: string,
    categoryType: number,
    search: string,
    sort: sortArrayType
}

export const fetchUserById = createAsyncThunk<ItemsResponse, FetchPizza>(
    'product/fetchByIdStatus',
    async (param, thunkAPI) => {
        const {currentPage, categoryType, search, sort} = param
        const res = await axios.get<ItemsResponse>(`https://642e703d8ca0fe3352cf841b.mockapi.io/items?page=${currentPage}&limit=8
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