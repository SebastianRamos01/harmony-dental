import React, { useEffect, useRef, useState } from 'react'
import { commentsHeading,commentsList, commentsTitle } from '../data/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#comments-section',
    start: 'top center',
    end: '+=500',
  }
})

export default function CommentsSection() {

    useGSAP(() => {
        tl.set('#comment-word', {
          opacity: 0,
          y: 14,
        })
        tl.to('#comment-word', {
            opacity: 1,
            y: 0,
          stagger: 0.075
        })
    }, [])

    // nuevo: estado y refs para controlar el carrusel por índice
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef<HTMLUListElement | null>(null)
    const itemRefs = useRef<Array<HTMLDivElement | null>>([])

    // desplazarse al índice (usado por botones)
    const scrollToIndex = (i: number) => {
      const clamped = Math.max(0, Math.min(i, commentsList.length - 1))
      const el = itemRefs.current[clamped]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
        setCurrentIndex(clamped)
      }
    }

    const onPrev = () => scrollToIndex(currentIndex - 1)
    const onNext = () => scrollToIndex(currentIndex + 1)

    // actualizar índice en scroll manual (snap)
    useEffect(() => {
      const cont = carouselRef.current
      if (!cont) return

      let raf = 0
      const onScroll = () => {
        if (raf) cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const scrollCenter = cont.scrollLeft + cont.clientWidth / 2
          let nearest = 0
          let minDist = Infinity
          itemRefs.current.forEach((it, i) => {
            if (!it) return
            const rect = it.getBoundingClientRect()
            // const parentRect = cont.getBoundingClientRect()
            // center position relative to container scrollLeft
            const itemCenter = (it.offsetLeft) + (rect.width / 2)
            const dist = Math.abs(itemCenter - scrollCenter)
            if (dist < minDist) {
              minDist = dist
              nearest = i
            }
          })
          setCurrentIndex(nearest)
        })
      }

      cont.addEventListener('scroll', onScroll, { passive: true })
      // inicializar
      onScroll()

      return () => {
        cont.removeEventListener('scroll', onScroll)
        if (raf) cancelAnimationFrame(raf)
      }
    }, [])

  return (
    <section id='comments-section' className="py-[clamp(40px,10vh,120px)] px-[clamp(20px,5vw,80px)]">
          <div className="grid grid-cols-8 md:grid-cols-16 lg:grid-cols-18 xl:grid-cols-24 gap-3">
            <div className="col-span-6 md:col-span-10 ">
              <div className="flex gap-1.5 items-center pb-2">
                <div className="size-2 min-h-2 min-w-2 bg-blue rounded-full"></div>
                <h5 className="font-bold">{commentsTitle}</h5>
              </div>
              <div className="text-3xl flex flex-wrap">
                    {commentsHeading.split(' ').map((word, i) => (
                        <div key={i} id='comment-word' className='inline-block mr-1.5 opacity-0'>{word}</div>
                    ))}
                </div>
            </div>
            <div className='flex w-full justify-end col-span-full'>
              <div className='flex gap-1'>
                <button id='left-btn'
                    onClick={onPrev}
                    disabled={currentIndex <= 0}
                    className='cursor-pointer bg-blue rounded-full min-w-9 min-h-9 flex items-center justify-center'>
                  <svg className="w-5 h-5 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m15 19-7-7 7-7"/>
                  </svg>
                </button>
                <button id='right-btn'
                  onClick={onNext}
                  disabled={currentIndex >= commentsList.length - 1}
                    className='cursor-pointer bg-blue rounded-full min-w-9 min-h-9 flex items-center justify-center'>
                  <svg className="w-5 h-5 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-span-full pt-5">
              <ul ref={carouselRef} className="comments-carrousel flex gap-3 overflow-x-auto snap-x snap-mandatory">
                {commentsList.map((el, i) => (
                  <div key={i}
                      ref={node => { itemRefs.current[i] = node }}
                    className="bg-[#fff] rounded-xl p-5 min-w-[80lvw] md:min-w-[65lvw] lg:min-w-[50lvw] snap-start"
                  >
                    <article className="flex flex-col justify-between gap-10 h-full">
                      <div className="flex gap-5">
                        <div className="w-0.5 min-w-0.5 bg-blue"></div>
                        <p className="text-3xl">
                          {el.comment}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="size-10 rounded-full bg-gray-200 overflow-hidden">
                          <div className='relative w-full h-full'>
                            <Image
                              src={`/images/${el.userImg}`}
                              alt={el.name}
                              width={40}
                              height={50}
                              className='absolute top-1/2 -translate-y-1/2 w-auto'
                            ></Image>
                          </div>
                        </div>
                        <div className="">
                          <div className='font-bold'>{el.name}</div>
                          <div>{el.date}</div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </section>
  )
}
