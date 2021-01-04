import React from 'react'
import './loader.css'

const loader = (props) => (
    <div style={{ width: "100%", textAlign: "center" }}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>

)

export default loader