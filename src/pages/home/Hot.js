import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Hot(props) {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row no-gutters ftco-services">
                    <ScrollAnimation animateIn="flipInX" className="col-md-3 text-center d-flex align-self-stretch">
                        <div className="media block-6 services mb-md-0 mb-4">
                            <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                                <span className="flaticon-shipped" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading">Free Shipping</h3>
                                <span>On order over $100</span>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" className="col-md-3 text-center d-flex align-self-stretch">
                        <div className="media block-6 services mb-md-0 mb-4">
                            <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                                <span className="flaticon-diet" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading">Always Fresh</h3>
                                <span>Product well package</span>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" className="col-md-3 text-center d-flex align-self-stretch">
                        <div className="media block-6 services mb-md-0 mb-4">
                            <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                                <span className="flaticon-award" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading">Superior Quality</h3>
                                <span>Quality Products</span>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX" className="col-md-3 text-center d-flex align-self-stretch">
                        <div className="media block-6 services mb-md-0 mb-4">
                            <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                                <span className="flaticon-customer-service" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading">Support</h3>
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>

    );
}

export default Hot;