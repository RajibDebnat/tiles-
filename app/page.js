"use client"; // (if you're using Next.js 13+ App Router)
import React from "react";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Home() {
  const boxRef = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const loaderRef = useRef(null);
  const greenRef = useRef(null);
  const childRef = useRef(null);
  const revealRef = useRef(null);
  const parentRef = useRef(null);

  const heading = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    const box = boxRef.current;
    const head = heading.current;
    const box2 = box2Ref.current;
    const box3 = box3Ref.current;
    const child = childRef.current;
    const reveal = revealRef.current;
    const parent = parentRef.current;
    tl.from(".child span", {
      x: "50%",
      ease: "power3.easeInOut",
      duration: 2,
      stagger: 0.2,
      opacity: 0,
    }).to(child, {
      y: "-100%",
      delay:1,
      ease: "circ.easeInOut",
      duration: 1,
    }).to(".loader",{
      height: "0vh",
      duration: 1,
      ease: "power3.easeInOut",
    }).to(".green", {
height: "100vh",
top:"0",
duration:1,
delay:-0.5,
ease:'circ.inOut',
    }
    ).to(".green",{
      height:"0vh",
      duration: 1,
      delay: -0.2,
      ease:'circ.inOut',

    })
    // tl.to(box, {
    //   height: "0",
    //   ease: "expo.inOut",
    //   duration: 2,
    // })
    //   .to(box2, {
    //     height: "100%",
    //     ease: "expo.inOut",
    //     duration: 2,
    //     delay: -2,
    //   })
    //   .to(box3, {
    //     height: "100%",
    //     ease: "expo.inOut",
    //     duration: 2,
    //     delay: -1.6,
    //   });
  }, []);

  return (
    <main id="main" className=" w-[100%] h-[100vh] relative">
      <h1 className=" ">
        <span className=" block  ">
          <span className=" block transform  translate-y-[100%]">
            Hey I Am Rajib
          </span>
        </span>
      </h1>
      <div ref={loaderRef} className="loader w-[100%] h-[100vh] bg-black">
        <div className=" topheading absolute top-[5%] left-[50%] transform -translate-x-[50%]">
          <h5 className=" reveal font-cascadia">Design Porfolios</h5>
          <h5 className=" reveal font-cascadia">&copy; 2025</h5>
        </div>
        <h1
          ref={revealRef}
          className=" reveal  absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-[4vh]  flex justify-center  text-white font-medium "
        >
          {" "}
          <span
            ref={parentRef}
            className="parent overflow-hidden flex justify-center  "
          >
            {" "}
            <span ref={childRef} className="child block transform  ">
              {" "}
              <span>Rajib</span> <span className=" font-cascadia">Debnath</span>{" "}
              <span>Is Here</span>{" "}
            </span>{" "}
          </span>{" "}
        </h1>
      </div>
      <div className="green absolute top-[100%] w-[100%] h-[0vh] bg-green-300 "></div>
      {/* <div ref={boxRef} className=" w-screen  h-[100%]   bg-black  "></div>
      <div
        ref={box2Ref}
        className=" w-screen  absolute bottom-0 bg-teal-500 h-0 "
      >
        <div
          ref={box3Ref}
          className=" w-screen  absolute bottom-0  bg-pink-500 h-0 "
        ></div>
      </div> */}
    </main>
  );
}

export default Home;
