import React, { Component } from 'react'
import '../css/about.css';

export class About extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* section2 */}
                    <section className>
                        <div className="col-sm-12 col-md-12 col-lg-12 about">
                            <h1>OUR JOURNEY</h1>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
                                click me to add your own content and make changes to the font. I’m a great place for you to tell a story
                                and let your users know a little more about you.</p>
                        </div>
                        <hr />
                    </section>
                    {/* section2 */}
                    <section className="clearfix s2">
                        <div className="col-sm-12 col-md-6 col-lg-6 mission">
                            <h2>OUR MISSION</h2>
                            <h3>Redefining the Way <br /> We Move</h3>
                            <p>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text”
                                or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place
                                <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                            <p>This is a great space to write a long <br /> text about your company and your <br /> services. You can use
                                this space to go <br /> into a little more detail about your <br /> company. Talk about your team and <br />
                                what services you provide. </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={require('../img/model.webp')} alt="model" className="model" />
                        </div>
                    </section>
                    {/* section3 */}
                    <section className="clearfix">
                        <div className="col-sm-12 col-md-12 col-lg-12 aimg">
                            <img src={require('../img/aboutimg.webp')} alt="aimg" className="aimg" />
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default About
