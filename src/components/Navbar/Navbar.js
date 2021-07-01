import React from 'react'
import { useSelector } from 'react-redux';


function Navbar() {
    const data = useSelector(state => state)
    return (
      <div className="col-md-12">
        <h2 className="text-left">Tasks: {data.tasks.length} </h2>
      </div>
    );
}

export default Navbar
