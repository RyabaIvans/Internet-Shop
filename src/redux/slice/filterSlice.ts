import {createSlice, PayloadAction} from '@reduxjs/toolkit'


type Sort = {
    name: string,
    sortProperty: string
}
export type filterType = {
    categoryId: number,
    sort: Sort,
    pageCount: number,
    searchValue: string
}

const initialState: filterType = {
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
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload
        },
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload + 1
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const {setSearchValue, setCategoryId, setSort, setPageCount} = filterSlice.actions

export default filterSlice.reducer