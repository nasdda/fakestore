import React from 'react'
import ProductSection from './product_section'
import ProductChunk from '../product_chunk/product_chunk'

import { electronics } from '../../../data/product_data'

export default function Electronics() {
    const displayedProducts = electronics.map((product, i) => <ProductChunk data={product} key={i} />)
    return (
        <React.Fragment>
            <br />
            <h2> Electronics </h2>
            <ProductSection toDisplay={displayedProducts} />
        </React.Fragment>
    )
}