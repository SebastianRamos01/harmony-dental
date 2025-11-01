'use client'

import React, { useEffect, useRef, useState } from 'react'
import { faqTitle, faqHeading, faqList } from '../data/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#faq-section',
    start: 'top center',
    end: '+=500',
  }
})

export default function FaqSection() {

    const [activeFaq, setActiveFaq] = useState<number | null>(0)
    const faqRefs = useRef<HTMLLIElement[]>([])
    const answerRefs =useRef<HTMLParagraphElement[]>([])

    useEffect(() => {
        // limpiar tweens previos
        gsap.killTweensOf(answerRefs.current)

        answerRefs.current.forEach((el, i) => {
        if (!el) return
        if (i === activeFaq) {
            // abrir: height -> auto, paddingTop -> 0.75rem (pt-3), opacity -> 1
            gsap.to(el, {
            height: 'auto',
            paddingTop: '0.75rem',
            opacity: 1,
            duration: 0.36,
            ease: 'power2.out',
            onStart: () => { el.style.display = 'block' }
            })
        } else {
            // cerrar: height -> 0, paddingTop -> 0, opacity -> 0
            gsap.to(el, {
            height: 0,
            paddingTop: 0,
            opacity: 0,
            duration: 0.28,
            ease: 'power2.out',
            onComplete: () => { if (el) el.style.display = 'none' }
            })
        }
        })
    }, [activeFaq])

    useGSAP(() => {
        tl.set('#faq-word', {
          opacity: 0,
          y: 14,
        })
        tl.to('#faq-word', {
          opacity: 1,
          y: 0,
          stagger: 0.075
        })
      }, [])

  return (
    <section id='faq-section' className="py-[clamp(40px,10vh,120px)] px-[clamp(20px,5vw,80px)]">
          <div className="grid grid-cols-8 md:grid-cols-16 lg:grid-cols-24 gap-3">
            <div className="col-span-6 md:col-span-10 pb-5">
              <div className="flex gap-1.5 items-center pb-2">
                <div className="size-2 min-h-2 min-w-2 bg-blue rounded-full"></div>
                <h5 className="font-bold">{faqTitle}</h5>
              </div>
                <div className="text-3xl flex flex-wrap">
                    {faqHeading.split(' ').map((word, i) => (
                        <div key={i} id='faq-word' className='inline-block mr-1.5 opacity-0'>{word}</div>
                    ))}
                </div>
            </div>
            <ul className="col-span-full lg:col-span-14 flex flex-col gap-3 relative h-dvh md:h-[50dvh] min-h-[460px]">
              {faqList.map((el, i) => (
                <li key={i} 
                  ref={el => { faqRefs.current[i] = el! }}
                  onClick={() => setActiveFaq(i)}
                  className="p-5 bg-[#fff] rounded-xl cursor-pointer">
                  <article>
                    <div className="flex justify-between items-center">
                      <h6 className="font-bold text-lg">
                        {el.question}
                      </h6>
                      <div className="h-4 w-4 min-w-4 min-h-4 relative ml-3">
                        <div className="bg-blue h-0.5 w-full absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 rotate-90"></div>
                        <div className="bg-blue h-0.5 w-full absolute -translate-y-1/2 top-1/2 left-0"></div>
                      </div>
                    </div>
                    <p
                      ref={el => { answerRefs.current[i] = el! }}
                      style={{ overflow: 'hidden', height: 0, paddingTop: 0, opacity: 0, display: 'none', paddingRight:'2rem' }} 
                    >
                      {el.answer}
                    </p>
                  </article>
                  </li>
              ))}
            </ul>
          </div>
        </section>
  )
}
