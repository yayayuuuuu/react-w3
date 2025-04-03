import React from "react";
import { Carousel, Button } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/image/8.jpg" alt="飾品示意圖" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/image/Ocean Treads (2).png" alt="threads" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/image/Ocean Treads (3).png" alt="..." />
      </Carousel.Item>
    </Carousel>
  );
};

const HomeSection = () => {
  return (
    <div className="text-center p-4">
      <img
        id="home_product1"
        src="image/home_product1.webp"
        alt="home product"
        className="w-250"
      />
      <br />
      <p>
        在美麗的飾品中傳遞對海洋的守護之心
        <br />
        不只是一條手鍊，更是一場關於海洋與自己的對話
      </p>
      <div className="d-flex justify-content-center gap-1">
        <a href="商品簡介/product.html">
          <img
            id="home_product2"
            src="/image/home_product2.webp"
            className="zoom-image w-50"
            alt="product 2"
          />
        </a>
        <a href="商品簡介/product.html">
          <img
            id="home_product3"
            src="/image/home_product3.webp"
            className="zoom-image w-50"
            alt="product 3"
          />
        </a>
        <a href="商品簡介/product.html">
          <img
            id="home_product4"
            src="/image/home_product4.webp"
            className="zoom-image w-50"
            alt="product 4"
          />
        </a>
      </div>
      <br />
      <br />
      <a href="about us/aboutus.html">
        <Button variant="outline-primary" className="mt-3">
          查看更多
        </Button>
      </a>
      <br />
      <br />
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <CarouselComponent />
      <HomeSection />
    </div>
  );
};

export default Body;
