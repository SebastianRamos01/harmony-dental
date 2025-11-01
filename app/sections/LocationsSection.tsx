import Image from 'next/image'
import React from 'react'
import { branchesHeading, branchesTitle, branchesList } from '../data/data'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#branches-section',
    start: 'top center',
    end: 'center center',
  }
})

export default function LocationsSection() {

  useGSAP(() => {
          tl.set('#branches-word', {
            opacity: 0,
            y: 14,
          })
          tl.to('#branches-word', {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            stagger: 0.070
          })
        }, [])

  return (
    <section id='branches-section' className="py-[clamp(40px,10vh,120px)] px-[clamp(20px,5vw,80px)]">
          <div className="grid grid-cols-8 md:grid-cols-16 lg:grid-cols-18 xl:grid-cols-24 gap-3">
            <div className="col-span-6 md:col-span-10 pb-20">
              <div className="flex gap-1.5 items-center pb-2">
                <div className="size-2 min-h-2 min-w-2 bg-blue rounded-full"></div>
                <h5 className="font-bold">{branchesTitle}</h5>
              </div>
              <div className="text-3xl flex flex-wrap">
                {branchesHeading.split(' ').map((el, i) => (
                    <p key={i} id='branches-word' className="pr-1.5 inline-block opacity-0">
                      {el}
                    </p>
                    ))}
              </div>
            </div>
            <div className="relative col-span-full">
              <div className="flex justify-center">
                <div className="absolute top-0 right-0">
                  <div className="relative w-14 h-14">
                    <Image
                      src={'/province-map.svg'}
                      alt=""
                      width={40}
                      height={40}
                      className='w-auto'
                    ></Image>
                  </div>
                </div>
                <div className="relative w-fit">
                  <Image
                    src={'/map.svg'}
                    alt=""
                    width={550}
                    height={550}
                  ></Image>
                </div>
              </div>
              {/* <div className="w-fit flex flex-col absolute top-5 left-4">
                <div className="bg-blue w-8 h-8 min-h-8 min-w-8 rounded-full text-background flex items-center justify-center">
                  <p>
                    3
                  </p>
                </div>
                <div className="bg-blue w-3 h-3 min-h-3 min-w-3 rounded-full">
                </div>
              </div>
              <div className="w-fit flex flex-col absolute top-28 left-42">
                <div className="bg-blue w-8 h-8 min-h-8 min-w-8 rounded-full text-background flex items-center justify-center">
                  <p>
                    1
                  </p>
                </div>
                <div className="bg-blue w-3 h-3 min-h-3 min-w-3 rounded-full">
                </div>
              </div> */}
            </div>
            <div className="col-span-8 flex flex-col items-end gap-3 pt-20 md:col-start-11 lg:col-start-13 xl:col-start-20">
              <div className="flex items-end gap-1 w-fit">
                <div className="text-4xl font-semibold">
                  {branchesList.length}
                </div>
                <div>
                  <div className='font-bold text-lg leading-tight'>
                    Locations
                  </div>
                  <div className='leading-tight'>
                    in Buenos Aires
                  </div>
                </div>
              </div>
              {/* <button className="flex items-center justify-between gap-8 cursor-pointer pl-5 pr-1 bg-blue text-background h-10 w-full rounded-full">
                    <div className="">
                        Look for a near branch
                    </div>
                    <div className="bg-background rounded-full p-1">
                        <svg className="w-6 h-6 text-blue rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
                        </svg>
                    </div>
                </button> */}
            </div>
          </div>
        </section>
  )
}
