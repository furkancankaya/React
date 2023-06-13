import React from "react";
import en from "../../images/en.png";
import fr from "../../images/fr.png";
import germany from "../../images/germany.png";
import logo from "../../images/logo.png";




export default class Header extends React.Component {


    render()  {
      return (
  
        <header className="header header--standard header--market-place-1" id="headerSticky">
          <div className="header__top">
            <div className="container">
              <div className="header__left">
                <p>Welcome to Martfury Online Shopping Store !</p>
              </div>
              <div className="header__right">
                <ul className="header__top-links">
                  <li><a href="http://reactstorefronts.com/vendor/store-list">Store Location</a></li>
                  <li><a href="http://reactstorefronts.com/page/blank">Track Your Order</a></li>
                  <li>
                    <div className="ps-dropdown"><a href="http://reactstorefronts.com/">USD</a>
                      <ul className="ps-dropdown-menu">
                        <li><a href="http://reactstorefronts.com/">USD</a></li>
                        <li><a href="http://reactstorefronts.com/">EURO</a></li>
                        <li><a href="http://reactstorefronts.com/">GBP</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="ps-dropdown language"><a href="#"><img src={en} alt="martfury" />English</a>
                      <ul className="ps-dropdown-menu">
                        <li><a href="#"><img src={germany} alt="martfury" />Germany</a></li>
                        <li><a href="#"><img src={fr} alt="martfury" />France</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header__content">
            <div className="container">
              <div className="header__content-left"><a className="ps-logo" href="market-place.html"><img  src={logo} alt="martfury" /></a>
                <div className="menu--product-categories">
                  <div className="menu__toggle"><i className="icon-menu" /><span> Shop by Department</span></div>
                  <div className="menu__content">
                    <ul className="menu--dropdown">
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-star" />Hot
                          Promotions</a></li>
                      <li className="menu-item-has-children has-mega-menu"><a href="http://reactstorefronts.com/shop"><i className="icon-laundry" />Consumer
                          Electronic</a>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Electronic</h4>
                            <ul className="mega-menu__list">
                              <li><a href="http://reactstorefronts.com/shop">Home Audio &amp;
                                  Theathers</a></li>
                              <li><a href="http://reactstorefronts.com/shop">TV &amp; Videos</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Camera, Photos &amp;
                                  Videos</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Cellphones &amp;
                                  Accessories</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Headphones</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Videosgames</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Wireless Speakers</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Office Electronic</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Accessories &amp; Parts</h4>
                            <ul className="mega-menu__list">
                              <li><a href="http://reactstorefronts.com/shop">Digital Cables</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Audio &amp; Video
                                  Cables</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Batteries</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-shirt" />Clothing
                          &amp; Apparel</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-lampshade" />Home,
                          Garden &amp; Kitchen</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-heart-pulse" />Health &amp; Beauty</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-diamond2" />Yewelry
                          &amp; Watches</a></li>
                      <li className="menu-item-has-children has-mega-menu"><a href="http://reactstorefronts.com/shop"><i className="icon-desktop" />Computer
                          &amp; Technology</a>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Computer &amp; Technologies</h4>
                            <ul className="mega-menu__list">
                              <li><a href="http://reactstorefronts.com/shop">Computer &amp;
                                  Tablets</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Laptop</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Monitors</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Networking</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Drive &amp;
                                  Storages</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Computer
                                  Components</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Security &amp;
                                  Protection</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Gaming Laptop</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Accessories</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-baby-bottle" />Babies &amp; Moms</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-baseball" />Sport
                          &amp; Outdoor</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-smartphone" />Phones
                          &amp; Accessories</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-book2" />Books &amp;
                          Office</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-car-siren" />Cars
                          &amp; Motocycles</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-wrench" />Home
                          Improments</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-tag" />Vouchers
                          &amp; Services</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header__content-center">
                <form className="ps-form--quick-search" method="get" action="http://reactstorefronts.com/">
                  <div className="ps-form__categories"><select className="form-control">
                      <option value="All">All</option>
                      <option value="Babies & Moms">Babies &amp; Moms</option>
                      <option value="Books & Office">Books &amp; Office</option>
                      <option value="Cars & Motocycles">Cars &amp; Motocycles</option>
                      <option value="Clothing & Apparel">Clothing &amp; Apparel</option>
                      <option value=" Accessories">&nbsp;Accessories</option>
                      <option value="Bags">Bags</option>
                      <option value="Kid’s Fashion">Kid’s Fashion</option>
                      <option value="Mens">Mens</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Sunglasses">Sunglasses</option>
                      <option value="Womens">Womens</option>
                      <option value="Computers & Technologies">Computers &amp; Technologies</option>
                      <option value="Desktop PC">Desktop PC</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Smartphones">Smartphones</option>
                      <option value="Consumer Electrics">Consumer Electrics</option>
                      <option value="Air Conditioners">Air Conditioners</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Type Hanging Cell">Type Hanging Cell</option>
                      <option value="Audios & Theaters">Audios &amp; Theaters</option>
                      <option value="Headphone">Headphone</option>
                      <option value="Home Theater System">Home Theater System</option>
                      <option value="Speakers">Speakers</option>
                      <option value="Car Electronics">Car Electronics</option>
                      <option value="Audio & Video">Audio &amp; Video</option>
                      <option value="Car Security">Car Security</option>
                      <option value="Radar Detector">Radar Detector</option>
                      <option value="Vehicle GPS">Vehicle GPS</option>
                      <option value="Office Electronics">Office Electronics</option>
                      <option value="Printers">Printers</option>
                      <option value="Projectors">Projectors</option>
                      <option value="Scanners">Scanners</option>
                      <option value="Store & Business">Store &amp; Business</option>
                      <option value="Refrigerators">Refrigerators</option>
                      <option value="TV Televisions">TV Televisions</option>
                      <option value="4K Ultra HD TVs">4K Ultra HD TVs</option>
                      <option value="LED TVs">LED TVs</option>
                      <option value="OLED TVs">OLED TVs</option>
                      <option value="Washing Machines">Washing Machines</option>
                      <option value="Type Drying Clothes">Type Drying Clothes</option>
                      <option value="Type Horizontal">Type Horizontal</option>
                      <option value="Type Vertical">Type Vertical</option>
                      <option value="Garden & Kitchen">Garden &amp; Kitchen</option>
                      <option value="Cookware">Cookware</option>
                      <option value="Decoration">Decoration</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Garden Tools">Garden Tools</option>
                      <option value="Home Improvement">Home Improvement</option>
                      <option value="Powers And Hand Tools">Powers And Hand Tools</option>
                      <option value="Utensil & Gadget">Utensil &amp; Gadget</option>
                      <option value="Health & Beauty">Health &amp; Beauty</option>
                      <option value="Equipments">Equipments</option>
                      <option value="Hair Care">Hair Care</option>
                      <option value="Perfumer">Perfumer</option>
                      <option value="Wine Cabinets">Wine Cabinets</option>
                    </select></div>
                  <div className="ps-form__input"><input type="text" className="form-control" defaultValue placeholder="I'm shopping for..." /></div><button>Search</button>
                  <div className="ps-panel--search-result">
                    <div className="ps-panel__content">
                      <p>No product found.</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="header__content-right">
                <div className="header__actions"><a className="header__extra" href="http://reactstorefronts.com/account/wishlist"><i className="icon-heart" /><span><i>0</i></span></a>
                  <div className="ps-cart--mini"><a className="header__extra" href="#"><i className="icon-bag2" /><span><i>0</i></span></a>
                    <div className="ps-cart__content">
                      <div className="ps-cart__items"><span>No products in cart</span></div>
                    </div>
                  </div>
                  <div className="ps-block--user-header">
                    <div className="ps-block__left"><i className="icon-user" /></div>
                    <div className="ps-block__right"><a href="http://reactstorefronts.com/account/login">Login</a><a href="http://reactstorefronts.com/account/register">Register</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <div className="container">
              <div className="navigation__left">
                <div className="menu--product-categories">
                  <div className="menu__toggle"><i className="icon-menu" /><span> Shop by Department</span></div>
                  <div className="menu__content">
                    <ul className="menu--dropdown">
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-star" />Hot
                          Promotions</a></li>
                      <li className="menu-item-has-children has-mega-menu"><a href="http://reactstorefronts.com/shop"><i className="icon-laundry" />Consumer
                          Electronic</a>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Electronic</h4>
                            <ul className="mega-menu__list">
                              <li><a href="http://reactstorefronts.com/shop">Home Audio &amp;
                                  Theathers</a></li>
                              <li><a href="http://reactstorefronts.com/shop">TV &amp; Videos</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Camera, Photos &amp;
                                  Videos</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Cellphones &amp;
                                  Accessories</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Headphones</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Videosgames</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Wireless Speakers</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Office Electronic</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mega-menu__column">
                            <h4>Accessories &amp; Parts</h4>
                            <ul className="mega-menu__list">
                              <li><a href="http://reactstorefronts.com/shop">Digital Cables</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Audio &amp; Video
                                  Cables</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Batteries</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-shirt" />Clothing
                          &amp; Apparel</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-lampshade" />Home,
                          Garden &amp; Kitchen</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-heart-pulse" />Health &amp; Beauty</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-diamond2" />Yewelry
                          &amp; Watches</a></li>
                      <li className="menu-item-has-children has-mega-menu"><a href="http://reactstorefronts.com/shop"><i className="icon-desktop" />Computer
                          &amp; Technology</a>
                        <div className="mega-menu">
                          <div className="mega-menu__column">
                            <h4>Computer &amp; Technologies</h4>
                            <ul className="mega-menu__list">
                              <li><a href="http://reactstorefronts.com/shop">Computer &amp;
                                  Tablets</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Laptop</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Monitors</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Networking</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Drive &amp;
                                  Storages</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Computer
                                  Components</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Security &amp;
                                  Protection</a></li>
                              <li><a href="http://reactstorefronts.com/shop">Gaming Laptop</a>
                              </li>
                              <li><a href="http://reactstorefronts.com/shop">Accessories</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-baby-bottle" />Babies &amp; Moms</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-baseball" />Sport
                          &amp; Outdoor</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-smartphone" />Phones
                          &amp; Accessories</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-book2" />Books &amp;
                          Office</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-car-siren" />Cars
                          &amp; Motocycles</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-wrench" />Home
                          Improments</a></li>
                      <li><a href="http://reactstorefronts.com/shop"><i className="icon-tag" />Vouchers
                          &amp; Services</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="navigation__right">
                <ul className="menu">
                  <li className="menu-item-has-children dropdown"><a href="http://reactstorefronts.com/">Home</a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children dropdown"><a href="http://reactstorefronts.com/">Marketplace Full Width</a></li>
                      <li className="menu-item-has-children dropdown"><a href="auto-part.html">Home Auto
                          Parts</a></li>
                      <li className="menu-item-has-children dropdown"><a href="technology.html">Home
                          Technology</a></li>
                      <li className="menu-item-has-children dropdown"><a href="organic.html">Home Organic</a>
                      </li>
                      <li className="menu-item-has-children dropdown"><a href="market-place.html">Home
                          Marketplace V1</a></li>
                      <li className="menu-item-has-children dropdown"><a href="market-place-2.html">Home
                          Marketplace V2</a></li>
                      <li className="menu-item-has-children dropdown"><a href="market-place-3.html">Home
                          Marketplace V3</a></li>
                      <li className="menu-item-has-children dropdown"><a href="market-place-4.html">Home
                          Marketplace V4</a></li>
                      <li className="menu-item-has-children dropdown"><a href="electronic.html">Home
                          Electronic</a></li>
                      <li className="menu-item-has-children dropdown"><a href="furniture.html">Home
                          Furniture</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children has-mega-menu"><a href="http://reactstorefronts.com/shop">Shop</a>
                    <div className="mega-menu">
                      <div className="mega-menu__column">
                        <h4>Catalog Pages</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/shop">Shop Default</a></li>
                          <li><a href="http://reactstorefronts.com/shop/shop-fullwidth">Shop
                              Fullwidth</a></li>
                          <li><a href="http://reactstorefronts.com/shop/shop-categories">Shop
                              Categories</a></li>
                          <li><a href="http://reactstorefronts.com/shop/shop-sidebar">Shop Sidebar</a>
                          </li>
                          <li><a href="http://reactstorefronts.com/shop/shop-sidebar-without-banner">Shop
                              Without Banner</a></li>
                          <li><a href="http://reactstorefronts.com/shop/shop-carousel">Shop
                              Carousel</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4>Product Layout</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/product/3">Default</a></li>
                          <li><a href="http://reactstorefronts.com/product/extended/7">Extended</a>
                          </li>
                          <li><a href="http://reactstorefronts.com/product/full-content/7">Full
                              Content</a></li>
                          <li><a href="http://reactstorefronts.com/product/boxed/7">Boxed</a></li>
                          <li><a href="http://reactstorefronts.com/product/sidebar/7">Sidebar</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4>Product Types</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/product/3">Simple</a></li>
                          <li><a href="http://reactstorefronts.com/product/image-swatches/11">Image
                              swatches</a></li>
                          <li><a href="http://reactstorefronts.com/product/countdown/10">Countdown</a>
                          </li>
                          <li><a href="http://reactstorefronts.com/product/affiliate/7">Affiliate</a>
                          </li>
                          <li><a href="http://reactstorefronts.com/product/on-sale/7">On sale</a></li>
                          <li><a href="http://reactstorefronts.com/product/groupped/22">Grouped</a>
                          </li>
                          <li><a href="http://reactstorefronts.com/product/out-of-stock/7">Out Of
                              Stock</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4>Ecomerce Pages</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/account/shopping-cart">Shopping
                              Cart</a></li>
                          <li><a href="http://reactstorefronts.com/account/checkout">Checkout</a></li>
                          <li><a href="http://reactstorefronts.com/account/wishlist">Whishlist</a>
                          </li>
                          <li><a href="http://reactstorefronts.com/account/compare">Compare</a></li>
                          <li><a href="http://reactstorefronts.com/account/order-tracking">Order
                              Tracking</a></li>
                          <li><a href="http://reactstorefronts.com/account/login">My Account</a></li>
                          <li><a href="http://reactstorefronts.com/account/login">Login / Register</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children has-mega-menu"><a href="http://reactstorefronts.com/">Pages</a>
                    <div className="mega-menu">
                      <div className="mega-menu__column">
                        <h4>Basic Page</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/page/about-us">About Us</a></li>
                          <li><a href="http://reactstorefronts.com/page/contact-us">Contact</a></li>
                          <li><a href="http://reactstorefronts.com/page/faqs">Faqs</a></li>
                          <li><a href="http://reactstorefronts.com/page/page-404">404 Page</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4>Vendor Pages</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/vendor/become-a-vendor">Become a
                              Vendor</a></li>
                          <li><a href="http://reactstorefronts.com/store/global-office">Vendor
                              Store</a></li>
                          <li><a href="http://reactstorefronts.com/stores">Store List</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children has-mega-menu"><a href="http://reactstorefronts.com/blog">Blogs</a>
                    <div className="mega-menu">
                      <div className="mega-menu__column">
                        <h4>Blog Layout</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/blog">Grid</a></li>
                          <li><a href="http://reactstorefronts.com/blog/blog-small-thumbnail">Small
                              Thumb</a></li>
                          <li><a href="http://reactstorefronts.com/blog/blog-left-sidebar">Left
                              Sidebar</a></li>
                          <li><a href="http://reactstorefronts.com/blog/blog-right-sidebar">Right
                              Sidebar</a></li>
                        </ul>
                      </div>
                      <div className="mega-menu__column">
                        <h4>Single Blog</h4>
                        <ul className="mega-menu__list">
                          <li><a href="http://reactstorefronts.com/post/default">Single 1</a></li>
                          <li><a href="http://reactstorefronts.com/post/detail-2">Single 2</a></li>
                          <li><a href="http://reactstorefronts.com/post/detail-3">Single 3</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="ps-block--header-hotline inline">
                  <p><i className="icon-telephone" />Hotline:<strong> 1-800-234-5678</strong></p>
                </div>
              </div>
            </div>
          </nav>
        </header>
      );
    }
  };