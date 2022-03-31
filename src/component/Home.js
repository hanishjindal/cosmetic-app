import React, { useEffect } from "react";
import img1 from "./images/logo.png";
import img2 from "./images/content-img-1.png";
import img3 from "./images/home-img-1.png";
import img4 from "./images/content-img-2.png";
import img5 from "./images/home-img-2.png";
import img6 from "./images/content-img-3.png";
import img7 from "./images/home-img-3.png";
import img8 from "./images/category-1.png";
import img9 from "./images/category-2.png";
import img10 from "./images/category-3.png";
import img11 from "./images/category-4.png";
import img12 from "./images/category-5.png";
import img13 from "./images/category-6.png";
import img14 from "./images/product-1.jpg";
import img15 from "./images/product-2.jpg";
import img16 from "./images/product-3.jpg";
import img17 from "./images/product-4.jpg";
import img18 from "./images/product-5.jpg";
import img19 from "./images/product-6.jpg";
import img20 from "./images/product-7.jpg";
import img21 from "./images/product-8.jpg";
import img22 from "./images/img-1.jpg";
import img23 from "./images/img-2.jpg";
import img24 from "./images/img-3.jpg";
import img25 from "./images/img-4.jpg";
import img26 from "./images/img-5.jpg";
import img27 from "./images/img-6.jpg";
import img28 from "./images/team-1.png";
import img29 from "./images/team-2.png";
import img30 from "./images/team-3.png";
import img31 from "./images/arrival-1.jpg";
import img32 from "./images/arrival-2.jpg";
import img33 from "./images/arrival-3.jpg";
import img34 from "./images/arrival-4.jpg";
import img35 from "./images/arrival-5.jpg";
import img36 from "./images/arrival-6.jpg";
import img37 from "./images/arrival-7.jpg";
import img38 from "./images/arrival-8.jpg";
import img39 from "./images/pic-1.png";
import img40 from "./images/pic-2.png";
import img41 from "./images/pic-3.png";
import img42 from "./images/pic-4.png";
import img43 from "./images/pic-5.png";
import img44 from "./images/pic-6.png";
import img45 from "./images/service-1.png";
import img46 from "./images/service-2.png";
import img47 from "./images/service-3.png";
import img48 from "./images/img-1.jpg";
import img49 from "./images/img-2.jpg";
import img50 from "./images/img-3.jpg";
import img51 from "./images/img-4.jpg";
import img52 from "./images/img-5.jpg";
import img53 from "./images/img-6.jpg";

