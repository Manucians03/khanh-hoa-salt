import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Footer from '../common/footer/Footer';

const ProductDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumb 
                breadcrumbBg={"breadcrumbBg"}
                heading="Services Details"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Services Details" 
            />
            <div className="service-details pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="service-details-wrapper">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails;