import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="mt-3">
            <div class="container p-3">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="item">
                            <h4 class="text-uppercase">Contact us</h4>
                            <span>123 Second Street Fifth</span>  <br />
                            <span>   Avenue,</span>  <br />
                            <span>Manhattan, New York</span>  <br />
                            <span>  +987 654 3210</span> 
                            
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="item">
                            <h4 class="text-uppercase">additional links</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="item date">
                            <h4 class="text-uppercase">resent posts</h4>
                            <p><a href="#">01/03/2021</a></p>
                            <p><a href="#">08/05/2021</a></p>
                            <p><a href="#">01/03/2021</a></p>
                            <p><a href="#">08/05/2021</a></p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="item">
                            <h4 class="text-uppercase">newsletter</h4>
                            <form>
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright text-center">
                <p>Copyright 2021  Design by <a href="#">YES BOSS</a></p>
            </div>
        </footer>
    );
};

export default Footer;