import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getProductsList = createAsyncThunk(
    'products/getProductsList',
    async (pageNumber: number) => {
      const response = await axios.get(`https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=${pageNumber}&rows=10&sortBy=name&orderBy=DESC`)
      response.data.page = pageNumber
      return response.data
    }
  )


export interface IProduct {
    id:number
    name:string
    brand:string
    description:string
    photo:string
    price:string
    createdAt:Date
    updatedAt: Date
}

export interface IProducts {
    productsList: IProduct[]
    page: number
    loading: boolean
}

export const slice = createSlice({
    name: 'products',
    initialState: { 
        page: 0,
        productsList: [],
        loading: false
    },
    reducers: {
        changeProducts(state: IProducts, { payload }) {
            return {...state, productsList: payload.products, page: payload.page}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsList.pending, (state,action) => {
            state.loading = true
        })
        builder.addCase(getProductsList.fulfilled, (state, action) => {
            state.loading = false
            state.page = action.payload.page
            state.productsList = action.payload.products

        })
        builder.addCase(getProductsList.rejected, (state, action) => {
            state.loading = false
            state.productsList = []
        })
    }
})

export const { changeProducts } = slice.actions

export default slice.reducer