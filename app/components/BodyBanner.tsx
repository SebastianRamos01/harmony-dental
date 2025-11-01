'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#banner-section',
    scrub: true
  }
})

export default function BodyBanner() {
  //   const overlayRef = useRef<SVGSVGElement | null>(null)

  //   useEffect(() => {
  //   const svg = overlayRef.current
  //   const hole = svg?.querySelector('#bannerHoleRect') as SVGRectElement | null
  //   if (!hole) return

  //   // inicializamos el rect (en coordenadas del viewBox 0..100)
  //   gsap.set(hole, { attr: { width: 60, height: 50, x: 50, y: 50, rx:3, ry: 3 } })

  //   const tween = gsap.to(hole, {
  //     attr: { width: 100, height: 100, rx: 0, ry: 0 }, // tamaño final en unidades del viewBox
  //     ease: 'none',
  //     onUpdate: () => {
  //       const w = parseFloat(hole.getAttribute('width') || '0')
  //       const h = parseFloat(hole.getAttribute('height') || '0')
  //       // mantener el rect centrado
  //       hole.setAttribute('x', String(50 - w / 2))
  //       hole.setAttribute('y', String(50 - h / 2))
  //     },
  //     scrollTrigger: {
  //       trigger: '#banner-sect',
  //       start: 'top top',
  //       end: 'center top',
  //       scrub: 0.6,
  //       invalidateOnRefresh: true
  //     }
  //   })

  //   return () => {
  //     // limpiar tween y ScrollTrigger relacionados
  //     gsap.killTweensOf(hole)
  //     if (tween.scrollTrigger) tween.scrollTrigger.kill()
  //   }
  // }, [])

  useGSAP(() => {
    tl.to('#banner-cont', {
        y: '-35%',
    })
  })

  return (
    <section id='banner-section' className="h-lvh w-full relative overflow-hidden bg-amber-100">
          <div id='banner-cont' className="h-[140vh] w-full absolute top-1/2 -translate-y-1/2">
            {/* <div className='relative w-full h-full'>
                <svg
                    ref={overlayRef}
                    className="absolute inset-0 w-full h-full pointer-events-none z-20"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    >
                    <defs>
                        <mask id="bannerHoleMask">
                            {/* fuera: blanco (opaco) */}
                            {/* <rect x="0" y="0" width="100" height="100" fill="#fafafa" /> */}
                            {/* hueco central: negro (transparente) — este rect se anima */}
                            {/* <rect id="bannerHoleRect" x="50" y="50" width="0" height="0" rx="0" ry="0" fill="black" />
                        </mask>
                    </defs> */}
                    {/* rect blanco que usa la máscara => se ve blanco fuera del hueco */}
                    {/* <rect width="100%" height="100%" fill="#fafafa" mask="url(#bannerHoleMask)" />
                </svg> */}
            {/* </div>  */}
                <div className="relative w-full h-full">
                    <Image
                        src={'/images/profesional-odontologist-only.png'}
                        alt="Secondary-image"
                        fill
                        className='object-cover'
                    ></Image>
                </div>
          </div>
        </section>
  )
}
