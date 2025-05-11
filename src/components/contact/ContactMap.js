import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="map-area">
                <iframe 
                    title="Address"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.253486672153!2d106.70244699999999!3d20.821467999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a71006adfcba9%3A0xdf53d73f57a2e681!2zQ8O0bmcgdHkgTXXhu5FpIEtow6FuaCBIb8Og!5e0!3m2!1sen!2sus!4v1746935840673!5m2!1sen!2sus" 
                    width="" 
                    height="450" 
                    style={{border: '0'}} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default ContactMap;