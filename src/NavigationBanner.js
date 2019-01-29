import React from 'react';

const NavigationBanner = () => {
    return (
        <div className="lead-banner">
            <img src={require('../src/Assets/img/banner-1.jpeg')} />
            <div className="banner-content">
                <div className="wrapper">
                    {/* <span className="title">A cannabis information resource </span> */}
                    <span className="sub-title"> Utahs Cannabis Reference Resource</span>
                </div>
            </div>
        </div>
    )
}


export default NavigationBanner;