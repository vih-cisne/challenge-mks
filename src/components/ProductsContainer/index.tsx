import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList, IProduct } from "../../redux/productsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import ProductCard from "../ProductCard";
import Skeletons from "../Skeletons";
import { ContainerProducts } from "./style";
import React from 'react'



const ProductsContainer = () => {

  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getProductsList(1))
  }, []);

  return (<ContainerProducts>
    <div>
      {products?.loading ? <Skeletons/> : products.productsList.map((product:IProduct,index:number) => {
        return <ProductCard product={product} key={index}/>
    })}
    
    </div>
  </ContainerProducts>)
};

export default ProductsContainer;
