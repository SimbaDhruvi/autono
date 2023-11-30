import React, { Component } from 'react'
import '../css/style.css';

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* section8 */}
                <section className="container py-5 ">
                    <div className="row footer">
                        <div className="col-sm-12 col-md-12 col-lg-3 flogo">
                            <h1>AUTONO</h1>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 infodiv1">
                            <ul className="info1">
                                <li><a href="/">Home</a></li>
                                <li><a href="/technology">Technology</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/career">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 infodiv">
                            <ul className="info1">
                                <li><a href="/">Tel: 123-456-7890</a></li>
                                <li><a href="/">Email: info@mysite.com</a></li>
                                <li><a href="/">500 Terry Francine St <br /> San Francisco, CA 94158</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 contact">
                            <h2>SUBSCRIBE</h2>
                            <p>Sign up to receive Autono news and updates.</p>
                            <form>
                                <label >Email *</label> <br /><br />
                                <div className='d-flex '>
                                    <input type="text" className="form-control " />
                                    <input type="submit" defaultValue="Subscribe" className="subbtn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer
