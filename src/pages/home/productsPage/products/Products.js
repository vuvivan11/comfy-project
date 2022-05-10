import React from 'react'
import Container from './container'
import Filters from './fillter'

export default function Products() {
    return (
        <section className="products">
            {/* filters */}
            <Filters />
            {/* products */}
            <Container />
        </section>
    )
}
