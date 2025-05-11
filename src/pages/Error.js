import React from 'react';
import Header from '../common/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ErrorContent from '../components/error/ErrorContent';
import Footer from '../common/footer/Footer';

const Error = () => {
    return (
            <>
                <Header />
                <Breadcrumb breadcrumbBg={"breadcrumbBg"} heading="404" description="Opps! This page is not found!" currentPage="404" />
                <ErrorContent />
                <Footer />
            </>
    )
}

export default Error;