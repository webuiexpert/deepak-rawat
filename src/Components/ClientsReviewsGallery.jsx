import React from "react";
import t1Image from "../assets/clientReviews/t1.jpg"; 
import t2Image from "../assets/clientReviews/t2.jpg"; 
import t3Image from "../assets/clientReviews/t3.jpg"; 
import t4Image from "../assets/clientReviews/t4.jpg"; 
import t5Image from "../assets/clientReviews/t5.jpg"; 
import t6Image from "../assets/clientReviews/t6.jpg"; 
import t7Image from "../assets/clientReviews/t7.jpg"; 
import t8Image from "../assets/clientReviews/t8.jpg"; 
import t9Image from "../assets/clientReviews/t9.jpg"; 
import t10Image from "../assets/clientReviews/t10.jpg"; 
import t11Image from "../assets/clientReviews/t11.jpg"; 
import t12Image from "../assets/clientReviews/t12.jpg"; 
import t13Image from "../assets/clientReviews/t13.jpg"; 
import t14Image from "../assets/clientReviews/t14.jpg"; 
import t15Image from "../assets/clientReviews/t15.jpg"; 
import t16Image from "../assets/clientReviews/t16.jpg"; 
import t17Image from "../assets/clientReviews/t17.jpg"; 
import t18Image from "../assets/clientReviews/t18.jpg"; 
import t19Image from "../assets/clientReviews/t19.jpg"; 
import t20Image from "../assets/clientReviews/t20.jpg"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const reviewdata = [
  {
    "ReviewImage": t1Image
  },
  {
    "ReviewImage": t2Image
  },
  {
    "ReviewImage": t3Image
  },
  {
    "ReviewImage": t4Image
  },
  {
    "ReviewImage": t5Image
  },
  {
    "ReviewImage": t6Image
  },
  {
    "ReviewImage": t7Image
  },
  {
    "ReviewImage": t8Image
  },
  {
    "ReviewImage": t9Image
  },
  {
    "ReviewImage": t10Image
  },
  {
    "ReviewImage": t11Image
  },
  {
    "ReviewImage": t12Image
  },
  {
    "ReviewImage": t13Image
  },
  {
    "ReviewImage": t14Image
  },
  {
    "ReviewImage": t15Image
  },
  {
    "ReviewImage": t16Image
  },
  {
    "ReviewImage": t17Image
  },
  {
    "ReviewImage": t18Image
  },
  {
    "ReviewImage": t19Image
  },

  {
    "ReviewImage": t20Image
  }

];

function ClientsReviewsGallery() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20">
        <Slider {...settings}>
     {
      reviewdata.map((r, index) => (
        <div key={index}>
          <img src={r.ReviewImage} alt="review" />
        </div>
      ))
     }
     </Slider>
    </div>
  );
}

export default ClientsReviewsGallery;
