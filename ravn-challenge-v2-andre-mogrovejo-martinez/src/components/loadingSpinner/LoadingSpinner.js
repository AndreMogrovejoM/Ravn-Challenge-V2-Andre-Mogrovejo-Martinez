import React from 'react';
import { Spinner } from 'react-bootstrap'; 

const Loader = () => {
    return (
    <>
    <div className='loader'>
        <Spinner
            as="loader"
            animation="border"
            size="s"
            role="status"
        />        
        <span>Loading</span>
    </div>     
    </>
    )
}
export default Loader;