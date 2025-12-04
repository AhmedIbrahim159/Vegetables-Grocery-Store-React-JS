import "./footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col -md-3 col -sm-6">
                        
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className="footer-text">
                            <h6>Contact Us</h6>
                            <h4>(+xx) xxx xxx xxx</h4>
                        </div>

                    </div>
                    <div className="col -md-3 col -sm-6">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Home Page</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                           
                        </ul>

                    </div>
                    {/* <div className="col -md-3 col -sm-6">
                        <h2>Our Service</h2>
                        <ul>
                            <li><a href="#">Dental Care</a></li>
                            <li><a href="#">Cardiac Clinic</a></li>
                            <li><a href="#">Massege Therapy</a></li>
                            <li><a href="#">Cardiology</a></li>
                            <li><a href="#">Precise Diagnosis</a></li>
                            <li><a href="#">Abmbulance Services</a></li>
                        </ul>

                    </div> */}
                    <div className="col -md-3 col -sm-6">
                        <h2>Subcribe</h2>
                        <form>
                            <input type="email" />
                            <button type="submit"> Subcribe now</button>
                        </form>


                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col -lg-12 col -md-12">
                                    <span>Copyright © 2023 Design & Developed by ThemeTrades</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer