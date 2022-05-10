import { createSelector } from "@reduxjs/toolkit";

const getProductListReducer = state => state.productList.productList;

const getCompanyReducer = state => state.filters.company;
const getSearchReducer = state => state.filters.search;
const getPriceReducer = state => state.filters.price;


export const productListRemainingReducer = createSelector(getProductListReducer, getCompanyReducer, getSearchReducer,getPriceReducer, (productList, company, search, price) => {
    return productList.filter((product) => {
        if (company === "all") {
            return ((search ? product.fields.name.toLowerCase().includes(search.toLowerCase()) : product) && product.fields.price < price*100)
        }
        return (search ? product.fields.name.toLowerCase().includes(search.toLowerCase()) && product.fields.company.toLowerCase().includes(company.toLowerCase()) && product.fields.price < price*100 : product.fields.company.toLowerCase().includes(company.toLowerCase()) && product.fields.price < price*100)
    })
})