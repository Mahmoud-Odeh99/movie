import React from 'react';
import images from '../../images/e-404.png'
const PageNotFound = () => {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <img src={images} alt={"error-404"} style={{width:"70%"}}/>
        </div>
    );
};

export default PageNotFound;