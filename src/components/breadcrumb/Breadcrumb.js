import React from 'react';

const Breadcrumb = ({ breadcrumbBg, heading, description, currentPage }) => {
    return (
        <>
            <div className="breadcrumb-area pt-60 pb-60 bg-property" data-overlay="black" data-opacity="7" style={{ backgroundImage: `url(${breadcrumbBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 justify-content-center">
                            <div className="breadcrumb-content-wrapper text-center">
                                <h2>{heading}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb;