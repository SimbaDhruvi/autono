import React, { Component } from 'react'
import '../css/career.css';

export class Career extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* section2 */}
                    <section className>
                        <div className="col-sm-12 col-md-12 col-lg-12 cont">
                            <h1>WE MAKE <br /> BIG IDEAS HAPPEN</h1>
                            <h2>Join Us for the Ride</h2>
                        </div>
                        <hr />
                    </section>
                    {/* section3 */}
                    <section className="clearfix">
                        <div className="col-sm-12 col-md-6 col-lg-6 location">
                            <h2>LOCATION</h2>
                            <h3>We’re based in San <br /> Francisco’s innovation hub</h3>
                            <p>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={require('../img/building.webp')} alt="building" className="buildingimg" />
                        </div>
                    </section>
                    {/* section4 */}
                    <section className="clearfix s4bg">
                        <div className="col-sm-12 col-md-12 col-lg-12 map">
                            <h2>Direction</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.18159947434!2d-122.52000128805614!3d37.75767131484283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1683180130590!5m2!1sen!2sin" width={800} height={550} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default Career
