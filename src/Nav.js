import React, { Component } from 'react'

export class nav extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid position-relative nav z-3">
                    <div className="logo">
                        <h1>AUTONO</h1>
                    </div>
                    <div className="navbar">
                        <ul className="nav align-items-center ">
                            <li><a href="/">Home</a></li>
                            <li><a href="/technology">Technology</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/career">Careers</a></li>
                            <li><a href="#" className="sub">Subscribe</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default nav
