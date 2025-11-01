'use client'

import Image from 'next/image'
import { servicesTitle, servicesHeading, servicesList } from '../data/data'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#services-section',
    start: 'top top',
    end: 'center center',
  }
})

export default function ServicesSection() {

    useGSAP(() => {
        tl.set('#services-word', {
          opacity: 0,
          y: 14,
        })
        tl.to('#services-word', {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          stagger: 0.070
        })
      }, [])

    // // nuevo: estado y refs para controlar el carrusel por índice
    // const [currentIndex, setCurrentIndex] = useState(0)
    // const carouselRef = useRef<HTMLUListElement | null>(null)
    // const itemRefs = useRef<Array<HTMLDivElement | null>>([])

    // // desplazarse al índice (usado por botones)
    // const scrollToIndex = (i: number) => {
    //   const clamped = Math.max(0, Math.min(i, servicesList.length - 1))
    //   const el = itemRefs.current[clamped]
    //   if (el) {
    //     el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    //     setCurrentIndex(clamped)
    //   }
    // }

    // // actualizar índice en scroll manual (snap)
    // useEffect(() => {
    //   const cont = carouselRef.current
    //   if (!cont) return

    //   let raf = 0
    //   const onScroll = () => {
    //     if (raf) cancelAnimationFrame(raf)
    //     raf = requestAnimationFrame(() => {
    //       const scrollCenter = cont.scrollLeft + cont.clientWidth / 2
    //       let nearest = 0
    //       let minDist = Infinity
    //       itemRefs.current.forEach((it, i) => {
    //         if (!it) return
    //         const rect = it.getBoundingClientRect()
    //         const parentRect = cont.getBoundingClientRect()
    //         // center position relative to container scrollLeft
    //         const itemCenter = (it.offsetLeft) + (rect.width / 2)
    //         const dist = Math.abs(itemCenter - scrollCenter)
    //         if (dist < minDist) {
    //           minDist = dist
    //           nearest = i
    //         }
    //       })
    //       setCurrentIndex(nearest)
    //     })
    //   }

    //   cont.addEventListener('scroll', onScroll, { passive: true })
    //   // inicializar
    //   onScroll()

    //   return () => {
    //     cont.removeEventListener('scroll', onScroll)
    //     if (raf) cancelAnimationFrame(raf)
    //   }
    // }, [])

  return (
    <section id='services-section' className="py-[clamp(40px,8vh,100px)] px-[clamp(20px,5vw,80px)]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex gap-1.5 items-center justify-center pb-2 ">
                <div className="size-2 min-h-2 min-w-2 bg-blue rounded-full"></div>
                <h5 className="font-bold">{servicesTitle}</h5>
              </div>
              <div className="text-3xl flex flex-wrap justify-center md:w-1/2">
                {servicesHeading.split(' ').map((el, i) => (
                    <p key={i} id='services-word' className="pr-1.5 inline-block opacity-0">
                      {el}
                    </p>
                    ))}
              </div>
            </div>
            <div className='relative flex flex-col items-center'>
              {servicesList.map((el, i) => (
                <div key={i} className='flex items-center h-[100lvh] lg:max-w-96 w-full sticky top-0'>
                  <div className='w-full h-[80%] rounded-xl overflow-hidden'
                    style={{ marginTop: i * 20}}>
                    <div className='relative w-full h-full'>
                      <Image
                        src={`/images/${el.img}`}
                        alt={el.title}
                        fill
                        className='object-cover' 
                      ></Image>
                      <div className='absolute top-5 left-5 rounded-full'>
                        <div className="flex gap-1.5 items-center justify-center pb-2 ">
                          <div className="size-2 min-h-2 min-w-2 bg-blue rounded-full"></div>
                          <h5 className="font-bold">Services</h5>
                        </div>
                      </div>
                      <div className="z-10 bg-linear-to-t from-[#1a1a1a]/40 to-[#fafafa]/0 h-1/2 w-full absolute bottom-0"></div>
                      <li className="p-4 rounded-xl absolute bottom-0 z-10 w-full">
                            <article className="flex flex-col gap-2 text-background">
                                <h6 className="text-2xl">
                                    {el.title}
                                </h6>
                                <p className="">
                                    {el.description}
                                </p>
                            </article>
                        </li>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className='flex w-full justify-end pt-[clamp(40px,8vh,100px)]'>
              <div className='flex gap-1'>
                <button id='left-btn'
                    onClick={onPrev}
                    disabled={currentIndex <= 0}
                    className='bg-blue rounded-full min-w-9 min-h-9 flex items-center justify-center'>
                  <svg className="w-5 h-5 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m15 19-7-7 7-7"/>
                  </svg>
                </button>
                <button id='right-btn'
                  onClick={onNext}
                  disabled={currentIndex >= servicesList.length - 1}
                    className='bg-blue rounded-full min-w-9 min-h-9 flex items-center justify-center'>
                  <svg className="w-5 h-5 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
            <ul id='carrousel-services' ref={carouselRef} className='flex gap-3 overflow-x-auto snap-mandatory snap-x'>
                {servicesList.map((el, i) => (
                    <div key={i}
                        ref={node => { itemRefs.current[i] = node }} 
                        className='h-[40dvh] lg:h-[50dvh] min-w-[80vw] overflow-hidden rounded-md relative snap-start'>
                        <div className="z-10 bg-linear-to-t from-[#1a1a1a]/40 to-[#fafafa]/0 h-1/2 w-full absolute bottom-0"></div>
                        <li className="p-4 rounded-xl absolute bottom-0 z-10 w-full">
                            <article className="flex flex-col gap-2 text-background">
                                <h6 className="text-2xl">
                                    {el.title}
                                </h6>
                                <p className="">
                                    {el.description}
                                </p>
                            </article>
                        </li>
                            <div className="relative h-full w-full">
                                <Image
                                src={`/images/${el.img}`}
                                alt={el.title}
                                fill
                                objectFit="cover"
                                ></Image>
                            </div>
                        </div> 
                    ))}
            </ul> */}
          </div>
        </section>
  )
}
