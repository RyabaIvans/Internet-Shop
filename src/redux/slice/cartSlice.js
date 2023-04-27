import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    totalPrice: 0,
    items: [],
    totalCount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems(state, action) {
            state.items.push(action.payload)

            state.totalCount = state.totalCount + 1
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.countItems + sum
            }, 0)
            console.log(state.items)
        },
        removeItem(state, action) {
            state.items = state.items.filter((f) => f.param !== action.payload)
            // state.totalCount = state.totalCount - action.payload.count
            // state.totalPrice = state.items.reduce((sum, obj) => {
            //     return obj.price * obj.countItems + sum
            // }, 0)
            console.log(action.payload.param)

        },
        clearItems(state) {
            state.items = []
            state.totalCount = 0
            state.totalPrice = 0
        },
        increment(state, action) {
            state.items.map(el => el.id === action.payload.id && el.size === action.payload.size && el.type === action.payload.type ? el.countItems = el.countItems + 1 : el)
            console.log(state.items.countItems)
            state.totalCount = state.totalCount + 1
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.countItems + sum
            }, 0)

        },
        decrement(state, action) {
            state.items.map(el => el.id === action.payload.id && el.size === action.payload.size && el.type === action.payload.type ? el.countItems === 1 ? 1 : el.countItems = el.countItems - 1
                : el)
            state.totalCount = state.totalCount - 1
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.countItems + sum
            }, 0)

        }

    },
})

// Action creators are generated for each case reducer function
export const {decrement, increment, addItems, removeItem, clearItems} = cartSlice.actions

export const cartSelectorPrice = (state) => state.cartSlice.totalPrice
export const cartSelectorCount = (state) => state.cartSlice.totalCount
export const cartSelectorItem = (state) => state.cartSlice.items
export default cartSlice.reducer