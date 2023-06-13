import React from "react";

import clothing3 from "../static/img/slider/home-3/clothing-3.jpg"
import clothing2 from "../static/img/slider/home-3/clothing-2.jpg"



export default class Products extends React.Component {

    render()  {
      return (
  
        <main id="homepage-3">
          {/* <section className="ps-home-banner">
            <div className="slick-slider ps-carousel slick-initialized" dir="ltr"><a className="slick-arrow slick-prev slick-arrow slick-prev"><i className="icon-chevron-left" /></a>
              <div className="slick-list">
                <div className="slick-track" style={{width: '500%', left: '-100%'}}>
                  <div data-index={0} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{outline: 'none', width: '20%', position: 'relative', left: 0, opacity: 1, transition: 'opacity 1000ms ease, visibility 1000ms ease', WebkitTransition: 'opacity 1000ms ease, visibility 1000ms ease'}}>
                    <div>
                      <div className="ps-banner--market-1" style={{width: '100%', display: 'inline-block'}} tabIndex={-1}><img src="../static/img/slider/home-3/home-banner/1.jpg" alt="martfury" />
                        <div className="ps-banner__content">
                          <h5>Mega Sale Nov 2019</h5>
                          <h3>Double Combo With <br /> The Body Shop</h3>
                          <p>Sale up to <strong>50% Off </strong></p><a className="ps-btn" href="#">Shop
                            Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-index={1} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '20%', position: 'relative', left: '-20px', opacity: 0, transition: 'opacity 1000ms ease, visibility 1000ms ease', WebkitTransition: 'opacity 1000ms ease, visibility 1000ms ease'}}>
                    <div>
                      <div className="ps-banner--market-1" style={{width: '100%', display: 'inline-block'}} tabIndex={-1}><img src="../static/img/slider/home-3/home-banner/2.jpg" alt="martfury" />
                        <div className="ps-banner__content">
                          <h5>Mega Sale Nov 2017</h5>
                          <h3>IKEA Minimalist <br /> Otoman</h3>
                          <p>Discount <strong>50% Off </strong></p><a className="ps-btn" href="#">Shop
                            Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div><a className="slick-arrow slick-next slick-arrow slick-next"><i className="icon-chevron-right" /></a>
            </div>
          </section> */}
          
          
            
          
          
          <div className="ps-section--gray">
            <div className="container">
              

              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Consumer Electronics</h3>
                  <ul>
                    <li><a href="http://reactstorefronts.com/shop/best-seller">Best Seller</a></li>
                    <li><a href="http://reactstorefronts.com/shop/new-arrivals">New Arrivals</a></li>
                    <li><a href="http://reactstorefronts.com/shop/tv-television">TV Television</a></li>
                    <li><a href="http://reactstorefronts.com/shop/air-conditions">Air Condition</a></li>
                    <li><a href="http://reactstorefronts.com/shop/washing-machine">Washing Machine</a></li>
                    <li><a href="http://reactstorefronts.com/shop/microware">Microwave</a></li>
                    <li><a href="http://reactstorefronts.com/shop/refrigerator">Refrigerator</a></li>
                    <li><a href="http://reactstorefronts.com/shop/office-electronic">Office Electronic</a>
                    </li>
                    <li><a href="http://reactstorefronts.com/shop/car-electronic">Car Electronic</a></li>
                    <li><a href="http://reactstorefronts.com/shop/sale-and-deal">Sales &amp; Deals</a></li>
                  </ul><a className="ps-block__more-link" href="http://reactstorefronts.com/shop">View All</a>
                </div>
                <div className="ps-block__slider">
                <a  style={{width: '100%', display: 'inline-block'}}><img src={clothing3} alt="martfury" /></a>
                
                  {/* <div className="slick-slider ps-carousel slick-initialized" dir="ltr"><a className="slick-arrow slick-prev slick-arrow slick-prev"><i className="icon-chevron-left" /></a>
                    <div className="slick-list">
                      <div className="slick-track" style={{width: '700%', left: '-100%'}}>
                        <div  className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a  style={{width: '100%', display: 'inline-block'}}><img src={clothing3} alt="martfury" /></a></div>
                        </div>
                        <div className="slick-slide slick-active slick-current"  aria-hidden="false" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/electronic-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={1} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/electronic-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={2} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/electronic-3.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={3} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/electronic-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={4} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/electronic-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={5} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/electronic-3.jpg" alt="martfury" /></a></div>
                        </div>
                      </div>
                    </div><a className="slick-arrow slick-next slick-arrow slick-next"><i className="icon-chevron-right" /></a>
                  </div> */}
                </div>
                <div className="ps-block__product-box">
                    <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                            <a href="/product/4"> 
                                <img src="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg" alt="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg"/>
                            </a>
                            
                        </div>
                        <div className="ps-product__container">
                            <div className="ps-product__content">
                                <a className="ps-product__title" href="/product/4">Herschel Leather Duffle Bag In Brown Color</a>
                                <p className="ps-product__price">
                                    <span>$</span>
                                    "125.3"
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                            <a href="/product/4"> 
                                <img src="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg" alt="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg"/>
                            </a>
                            
                        </div>
                        <div className="ps-product__container">
                            <div className="ps-product__content">
                                <a className="ps-product__title" href="/product/4">Herschel Leather Duffle Bag In Brown Color</a>
                                <p className="ps-product__price">
                                    <span>$</span>
                                    "125.3"
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                            <a href="/product/4"> 
                                <img src="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg" alt="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg"/>
                            </a>
                            
                        </div>
                        <div className="ps-product__container">
                            <div className="ps-product__content">
                                <a className="ps-product__title" href="/product/4">Herschel Leather Duffle Bag In Brown Color</a>
                                <p className="ps-product__price">
                                    <span>$</span>
                                    "125.3"
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                            <a href="/product/4"> 
                                <img src="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg" alt="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg"/>
                            </a>
                            
                        </div>
                        <div className="ps-product__container">
                            <div className="ps-product__content">
                                <a className="ps-product__title" href="/product/4">Herschel Leather Duffle Bag In Brown Color</a>
                                <p className="ps-product__price">
                                    <span>$</span>
                                    "125.3"
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                            <a href="/product/4"> 
                                <img src="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg" alt="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg"/>
                            </a>
                            
                        </div>
                        <div className="ps-product__container">
                            <div className="ps-product__content">
                                <a className="ps-product__title" href="/product/4">Herschel Leather Duffle Bag In Brown Color</a>
                                <p className="ps-product__price">
                                    <span>$</span>
                                    "125.3"
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                            <a href="/product/4"> 
                                <img src="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg" alt="https://beta.apinouthemes.com/uploads/b5deb586612e4c808272da9913b8109b.jpg"/>
                            </a>
                            
                        </div>
                        <div className="ps-product__container">
                            <div className="ps-product__content">
                                <a className="ps-product__title" href="/product/4">Herschel Leather Duffle Bag In Brown Color</a>
                                <p className="ps-product__price">
                                    <span>$</span>
                                    "125.3"
                                </p>
                            </div>
                            
                        </div>
                    </div>
                  
                </div>
              </div>

              {/* <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Computer &amp; Techologies</h3>
                  <ul>
                    <li><a href="http://reactstorefronts.com/shop/best-seller">Best Seller</a></li>
                    <li><a href="http://reactstorefronts.com/shop/new-arrivals">New Arrivals</a></li>
                    <li><a href="http://reactstorefronts.com/shop/women">Desktop PC</a></li>
                    <li><a href="http://reactstorefronts.com/shop/men">Laptop</a></li>
                    <li><a href="http://reactstorefronts.com/shop/smartphone">Smartphones</a></li>
                    <li><a href="http://reactstorefronts.com/shop/tablets">Tablets</a></li>
                    <li><a href="http://reactstorefronts.com/shop/storage-and-memory">Storage &amp;
                        Memory</a></li>
                    <li><a href="http://reactstorefronts.com/shop/pc-component">PC Component</a></li>
                    <li><a href="http://reactstorefronts.com/shop/game-accessories">Game Accessories</a>
                    </li>
                    <li><a href="http://reactstorefronts.com/shop/sale-and-deal">Sales &amp; Deals</a></li>
                  </ul><a className="ps-block__more-link" href="http://reactstorefronts.com/shop">View All</a>
                </div>
                <div className="ps-block__slider">
                  <div className="slick-slider ps-carousel slick-initialized" dir="ltr"><a className="slick-arrow slick-prev slick-arrow slick-prev"><i className="icon-chevron-left" /></a>
                    <div className="slick-list">
                      <div className="slick-track" style={{width: '700%', left: '-100%'}}>
                        <div data-index={-1} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/technology-3.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={0} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/technology-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={1} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/technology-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={2} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/technology-3.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={3} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/technology-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={4} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/technology-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={5} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/technology-3.jpg" alt="martfury" /></a></div>
                        </div>
                      </div>
                    </div><a className="slick-arrow slick-next slick-arrow slick-next"><i className="icon-chevron-right" /></a>
                  </div>
                </div>
                <div className="ps-block__product-box">
                  <p>No product found.</p>
                </div>
              </div>
              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Home <br /> Garden &amp; Kitchen</h3>
                  <ul>
                    <li><a href="http://reactstorefronts.com/shop/best-seller">Best Seller</a></li>
                    <li><a href="http://reactstorefronts.com/shop/new-arrivals">New Arrivals</a></li>
                    <li><a href="http://reactstorefronts.com/shop/furniture">Furniture</a></li>
                    <li><a href="http://reactstorefronts.com/shop/home-decor">Home Decor</a></li>
                    <li><a href="http://reactstorefronts.com/shop/cookware">Cookware</a></li>
                    <li><a href="http://reactstorefronts.com/shop/utensils-and-gadget">Utensils &amp;
                        Gadget</a></li>
                    <li><a href="http://reactstorefronts.com/shop/garden-tools">Garden Tools</a></li>
                    <li><a href="http://reactstorefronts.com/shop/acessesories">Acessesories</a></li>
                  </ul><a className="ps-block__more-link" href="http://reactstorefronts.com/shop">View All</a>
                </div>
                <div className="ps-block__slider">
                  <div className="slick-slider ps-carousel slick-initialized" dir="ltr"><a className="slick-arrow slick-prev slick-arrow slick-prev"><i className="icon-chevron-left" /></a>
                    <div className="slick-list">
                      <div className="slick-track" style={{width: '700%', left: '-100%'}}>
                        <div data-index={-1} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/kitchen-3.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={0} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/kitchen-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={1} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/kitchen-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={2} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/kitchen-3.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={3} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/kitchen-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={4} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/kitchen-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={5} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/kitchen-3.jpg" alt="martfury" /></a></div>
                        </div>
                      </div>
                    </div><a className="slick-arrow slick-next slick-arrow slick-next"><i className="icon-chevron-right" /></a>
                  </div>
                </div>
                <div className="ps-block__product-box">
                  <p>No product found.</p>
                </div>
              </div>
              <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                  <h3>Health &amp; <br /> Beauty</h3>
                  <ul>
                    <li><a href="http://reactstorefronts.com/shop/best-seller">Best Seller</a></li>
                    <li><a href="http://reactstorefronts.com/shop/new-arrivals">New Arrivals</a></li>
                    <li><a href="http://reactstorefronts.com/shop/women">Women</a></li>
                    <li><a href="http://reactstorefronts.com/shop/men">Men</a></li>
                    <li><a href="http://reactstorefronts.com/shop/girls">Girls</a></li>
                    <li><a href="http://reactstorefronts.com/shop/boys">Boys</a></li>
                    <li><a href="http://reactstorefronts.com/shop/baby">Baby</a></li>
                    <li><a href="http://reactstorefronts.com/shop/sale-and-deal">Sales &amp; Deals</a></li>
                  </ul><a className="ps-block__more-link" href="http://reactstorefronts.com/shop">View All</a>
                </div>
                <div className="ps-block__slider">
                  <div className="slick-slider ps-carousel slick-initialized" dir="ltr"><a className="slick-arrow slick-prev slick-arrow slick-prev"><i className="icon-chevron-left" /></a>
                    <div className="slick-list">
                      <div className="slick-track" style={{width: '700%', left: '-100%'}}>
                        <div data-index={-1} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/healthy-3.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={0} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/healthy-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={1} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/healthy-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={2} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{outline: 'none', width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/healthy-3.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={3} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/healthy-1.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={4} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/healthy-2.jpg" alt="martfury" /></a></div>
                        </div>
                        <div data-index={5} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{width: '14.285714285714286%'}}>
                          <div><a tabIndex={-1} style={{width: '100%', display: 'inline-block'}}><img src="../static/img/slider/home-3/healthy-3.jpg" alt="martfury" /></a></div>
                        </div>
                      </div>
                    </div><a className="slick-arrow slick-next slick-arrow slick-next"><i className="icon-chevron-right" /></a>
                  </div>
                </div>
                <div className="ps-block__product-box">
                  <p>No product found.</p>
                </div>
              </div> */}
              
            </div>
          </div>
          <section className="ps-newsletter">
            <div className="ps-container">
              <form className="ps-form--newsletter" action="http://reactstorefronts.com/home/do_action" method="post">
                <div className="row">
                  <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-form__left">
                      <h3>Newsletter</h3>
                      <p>Subcribe to get information about products and coupons</p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-form__right">
                      <div className="form-group--nest"><input type="email" className="form-control" placeholder="Email address" /><button className="ps-btn">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      );
    }
  };