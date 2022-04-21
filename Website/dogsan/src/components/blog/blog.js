import React from 'react'

export default function blog() {
  return (
    <div> <section id="blog">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
          <div className="blog-stat text-center">
            <h2>From the blog</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
        <div id="blog-posts">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="blog-post">
              <div className="post-img">
                <img src="./assets/img/blog/post-img1.jpg" className="img-responsive" alt="" />
                <img className="ab-icon" src="./assets/img/blog/post-icon.png" alt="" />
              </div>
              <div className="info-col">
                <a href="./single_post.html">
                  <h5>This is a Standard post format with preview picture</h5>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
              </div>
              <ul className="list-inline list-unstyled post-nav">
                <li className="post-links"><a href=""><i className="icon-user"></i> The Ronins</a></li>
                <li className="post-links"><a href=""><i className="icon-calendar"></i> 23 October 2013</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="blog-post">
              <div className="post-img">
                <img src="./assets/img/blog/post-img2.jpg" className="img-responsive" alt="" />
                <img className="ab-icon" src="./assets/img/blog/post-icon.png" alt="" />
              </div>
              <div className="info-col">
                <a href="./single_post.html">
                  <h5>This is a Standard post format with preview picture</h5>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
              </div>
              <ul className="list-inline list-unstyled post-nav">
                <li className="post-links"><a href=""><i className="icon-user"></i> The Ronins</a></li>
                <li className="post-links"><a href=""><i className="icon-calendar"></i> 23 October 2013</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="blog-post">
              <div className="post-img">
                <img src="./assets/img/blog/post-img3.jpg" className="img-responsive" alt="" />
                <img className="ab-icon" src="./assets/img/blog/post-icon.png" alt="" />
              </div>
              <div className="info-col">
                <a href="./single_post.html">
                  <h5>This is a Standard post format with preview picture</h5>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
              </div>
              <ul className="list-inline list-unstyled post-nav">
                <li className="post-links"><a href=""><i className="icon-user"></i> The Ronins</a></li>
                <li className="post-links"><a href=""><i className="icon-calendar"></i> 23 October 2013</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <div className="clearfix"></div></div>
  )
}
