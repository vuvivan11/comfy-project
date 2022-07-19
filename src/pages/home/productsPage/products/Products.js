import React, { useState } from 'react'
import Container from './container'
import Filters from './fillter'

export default function Products() {
    const [scrollToEle, setScrollToELe] = useState()

    const handleScrollToEle = () => {
        scrollToEle.current.scrollIntoView({ behavior: "smooth"})
    }

    const getEleFromContainer = (ele) => {
        setScrollToELe(ele)
    }
    return (
        <section className="products">
            {/* filters */}
            <Filters onScrollToEle={handleScrollToEle} />
            {/* products */}
            <Container onEleFromContainer={getEleFromContainer} />
        </section>
    )
}
