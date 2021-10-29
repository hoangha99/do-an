import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Home.css';
import 'react-slideshow-image/dist/styles.css'
import Hot from '../../pages/home/Hot';
import Product from '../../pages/home/Product';
import OurProduct from '../../pages/home/OurProduct';
function Home() {
    const slideImages = [
        {
            url: 'images/bg_1.jpg',
            caption: 'We serve Fresh Vegestables & Fruits',
        },
        {
            url: 'images/bg_2.jpg',
            caption: '100% Fresh & Organic Foods'
        },
        {
            url: 'images/bg_3.jpg',
            caption: 'We serve Fresh Vegestables & Fruits'
        },
    ];
    return (
        <div>
            <Fade
                infinite={true}
                arrows={false}
                autoplay={true}
                duration={1000}
            >
                {slideImages.map((image, index) => (
                    <header className="masthead" key={index.toString()} style={{ backgroundImage: `url(${image.url})` }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10 mx-auto">
                                    <div className="site-heading">
                                        <h1 className="mb-2">{image.caption}</h1>
                                        <span className="subheading">ancncncn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                ))}
            </Fade >
            <Hot />
            <Product/>
            <OurProduct/>
        </div>
    )
}

export default Home;