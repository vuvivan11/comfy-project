import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import filtersSlide from '../../../../../store/filtersSlide';

export default function Filters({onScrollToEle}) {
    const { productList } = useSelector(state => state.productList);
    const { price } = useSelector(state => state.filters);
    const { company } = useSelector(state => state.filters);
    const [isActive, setIsActive] = useState(company);
    const dispatch = useDispatch();

    const renderMenuCompanies = () => {
        const companies = productList.reduce((value, item) => {
            if (!value.includes(item.fields.company)) {
                value.push(item.fields.company)
            }
            return value
        }, ["all"]);

        return companies.map((company) => {
            return <button key={company} className={`company-btn ${isActive === company ? "active-btn" : ""}`} onClick={() => {
                setIsActive(company);
                onScrollToEle();
                dispatch(filtersSlide.actions.companyFilter(company))
            }}>{company}</button>
        })
    }

    const handleSearch = (e) => {
        const keyword = e.target.value;
        dispatch(filtersSlide.actions.searchFilter(keyword))
    }

    const handleChangePrice = (e) => {
        const price = e.target.value;
        dispatch(filtersSlide.actions.priceFilter(price))
    }
    return (
        <div className="filters">
            <div className="filters-container">
                {/* search */}
                <form className="input-form">
                    <input type="text" className="search-input" placeholder="search..." onChange={handleSearch} />
                </form>
                {/* categories */}
                <h4>Company</h4>
                <article className="companies">
                    {renderMenuCompanies()}
                </article>
                {/* price */}
                <h4>Price</h4>
                <form className="price-form">
                    <input type="range" className="price-filter" min={0} defaultValue={price} max={80} onChange={handleChangePrice} />
                </form>
                <p className="price-value">Value : ${price}</p>
            </div>
        </div>
    )
}
