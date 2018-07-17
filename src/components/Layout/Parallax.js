import React from "react";
import image from "./images/image1.jpg";

const Parallax = () => (  
    <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
            <div class="container white-text lighten-5 text-lighten-2">
                <h1 class="header center">Hello World</h1>
                <div class="row center">
                    <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                </div>
                <div class="row center">
                    <a data-target='dropdown1' class="waves-effect waves-light btn blue dropdown-trigger">Get Started</a >
                </div>
            </div>
        </div>
        <div class="parallax">
        <img src={image} alt="parallax background"/>
        </div>


<ul id='dropdown1' class='dropdown-content'>
<li>
            <a href="sass.html">
                <i class="material-icons">search</i>
            </a>
        </li>
        <li>
            <a href="badges.html">
                <i class="material-icons">view_module</i>
            </a>
        </li>
        <li>
            <a href="collapsible.html">
                <i class="material-icons">refresh</i>
            </a>
        </li>
</ul>
</div>
    );

export default Parallax;