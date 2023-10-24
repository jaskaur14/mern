import React, { useState } from 'react'
import CreateProduct from '../components/createProjectForm';
import DisplayAll from '../components/displayAll';

const Main = (props) => {
    
    const [productList, setProductList] = useState([]);
    
    return (
        <div>
            <CreateProduct productList={productList} setProductList={setProductList} />
                <hr/>
            <DisplayAll productList={productList} setProductList={setProductList} />
        </div>
    )
}
export default Main;
