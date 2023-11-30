import React, { Component } from 'react'
import '../css/technology.css';

export class Technology extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* section2 */}
                    <section className='container '>
                        <div className='row'>
                            <div className="col-sm-12 col-md-12 col-lg-12 tech">
                                <img src={require('../img/car4.webp')} alt="car4" className="car4" />
                                <h1 className='pb-5 '>PERCEPTION ENABLED <br /> TECHNOLOGY</h1>
                                <p className='pt-5 '>Click here to edit this paragraph and add your own <br /> content. This is a great place to expand on the title and <br /> any relevant details or information.</p>
                            </div>
                        </div>
                    </section>
                    {/* section3 */}
                    <section className="clearfix s3bg">
                        <div className="col-sm-12 col-md-6 col-lg-6 cardiv">
                            <h3>THE AUTONO CAR</h3>
                            <p>Using groundbreaking <br /> perception-enabled sensor <br /> technology, the Autono car <br /> is a fully driverless vehicle <br /> engineered to the highest <br /> degree of precision and <br /> safety. It’s autonomous <br /> driving reimagined.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 ">
                            <img src={require('../img/car5.webp')} alt="car5" className="car5" />
                        </div>
                    </section>
                    {/* section4 */}
                    <section className="clearfix">
                        <div className="col-sm-12 col-md-6 col-lg-6 digital">
                            <h3>THE AUTONO CAR</h3>
                            <p>Using groundbreaking <br /> perception-enabled sensor <br /> technology, the Autono car <br /> is a fully driverless vehicle <br /> engineered to the highest <br /> degree of precision and <br /> safety. It’s autonomous <br /> driving reimagined.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 ">
                            <img src={require('../img/screen.webp')} alt="screen" className="screen" />
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default Technology
