import React from 'react'
import { useSelector } from 'react-redux';
import Itemlist from './Itemlist';



function Tasklist() {
    const data = useSelector(state => state);
    const dataList = data.tasks.map((item, index) => {
        return (
            <Itemlist key={index} item={item} number={index + 1} />
        );
    })
    return (
      <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
        {dataList}
      </div>
    );
}

export default Tasklist
