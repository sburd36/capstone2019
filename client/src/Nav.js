import React from "react";
import logo from './img/LOGO-teal.png'

export default class Nav extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <nav class="navbar navbar-expand-md border-bottom">
                <div class="d-flex">
                    <a ref="https://sburd36.github.io/capstone2019/" style={{width: "200px"}}><img src={logo}  class="logo"alt="logo"/></a>
                    <ul class="navbar-nav d-flex justify-content-start align-items-center">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <b>ABOUT US</b>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <b>OUR TOOL</b>
                            </a>
                        </li>
                    </ul>
                </div>     
                <div id="nav-buttons">
                    <button class="btn btn-yellow-empty" id="log-in">LOG IN</button>
                    <button class="btn btn-teal-empty" id="donate">DONATE</button>
                </div>
            </nav>
        )
    }
}