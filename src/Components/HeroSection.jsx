import React, { useRef } from 'react'
import HeroImg from "../assets/hero-img.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Calendly from './Calendly'


function HeroSection() {

  const MainRef = useRef ()

  

useGSAP ( () => {
gsap.from(".personalImg", {
  scale:0.7,
  opacity:0,
  duration: 1.5,
  x:300,
  delay: 0.1,

})
gsap.from(MainRef.current, {
  opacity:0,
  duration: 1.5,
 x:-300,
  delay: 0.5
},  { scope:MainRef })
})

  return (
    <div className="herosection w-full lg:h-[calc(92vh-96px)] h-auto py-10 bg-[#4b006d] overflow-hidden ">
    <div ref={MainRef} className="container h-full flex lg:flex-row md:flex-row items-center  flex-col-reverse lg:gap-0 gap-5 lg:px-0  md:px-8 sm:px-6 px-4">
    <div className="textSection text-white lg:text-[52px] text-[28px] font-extrabold lg:leading-[56px] lg:w-[70%] md:w-[60%] w-full flex flex-col items-start justify-center">
      <h2 className="">Hello,</h2>
      <h2 className="">I am Deepak, </h2>
      <h2 className="lg:w-[80%]">a Frontend Developer from India.</h2>

      <h5 className="lg:my-4 lg:w-[738px] lg:text-[24px] text-[18px] font-extrabold lg:leading-[1.2em]">
      I research, code, blog, and make Designs live.
      </h5>
      <div class="contact-links mb-4 lg:flex gap-5 lg:mt-0 mt-4">
            <a
              href="tel:+91-9041421329"
              class="flex gap-2 text-[32px] items-center"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>{" "}
              <p class="text-[24px] font-mono hover:underline duration-500">
                +91-9988168733
              </p>
            </a>
            <a
              href="mailto:webuiexpert929@gmail.com"
              class="flex gap-2 text-[38px] items-center"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
              </svg>{" "}
              <p class="text-[24px] font-mono hover:underline duration-500">
              webuiexpert929@gmail.com
              </p>
            </a>
          </div>
      <div className="btnBox lg:mt-0  lg:w-[65%]  mt-5 gap-10 lg:flex justify-between items-end">
        <div className="letGoBtn lg:w-[40%] relative">
          <a href="https://api.whatsapp.com/send/?phone=9988168733&text&type=phone_number&app_absent=0">
          <button className="rounded-full booikngBtn text-[18px] w-full leading-8  px-2 py-2 border bg-[#13a300]">
            Lets Connect
          </button></a>
          <svg
            className="absolute top-[6px] right-0 lg:-translate-y-1 -translate-y-2  translate-x-1"
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
              fill="#BFC8D0"
            />
            <path
              d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
              fill="url(#paint0_linear_87_7264)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
              fill="white"
            />
            <path
              d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_87_7264"
                x1="26.5"
                y1="7"
                x2="4"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5BD066" />
                <stop offset="1" stop-color="#27B43E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
         <div className="lg:w-[50%] lg:mt-0 mt-5 text-[20px] text-center leading-8 border lg:px-2 px-4 lg:py-[10px] py-4 rounded-full">
         <Calendly />
         </div>
      
      </div>
    </ div>
    <div className="personalImg  lg:w-[30%] md:w-[40%] w-full">
     <img className='hover:scale-[1.1] duration-700' src={HeroImg} alt="" />
    </ div>
    </div>

  </div>
  )
}

export default HeroSection