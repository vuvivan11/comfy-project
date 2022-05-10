import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb'
import CartOverLay from '../../../../components/cartOverlay'
import SidebarOverlay from '../../../../components/sidebarOverlay'
import productListSlice from '../../../../store/productListSlice'
import Product from './Product'

export default function DetailProduct(props) {
  const { detailProduct } = useSelector(state => state.productList);
  const { relatedProduct } = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(productListSlice.actions.getDetailProduct(id))
  }, [id]);

  useEffect(() => {
    if (relatedProduct === []) {
      dispatch(productListSlice.actions.getRelatedProduct(detailProduct.fields.company))
    }
  }, [detailProduct])

  return (
    <>
      <Breadcrumb detailProduct={detailProduct}/>
      <SidebarOverlay />
      <CartOverLay />
      <Product detailProduct={detailProduct} relatedProduct={relatedProduct} />
    </>
  )
}
