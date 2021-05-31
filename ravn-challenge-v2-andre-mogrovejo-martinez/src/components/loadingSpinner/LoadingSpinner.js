import React from 'react';
import { Spinner } from 'react-bootstrap'; 
import './LoadingSpinner.css';

const Loader = () => {
    return (
    <>
    <div className='Loader'>
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