function Home() {
  useEffect(() => {
    let navbar = document.querySelector(".navbar");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
    };

    document.querySelector("#close-navbar").onclick = () => {
      navbar.classList.remove("active");
    };

    let searchForm = document.querySelector(".search-form");

    document.querySelector("#search-btn").onclick = () => {
      searchForm.classList.toggle("active");
    };

    window.onscroll = () => {
      navbar.classList.remove("active");
      searchForm.classList.remove("active");
    };

    let slides = document.querySelectorAll(".home .slide");
    let index = 0;

    function next() {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }

    function prev() {
      slides[index].classList.remove("active");
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add("active");
    }
  }, []);

  return (
    <div>
      <h1>
        <header class="header">
          <a href="#home" class="logo">
            {" "}
            <img src={img1} alt="" />{" "}
          </a>

          <form action="" class="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label for="search-box" class="fas fa-search"></label>
          </form>

          <div class="icons">
            <div id="menu-btn" class="fas fa-bars"></div>
            <div id="search-btn" class="fas fa-search"></div>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-shopping-cart"></a>
          </div>
        </header>

        <nav class="navbar">
          <div id="close-navbar" class="fas fa-times"></div>
          <a href="#home">home</a>
          <a href="#shop">shop</a>
          <a href="#gallery">gallery</a>
          <a href="#team">team</a>
          <a href="#arrivals">arrivals</a>
          <a href="#blogs">blogs</a>
        </nav>

        <section class="home" id="home">
          <div class="slide active">
            <div class="content">
              <img src={img2} alt="" />
              <span>new arrivals 2022</span>
              <h3>cosmetics</h3>
              <a href="#" class="btn">
                read more
              </a>
              <div class="controls">
                <div class="fas fa-angle-left" onclick="prev()"></div>
                <div class="fas fa-angle-right" onclick="next()"></div>
              </div>
            </div>
            <div class="image">
              <img src={img3} alt="" />
            </div>
          </div>

          <div class="slide">
            <div class="content">
              <img src={img4} alt="" />
              <span>new arrivals 2022</span>
              <h3>accessories</h3>
              <a href="#" class="btn">
                read more
              </a>
              <div class="controls">
                <div class="fas fa-angle-left" onclick="prev()"></div>
                <div class="fas fa-angle-right" onclick="next()"></div>
              </div>
            </div>
            <div class="image">
              <img src={img5} alt="" />
            </div>
          </div>

          <div class="slide">
            <div class="content">
              <img src={img6} alt="" />
              <span>new collections</span>
              <h3>skin care</h3>
              <a href="#" class="btn">
                read more
              </a>
              <div class="controls">
                <div class="fas fa-angle-left" onclick="prev()"></div>
                <div class="fas fa-angle-right" onclick="next()"></div>
              </div>
            </div>
            <div class="image">
              <img src={img7} alt="" />
            </div>
          </div>
        </section>

        <section class="category">
          <a href="#" class="box">
            <img src={img8} alt="" />
            <p>cosmetics</p>
          </a>

          <a href="#" class="box">
            <img src={img9} alt="" />
            <p>makeup</p>
          </a>

          <a href="#" class="box">
            <img src={img10} alt="" />
            <p>powder</p>
          </a>

          <a href="#" class="box">
            <img src={img11} alt="" />
            <p>lotions</p>
          </a>

          <a href="#" class="box">
            <img src={img12} alt="" />
            <p>lipstick</p>
          </a>

          <a href="#" class="box">
            <img src={img13} alt="" />
            <p>mascara</p>
          </a>
        </section>

        <section class="about" id="about">
          <div class="content">
            <span>why choose us?</span>
            <h3>makeup makes difference</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              explicabo, quos voluptate incidunt illo, blanditiis, accusamus ut
              quisquam quia sapiente iure. Rerum earum corrupti neque, nobis
              ratione obcaecati voluptatem fuga.
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </section>

        <section class="shop" id="shop">
          <div class="heading">
            <h1>featured products</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              consequuntur officia beatae distinctio minus optio?
            </p>
          </div>

          <div class="swiper products-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img14} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img15} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img16} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img17} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img18} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img19} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img20} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <span class="discount">-25%</span>
                  <img src={img21} alt="" />
                  <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                  </div>
                </div>
                <div class="content">
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </section>

        <section class="gallery" id="gallery">
          <div class="heading">
            <h1>our gallery</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              consequuntur officia beatae distinctio minus optio?
            </p>
          </div>

          <div class="lightbox">
            <a href="images/img-1.jpg">
              <img src={img22} alt="" />
            </a>
            <a href="images/img-2.jpg">
              <img src={img23} alt="" />
            </a>
            <a href="images/img-3.jpg">
              <img src={img24} alt="" />
            </a>
            <a href="images/img-4.jpg">
              <img src={img25} alt="" />
            </a>
            <a href="images/img-5.jpg">
              <img src={img26} alt="" />
            </a>
            <a href="images/img-6.jpg">
              <img src={img27} alt="" />
            </a>
          </div>
        </section>

        <section class="team" id="team">
          <div class="heading">
            <h1>our team</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              consequuntur officia beatae distinctio minus optio?
            </p>
          </div>

          <div class="box-container">
            <div class="box">
              <div class="image">
                <img src={img28} alt="" />
                <div class="share">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                </div>
              </div>
              <div class="content">
                <h3>Shama</h3>
                <p>make-up artist</p>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <img src={img29} alt="" />
                <div class="share">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                </div>
              </div>
              <div class="content">
                <h3>Malti</h3>
                <p>make-up artist</p>
              </div>
            </div>

            <div class="box">
              <div class="image">
                <img src={img30} alt="" />
                <div class="share">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                </div>
              </div>
              <div class="content">
                <h3>Sheenu</h3>
                <p>make-up artist</p>
              </div>
            </div>
          </div>
        </section>

        <section class="arrivals" id="arrivals">
          <div class="heading">
            <h1>new arrivals</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              consequuntur officia beatae distinctio minus optio?
            </p>
          </div>

          <div class="swiper arrivals-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img31} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img32} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img33} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img34} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img35} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img36} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img37} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img38} alt="" />
                </div>
                <div class="content">
                  <p>beauty products</p>
                  <div class="price">
                    ₹849.99 <span>₹879.99</span>
                  </div>
                  <a href="#" class="btn">
                    add to cart
                  </a>
                </div>
              </div>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </section>

        <section class="reviews">
          <div class="swiper reviews-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide">
                <div class="user">
                  <img src={img39} alt="" />
                  <div class="info">
                    <h3>Vishu</h3>
                    <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  quis ipsa aspernatur incidunt iusto veniam cumque error
                  quaerat officia. Aspernatur?
                </p>
              </div>

              <div class="swiper-slide slide">
                <div class="user">
                  <img src={img40} alt="" />
                  <div class="info">
                    <h3>Amish</h3>
                    <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum similique, numquam non, quasi, voluptatibus
                  perspiciatis fugiat incidunt veniam nulla in aut aliquid
                  necessitatibus nobis reiciendis ullam explicabo. Nulla, rem
                  adipisci.
                </p>
              </div>

              <div class="swiper-slide slide">
                <div class="user">
                  <img src={img41} alt="" />
                  <div class="info">
                    <h3>himanshu</h3>
                    <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p class="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  aliquid mollitia voluptatem alias illo officiis.
                </p>
              </div>

              <div class="swiper-slide slide">
                <div class="user">
                  <img src={img42} alt="" />
                  <div class="info">
                    <h3>Gauri</h3>
                    <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  quis ipsa aspernatur incidunt iusto veniam cumque error
                  quaerat officia. Aspernatur?
                </p>
              </div>

              <div class="swiper-slide slide">
                <div class="user">
                  <img src={img43} alt="" />
                  <div class="info">
                    <h3>Bhanu</h3>
                    <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sequi minima sed obcaecati iste beatae quo
                  praesentium, deleniti earum velit labore nobis voluptates a
                  quam veniam delectus fugiat! Saepe, eos!
                </p>
              </div>

              <div class="swiper-slide slide">
                <div class="user">
                  <img src={img44} alt="" />
                  <div class="info">
                    <h3>Cherry</h3>
                    <div class="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  quis ipsa aspernatur incidunt iusto veniam cumque error
                  quaerat officia. Aspernatur?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="service">
          <div class="box">
            <img src={img45} alt="" />
            <h3>free shipping</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, fugit?
            </p>
          </div>

          <div class="box">
            <img src={img46} alt="" />
            <h3>secure payment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, fugit?
            </p>
          </div>

          <div class="box">
            <img src={img47} alt="" />
            <h3>2/4 support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, fugit?
            </p>
          </div>
        </section>

        <section class="blogs" id="blogs">
          <div class="heading">
            <h1>our daily blogs</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              consequuntur officia beatae distinctio minus optio?
            </p>
          </div>

          <div class="swiper blogs-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img48} alt="" />
                  <div class="icons">
                    <a href="#">
                      {" "}
                      <i class="fas fa-user"></i> by admin{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fas fa-clock"></i> 21st may, 2021{" "}
                    </a>
                  </div>
                </div>
                <div class="content">
                  <h3>blog title goes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, debitis?
                  </p>
                  <a href="#" class="btn">
                    read more
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img49} alt="" />
                  <div class="icons">
                    <a href="#">
                      {" "}
                      <i class="fas fa-user"></i> by admin{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fas fa-clock"></i> 21st may, 2021{" "}
                    </a>
                  </div>
                </div>
                <div class="content">
                  <h3>blog title goes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, debitis?
                  </p>
                  <a href="#" class="btn">
                    read more
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img50} alt="" />
                  <div class="icons">
                    <a href="#">
                      {" "}
                      <i class="fas fa-user"></i> by admin{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fas fa-clock"></i> 21st may, 2021{" "}
                    </a>
                  </div>
                </div>
                <div class="content">
                  <h3>blog title goes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, debitis?
                  </p>
                  <a href="#" class="btn">
                    read more
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img51} alt="" />
                  <div class="icons">
                    <a href="#">
                      {" "}
                      <i class="fas fa-user"></i> by admin{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fas fa-clock"></i> 21st may, 2021{" "}
                    </a>
                  </div>
                </div>
                <div class="content">
                  <h3>blog title goes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, debitis?
                  </p>
                  <a href="#" class="btn">
                    read more
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img52} alt="" />
                  <div class="icons">
                    <a href="#">
                      {" "}
                      <i class="fas fa-user"></i> by admin{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fas fa-clock"></i> 21st may, 2021{" "}
                    </a>
                  </div>
                </div>
                <div class="content">
                  <h3>blog title goes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, debitis?
                  </p>
                  <a href="#" class="btn">
                    read more
                  </a>
                </div>
              </div>

              <div class="swiper-slide slide">
                <div class="image">
                  <img src={img53} alt="" />
                  <div class="icons">
                    <a href="#">
                      {" "}
                      <i class="fas fa-user"></i> by admin{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fas fa-clock"></i> 21st may, 2021{" "}
                    </a>
                  </div>
                </div>
                <div class="content">
                  <h3>blog title goes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, debitis?
                  </p>
                  <a href="#" class="btn">
                    read more
                  </a>
                </div>
              </div>
            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </section>

        <section class="footer">
          <div class="box-container">
            <div class="box">
              <h3>quick links</h3>
              <a class="link" href="#home">
                {" "}
                <i class="fas fa-angle-right"></i> home
              </a>
              <a class="link" href="#shop">
                {" "}
                <i class="fas fa-angle-right"></i> shop
              </a>
              <a class="link" href="#gallery">
                {" "}
                <i class="fas fa-angle-right"></i> gallery
              </a>
              <a class="link" href="#team">
                {" "}
                <i class="fas fa-angle-right"></i> team
              </a>
              <a class="link" href="#arrivals">
                {" "}
                <i class="fas fa-angle-right"></i> arrivals
              </a>
              <a class="link" href="#blogs">
                {" "}
                <i class="fas fa-angle-right"></i> blogs
              </a>
            </div>

            <div class="box">
              <h3>extra links</h3>
              <a href="#" class="link">
                {" "}
                <i class="fas fa-angle-right"></i> my order{" "}
              </a>
              <a href="#" class="link">
                {" "}
                <i class="fas fa-angle-right"></i> my favorite{" "}
              </a>
              <a href="#" class="link">
                {" "}
                <i class="fas fa-angle-right"></i> my wishlist{" "}
              </a>
              <a href="#" class="link">
                {" "}
                <i class="fas fa-angle-right"></i> private policy{" "}
              </a>
              <a href="#" class="link">
                {" "}
                <i class="fas fa-angle-right"></i> terms of use{" "}
              </a>
            </div>

            <div class="box">
              <h3>contact info</h3>
              <p>
                {" "}
                <i class="fas fa-phone"></i> +91-8570994276{" "}
              </p>
              <p>
                {" "}
                <i class="fas fa-envelope"></i> akshatgarg2608@gmail.com{" "}
              </p>
              <p>
                {" "}
                <i class="fas fa-map"></i> Shahabad Markanda, Haryana India -
                136135{" "}
              </p>
              <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
              </div>
            </div>

            <div class="box">
              <h3>newsletter</h3>
              <p>subscribe for latest updates</p>
              <form action="">
                <input
                  type="email"
                  name=""
                  placeholder="enter your email"
                  id=""
                  class="email"
                />
                <input type="submit" value="subscribe" class="btn" />
              </form>
            </div>
          </div>

          <div class="credit">
            {" "}
            created by <span>Akshat</span> | all rights reserved!{" "}
          </div>
        </section>
      </h1>
    </div>
  );
}

export default Home;
