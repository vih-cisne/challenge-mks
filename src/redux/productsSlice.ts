import { createSlice } from "@reduxjs/toolkit";

export interface IProducts {
    productsList: string[]
    page: number
}

export const slice = createSlice({
    name: 'products',
    initialState: { 
        page: 0,
        productsList: []
    },
    reducers: {
        changeProducts(state: IProducts, { payload }) {
            return {...state, productsList: payload.products, page: payload.page}
        },
        cleanProducts(state) {
            return { ...state, productsList: [], page: 0 }
        }

    }
})

export const { changeProducts, cleanProducts } = slice.actions

export default slice.reducer