'use client';

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import { headerTitle, aboutHeading, mainName } from "./data/data";
import Image from "next/image";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BodyBanner from "./components/BodyBanner";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqSection from "./sections/FaqSection";
import CommentsSection from "./sections/CommentsSection";
import ServicesSection from "./sections/ServicesSection";
import LocationsSection from "./sections/LocationsSection";
import ReactLenis, { LenisRef } from "lenis/react";

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#about-section',
    start: 'top top',
    end: 'center center',
    scrub: 1
  }
})

export default function Home() {
  
  const lenisRef = useRef<LenisRef | null>(null)
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [])

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  useGSAP(() => {
    tl.set('#about-word', {
      opacity: 0,
      y: 14,
    })
    tl.to('#about-word', {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      duration: 1.5,
      stagger: 0.075
    })
  }, [])

  return (
      <>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
        <Loader></Loader>
        <Header isOpen={isNavOpen} toggleOpen={toggleNav}></Header>
        <NavMenu isOpen={isNavOpen} setIsOpen={setIsNavOpen}></NavMenu>
        <main id="main-body" className="h-dvh w-full p-3 relative">
          <div id="main-hero" className="relative h-full w-full rounded-xl overflow-hidden">
            <div className="z-10 bg-linear-to-t from-[#1a1a1a]/40 to-[#fafafa]/0 h-1/2 w-full absolute bottom-0"></div>
            <Image
              src={'/images/odontology-recepcion.png'}
              alt="hero-image"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div className="h-full w-full flex justify-center items-end absolute left-0 top-0 z-20">
            <div className="text-background px-10 py-[clamp(40px,8vh,100px)] w-full md:w-1/2 max-w-[500px]">
              <h1 className="flex flex-wrap justify-center">
                {
                  headerTitle.split(' ').map((el, i) => (
                    <p key={i} className="text-4xl text-center pr-1.5">
                      {el}
                    </p>
                  ))
                }
              </h1>
            </div>
          </div>
        </main>
        <section id="about-section" className="px-[clamp(20px,5vw,80px)] h-[150dvh]">
            <div className="flex items-center justify-center w-full sticky top-0 h-dvh">
              <div className="flex flex-col justify-center items-center gap-2 md:max-w-1/2">
                <div className="flex gap-1.5 items-center">
                  <div className="size-2 min-h-2 min-w-2 bg-blue rounded-full"></div>
                  <h5 className="font-bold">{mainName}</h5>
                </div>
                <div className="flex flex-wrap justify-center">
                  {aboutHeading.split(' ').map((el, i) => (
                    <p id="about-word" key={i} className="text-3xl pr-1.5 opacity-0">
                      {el}
                    </p>
                  ))}
                </div>
              </div>
            </div>
        </section>
        <ServicesSection></ServicesSection>
        <BodyBanner></BodyBanner>
        <LocationsSection></LocationsSection>
        <CommentsSection></CommentsSection>
        <FaqSection></FaqSection>
        <Footer></Footer>
      </>
  );
}
