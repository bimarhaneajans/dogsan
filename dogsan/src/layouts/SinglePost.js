import React from 'react'
import logo from "./assets/img/logo/heartify-logo.png";
import logo2 from "./assets/img/logo/heartify-logo-lite.png";
import bir from "./assets/img/blog/1.jpg";
import author from "./assets/img/xtra/author.png";
import xtra1 from "./assets/img/xtra/1.jpg";
import xtra2 from "./assets/img/xtra/2.jpg";
import xtra3 from "./assets/img/xtra/3.jpg";
import avatar from "./assets/img/xtra/avatar.jpg";
import caticon1 from "./assets/img/cat-ico1.png";
import caticon2 from "./assets/img/cat-ico1.png";
import caticon3 from "./assets/img/cat-ico1.png";
import rposts1 from "./assets/img/rposts/1.jpg";
import rposts2 from "./assets/img/rposts/1.jpg";
import rposts3 from "./assets/img/rposts/1.jpg";
import backtotop from "./assets/img/backtotop.jpg"
/* import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css"; // burasi
import "./assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "./assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../sliders/assets/css/responsive-styling.css" */
import "./style.css"
import "./responsive-styling.css"


export default function SinglePost() {
    return (
        <div>
    <div className="main-wrapper">
        <div id="home">
            <div id="bg-slider-home" className="bsh">
            </div> 
            <div className="container bs-main">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                        <div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={logo} alt="Heartify" /></a></div>
                
                        <div className="top-header hidden-xs">
                            <div className="top-navigation">
                                <ul className="top-nav list-unstyled list-inline" >
                                    <li ><a href="#home" style={{color: "#fafafa"}}>Home</a></li>
                                    <li ><a href="#about" style={{color: "#fafafa"}}>About Us</a></li>
                                    <li ><a href="#team" style={{color: "#fafafa"}}>Team</a></li>
                                    <li className="logo" ><a href="index.html"><img src={logo2} alt="Heartify" /></a></li>
                                    <li style={{color: "#fafafa"}}><a href="#pricing" style={{color: "#fafafa"}}>Pricing</a></li>
                                    <li style={{color: "#fafafa"}}><a href="#blog" style={{color: "#fafafa"}}>Blog</a></li>
                                    <li style={{color: "#fafafa"}}><a href="#contact" style={{color: "#fafafa"}}>Contact</a></li>
                                </ul>
                            </div>
                    
                        </div>
            
                    </div>
            
                </div>
            </div>
        </div>
    
    </div>
    <div className="page-head">
        <div className="container">
            <div className="col-md-9">
                <h3>Standard Post Format with preview picture</h3>
                <span className="post-meta">Posted 22.06.2014 at 18:00h in Healthy lifestyle by <a href="#">The Ronins</a>   /   68 Likes   /   <a href="#">2 Comments</a></span>
            </div>
            <div className="col-md-3">
                <form className="search">
                    <input type="search" placeholder="Search..."/>
                </form>
            </div>
        </div>
    </div>
    <div className="blog-content">
        <div className="container">
            <div className="col-md-9">
                <article>
                    <img src={bir} className="img-responsive" alt=""/>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <div className="row">
                        <div className="col-md-7">
                            <p className="bold">Caveats worth mentioning</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam. Mauris hendrerit, diam non commodo laoreet, est elit volutpat mauris, vel vehicula nisl orci id nibh. Pellentesque mollis convallis condimentum.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="post-quote">
                                <h4>"You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality."</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam. Mauris hendrerit, diam non commodo laoreet, est elit volutpat mauris, vel vehicula nisl orci id nibh. Pellentesque mollis convallis condimentum. Curabitur scelerisque tincidunt metus, non rutrum sem egestas et. Quisque hendrerit nec arcu sed pharetra. Duis nec aliquet massa, sed dapibus mauris. Nulla vehicula nisl non enim sodales fermentum. Morbi in diam elementum, egestas magna et, interdum</p>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam. Mauris hendrerit, diam non commodo laoreet, est elit volutpat mauris, vel vehicula nisl orci id nibh. Pellentesque mollis convallis condimentum. Curabitur scelerisque tincidunt metus, non rutrum sem egestas et. Quisque hendrerit nec arcu sed pharetra. Duis nec aliquet massa, sed dapibus mauris. Nulla vehicula nisl non enim sodales fermentum. Morbi in diam elementum, egestas magna et, interdum</p>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <ul className="tags-list">
                        <li><a href="#">Ronin</a></li>
                        <li><a href="#">Clinic</a></li>
                        <li><a href="#">Informations</a></li>
                        <li><a href="#">Doctors</a></li>
                        <li><a href="#">Disease</a></li>
                    </ul>
                    <div className="sharepost">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Share this Post</h4>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="author-info">
                        <img src={author} alt="" className="img-responsive"/>
                        <h5><em>Author:</em> The Ronins</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                    </div>
                    <div className="related-posts">
                        <h5>Related Posts</h5>
                        <div className="row">
                            <ul>
                                <li>
                                    <img src={xtra1} className="img-responsive" alt=""/>
                                    <h4><a href="#">Standard Post format with Picture slider</a></h4>
                                    <span className="post-meta">Posted 22.06.2014 at 18:00h by <a href="#">The Ronins</a></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus.</p>
                                </li>
                                <li>
                                    <img src={xtra2} className="img-responsive" alt=""/>
                                    <h4><a href="#">Standard Post format with Picture slider</a></h4>
                                    <span className="post-meta">Posted 22.06.2014 at 18:00h by <a href="#">The Ronins</a></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus.</p>
                                </li>
                                <li>
                                    <img src={xtra3} className="img-responsive" alt=""/>
                                    <h4><a href="#">Standard Post format with Picture slider</a></h4>
                                    <span className="post-meta">Posted 22.06.2014 at 18:00h by <a href="#">The Ronins</a></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <div className="comments">
                    <h4>Post has 3 comments</h4>
                    <ul>
                        <li>
                            <img src={avatar} alt=""/>
                            <div className="comments-info">
                                <h6>Bob Marley <span>/ Posted 22.06.2014 in 18:00h</span> <em><a href="#">Reply</a></em></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl conva llis tempus. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                            </div>
                        </li>
                        <li>
                            <img src={avatar} alt=""/>
                            <div className="comments-info">
                                <h6>Michael <span>/ Posted 22.06.2014 in 18:00h</span> <em><a href="#">Reply</a></em></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl conva llis tempus. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                            </div>
                        </li>
                        <li>
                            <img src={avatar} alt=""/>
                            <div className="comments-info">
                                <h6>Victor <span>/ Posted 22.06.2014 in 18:00h</span> <em><a href="#">Reply</a></em></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl conva llis tempus. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="comment-form">
                    <h4>Leave a comment</h4>
                    <form id="comment-form">
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" placeholder="Name*"/>
                            </div>
                            <div className="col-md-4">
                                <input type="text" placeholder="Surname*"/>
                            </div>
                            <div className="col-md-4">
                                <input type="email" placeholder="Email address"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea rows="5" placeholder="Your comment*"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <p>Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div className="col-md-5">
                                <button type="submit">Submit Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <aside className="col-md-3">
                <div className="side-content">
                    <h5>Main Categories</h5>
                    <ul className="cat">
                        <li>
                            <img src={caticon1} alt=""/>
                            <h4>Clinic informations</h4>
                            <p>Lorem ipsum dolor sit ametcon ctetur adipisicing elit.</p>
                        </li>
                        <li>
                            <img src={caticon2} alt=""/>
                            <h4>Our team</h4>
                            <p>Lorem ipsum dolor sit ametcon ctetur adipisicing elit.</p>
                        </li>
                        <li>
                            <img src={caticon3} alt=""/>
                            <h4>Work schedule</h4>
                            <p>Lorem ipsum dolor sit ametcon ctetur adipisicing elit.</p>
                        </li>
                    </ul>
                </div>
                <div className="side-content">
                    <h5>Categories</h5>
                    <ul className="list1">
                        <li><a href="#">Business <span>25</span></a></li>
                        <li><a href="#">Clinic <span>17</span></a></li>
                        <li><a href="#">Medical Report <span>31</span></a></li>
                        <li><a href="#">Quotes <span>19</span></a></li>
                        <li><a href="#">Web Applications <span>9</span></a></li>
                    </ul>
                </div>
                <div className="side-content">
                    <h5>Join the newsletter</h5>
                    <p>Join the 1000+ others and subscribe. We promise You won't recive any spam from us!</p>
                    <form className="side-newsletter">
                        <input type="text" placeholder="Type your email address"/>
                    </form>
                </div>
                <div className="side-content">
                    <h5>Recent Posts</h5>
                    <ul className="rposts">
                        <li>
                            <img src={rposts1} alt=""/>
                            <h6><a href="#">This is standard post with slider</a></h6>
                            <span>22.06.2014 at 18:00h</span>
                        </li>
                        <li>
                            <img src={rposts2} alt=""/>
                            <h6><a href="#">This is standard post with slider</a></h6>
                            <span>22.06.2014 at 18:00h</span>
                        </li>
                        <li>
                            <img src={rposts3} alt=""/>
                            <h6><a href="#">This is standard post with slider</a></h6>
                            <span>22.06.2014 at 18:00h</span>
                        </li>
                    </ul>
                </div>
                <div className="side-content">
                    <h5>Tags</h5>
                    <ul className="tags-list">
                        <li><a href="#">Ronin</a></li>
                        <li><a href="#">Clinic</a></li>
                        <li><a href="#">Informations</a></li>
                        <li><a href="#">Doctors</a></li>
                        <li><a href="#">Disease</a></li>
                        <li><a href="#">Treatment</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Schedule</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
    
    <div className="footer2">
        <img src={logo2} alt=""/>
    </div>
    
    <div className="footer2-bottom">
        <div className="container">
            <div className="col-md-6">
                <p>Copyright 2014. <b>HEARTIFY</b>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
                <ul className="footer-social">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <a href="javascript:void(0)" className="bttop"><img src={backtotop} alt=""/></a>
        </div>
    </div>
</div>

    )

}
