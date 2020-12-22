import React from 'react'
import ProductChunk from '../product_chunk/product_chunk'

export default function Electronics() {
    return (
        <React.Fragment>
            <br />
            <h2> Electronics </h2>
            <ProductChunk name="De'Longhi Oil-Filled Radiator Space Heater"
                coverImage="https://images-na.ssl-images-amazon.com/images/I/61V5KvnKFZL._AC_SY550_.jpg"
                info="STAY COZY AND SAVE ENERGY. Carving out a comfortable room, desk, or other cozy spot for work, focus, and learning is more important than ever. Add this heater to your designated space to keep it cozy—optimizing productivity and turning an unexpected challenge into an energy-saving win"
            />
        </React.Fragment>
    )
}