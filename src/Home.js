import React, { Component } from 'react'
import '../css/style.css';

export class home extends Component {
    render() {
        return (
            <div>
                {/* section1 */}
                <section className='container-fluid p-0 overflow-hidden '>
                    <div className='row'>
                        <div className="col-sm-12 col-md-12 col-lg-12 bg">
                            <video src={require('../video/hero.mp4')} autoPlay muted loop className="bgvideo" />
                            <div className="herotitle my-5 py-5 ">
                                <h1 className='display-3'>THE FUTURE OF <br className='d-none d-lg-block' /> MOBILITY IS HERE</h1>
                                <p>Discover the safest self-driving experience with Autono.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section2 */}
                <section className="s2bg py-5">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-sm-12 col-md-6 col-lg-6 vision">
                                <h2>VISION</h2>
                                <h3>We’re Changing the <br /> Way the World Thinks <br /> About Cars</h3>
                                <p>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text”
                                    or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place
                                    <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <img src={require('../img/car.webp')} alt="car" className="car" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* section3 */}
                <section className="container py-5 ">
                    <div className="col-sm-12 col-md-6 col-lg-6 services">
                        <h2>SERVICES</h2>
                        <h3>We Deliver Exceptional <br /> Products and Services <br /> Around the World</h3>
                    </div>
                </section>
                {/* section4 */}
                <section className="container py-5 ">
                    <div className='row'>
                        <div className="col-sm-12 col-md-6 col-lg-6 drive">
                            <h3>AUTONOMOUS <br /> DRIVING</h3>
                            <p>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text”
                                or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place
                                <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                            <button className="readmore">Read More <i className="icofont-bubble-right" /></button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={require('../img/car2.webp')} alt className="car2" />
                        </div>
                    </div>
                </section>
                {/* section5 */}
                <section className="container py-5 ">
                    <div className='row'>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={require('../img/meter.webp')} alt className="meterimg" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 info">
                            <h3>REAL-TIME <br /> INFORMATION</h3>
                            <p>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text”
                                or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place
                                <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                            <button className="readmore">Read More <i className="icofont-bubble-right" /></button>
                        </div>
                    </div>
                </section>
                {/* section6 */}
                <section className="container py-5 ">
                    <div className='row'>
                        <div className="col-sm-12 col-md-6 col-lg-6 perception">
                            <h3>PERCEPTION <br /> ENABLED</h3>
                            <p>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text”
                                or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place
                                <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                            <button className="readmore">Read More <i className="icofont-bubble-right" /></button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={require('../img/car3.webp')} alt className="car3" />
                        </div>
                    </div>
                </section>
                {/* section7 */}
                <section className="s7bg py-5">
                    <div className='container '>
                        <div className='row'>
                            <div className="col-sm-12 col-md-6 col-lg-6 auto s7black">
                                <h2>WHY AUTONO</h2>
                                <h3>A different approach, <br /> using a new method of <br /> manufacturing.</h3>
                                <p>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text”
                                    or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place
                                    <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                                <button className="readmore1">Read More <i className="icofont-bubble-right" /></button>
                            </div>
                            {/* <hr className="s7hr" /> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default home
