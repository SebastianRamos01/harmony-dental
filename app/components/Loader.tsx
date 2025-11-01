'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useEffect, Children } from 'react'

const tl = gsap.timeline()

export default function Loader() {

    const frontLogoRef = useRef<HTMLDivElement>(null)
    const loaderContRef = useRef<HTMLDivElement>(null);

    const overlayRef = useRef<SVGSVGElement | null>(null)

    useGSAP(() => {
        const svg = overlayRef.current
        const hole = svg?.querySelector('#holeRect') as SVGRectElement | null

        if (frontLogoRef.current) {
            gsap.set(frontLogoRef.current, { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' })
        }
        if (hole) {
            gsap.set(hole, { attr: { width: 0, height: 0, x: 50, y: 50, rx: 2, ry: 2 } })
        }

        tl
          .fromTo(
            frontLogoRef.current,
            { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
            { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 2, ease: 'power2.out' }
          )
          .to('#logos-container', { opacity: 0, duration: 0.5 }, '>')
        if (hole) {
            tl.to(hole, {
                attr: { width: 100, height: 100 },
                duration: 2,
                ease: 'power2.inOut',
                onUpdate: () => {
                    const w = parseFloat(hole.getAttribute('width') || '0')
                    const h = parseFloat(hole.getAttribute('height') || '0')
                    hole.setAttribute('x', String(50 - w / 2))
                    hole.setAttribute('y', String(50 - h / 2))
                }
            }, '>')
        }
        tl.to(loaderContRef.current, {visibility: 'hidden'}, '>')
        return () => tl.kill()
    }, [])

  return (
    <>
        <div ref={loaderContRef} className='h-dvh w-full fixed top-0 z-50'>
            <svg
                    ref={overlayRef}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <mask id="holeMask">
                        {/* fuera: blanco (opaco) */}
                        <rect x="0" y="0" width="100" height="100" fill="white" />
                        {/* hueco central: negro (transparente) — este rect se anima */}
                        <rect id="holeRect" x="50" y="50" width="0" height="0" rx="0" ry="0" fill="black" />
                      </mask>
                    </defs>
                    {/* rect blanco que usa la máscara => se ve blanco fuera del hueco */}
                <rect width="100%" height="100%" fill="#0972CE" mask="url(#holeMask)" />
            </svg>
            <div id='logos-container' className='flex items-center justify-center h-full w-full relative text-background'>
                <div id='back-logo' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'>
                    <div className="relative font-bold flex flex-col w-fit">
                        <div className="text-xl leading-3.5">Harmony</div>
                        <div className="text-right px-3">Dental</div>
                    </div>
                </div>
                <div ref={frontLogoRef} id='front-logo' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom opacity-0'>
                    <div className="relative font-semibold flex flex-col w-fit">
                        <div className="text-xl leading-3.5">Harmony</div>
                        <div className="text-right px-3">Dental</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
