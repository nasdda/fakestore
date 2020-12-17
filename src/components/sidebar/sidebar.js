import React from 'react'
import { selectOpen, toggleDrawer } from '../../redux/slice/slice'
import { useSelector, useDispatch } from 'react-redux';
export default function Sidebar() {
    const dispatch = useDispatch()
    const open = useSelector(selectOpen)
    return (
        <div>
            <br />
            {open && "opened"}
            <br />
            <button onClick={() => dispatch(toggleDrawer())}>Click Me</button>
        </div>
    )
}