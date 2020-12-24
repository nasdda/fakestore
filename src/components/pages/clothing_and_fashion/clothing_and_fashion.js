import React from 'react'
import ProductSection from '../product_section/product_section'
import ProductChunk from '../product_chunk/product_chunk'

import { clothing_and_fashion } from '../../../data/product_data'

export default function ClothingAndFashion() {
    const displayedProducts = clothing_and_fashion.map((product, i) => <ProductChunk data={product} key={i} />)
    return (
        <React.Fragment>
            <br />
            <h2> Clothing & Fashion </h2>
            <ProductSection toDisplay={displayedProducts} />
        </React.Fragment>
    )
}