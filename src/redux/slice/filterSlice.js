import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
    pageCount: 1,
    searchValue: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload + 1
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const {setSearchValue, setCategoryId, setSort, setPageCount} = filterSlice.actions

export default filterSlice.reducer