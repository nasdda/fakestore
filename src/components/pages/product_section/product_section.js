import React, { useState, useEffect } from 'react'

import Loader from '../../loader/loader'



export default function ProductSection(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    return loading ? <Loader /> : props.toDisplay
}