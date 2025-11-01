'use client'

import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react"
import Button from "./Button"
import { navsLinks } from "../data/data"


export default function Header({ isOpen, toggleOpen } : {isOpen: boolean, toggleOpen: () => void}) {

    // header hide/show on scroll control
    const ignoreHideRef = useRef(false)
    const prevIsOpenRef = useRef(isOpen)

    // burguer lines refs
    const topLineRef = useRef<HTMLDivElement | null>(null)
    const midLineRef = useRef<HTMLDivElement | null>(null)
    const btmLineRef = useRef<HTMLDivElement | null>(null)

    //links refs for hover aniamtions
    const linkRefs = useRef<Array<HTMLDivElement | null>>([])

    // animacion de esconder/mostrar header en scroll
    useEffect(() => {
        let lastY = typeof window !== 'undefined' ? window.scrollY : 0

        const onScroll = () => {
            const currentY = window.scrollY
            // pequeño threshold para evitar parpadeos
            if (Math.abs(currentY - lastY) < 6) return

            const el = document.getElementById('header')
            if (!el) { lastY = currentY; return }

            // si el nav está abierto o estamos ignorando hides (justo después de cerrar), no ocultar
            if (isOpen || (ignoreHideRef.current && currentY > 80)) {
                lastY = currentY
                // aseguramos que el header esté visible (quitar clase invisible antes de animar)
                if (el.classList.contains('invisible')) el.classList.remove('invisible')
                gsap.killTweensOf(el)
                gsap.to(el, { opacity: 1, duration: 0.18 })
                return
            }

            if (currentY > lastY && currentY > 80) {
                // scrolldown -> esconder: animamos opacidad y al completar añadimos clase invisible
                gsap.killTweensOf(el)
                gsap.to(el, {
                    opacity: 0,
                    duration: 0.28,
                    ease: 'power2.out',
                    onComplete: () => {
                        // marcar como invisible para evitar interacción/flujo
                        el.classList.add('invisible')
                    }
                })
            } else {
                // scrollup -> mostrar: quitar invisible y animar a opacidad 1
                if (el.classList.contains('invisible')) el.classList.remove('invisible')
                gsap.killTweensOf(el)
                gsap.to(el, { opacity: 1, duration: 0.28, ease: 'power2.out' })
            }
            lastY = currentY
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [ isOpen ])

    // controla la ventana de tiempo tras cerrar el nav para evitar que el header se esconda inmediatamente
    useEffect(() => {
        let t: number | undefined

        if (isOpen) {
            // mientras el nav está abierto, no permitir hides
            ignoreHideRef.current = true
            const el = document.getElementById('header')
            if (el) gsap.to(el, { opacity: 1, duration: 0.12 })
        } else {
            // si venimos de estar abierto -> bloquear hides por un corto periodo
            if (prevIsOpenRef.current) {
                ignoreHideRef.current = true
                t = window.setTimeout(() => {
                    ignoreHideRef.current = false
                }, 350) // ajusta el tiempo si hace falta
            } else {
                ignoreHideRef.current = false
            }
        }

        prevIsOpenRef.current = isOpen
        return () => { if (t) clearTimeout(t) }
    }, [isOpen])

    // animacion del icono hamburguesa
    useEffect(() => {
        const top = topLineRef.current
        const mid = midLineRef.current
        const btm = btmLineRef.current
        if (!top || !mid || !btm) return

        // asegurar transform-origin para rotaciones
        gsap.set([top, mid, btm], { transformOrigin: '50% 50%' })

        if (isOpen) {
            gsap.to(top, { y: 6, rotation: 45, duration: 0.28, ease: 'power2.out' })
            gsap.to(mid, { opacity: 0, duration: 0.16, ease: 'power2.out' })
            gsap.to(btm, { y: -6, rotation: -45, duration: 0.28, ease: 'power2.out' })
        } else {
            gsap.to(top, { y: 0, rotation: 0, duration: 0.28, ease: 'power2.out' })
            gsap.to(mid, { opacity: 1, duration: 0.18, ease: 'power2.out' })
            gsap.to(btm, { y: 0, rotation: 0, duration: 0.28, ease: 'power2.out' })
        }

        return () => {
            gsap.killTweensOf([top, mid, btm])
        }
    }, [isOpen])

    // aminacion de las lineas de los links al hacer hover
    // inicializar underlines y limpiar animaciones al desmontar
    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        linkRefs.current.forEach(el => {
            if (!el) return;
            gsap.set(el, { width: '0%' });
        });
    });

    return () => ctx.revert();
}, []);

    // handlers para hover: crecen/reducen el ancho del div de underline
    const handleLinkEnter = (i: number) => {
        const el = linkRefs.current[i]
        if (!el) return
        gsap.killTweensOf(el)
        gsap.to(el, { width: '100%', duration: 0.32, ease: 'power3.out' })
    }
    const handleLinkLeave = (i: number) => {
        const el = linkRefs.current[i]
        if (!el) return
        gsap.killTweensOf(el)
        gsap.to(el, { width: '0%', duration: 0.28, ease: 'power3.inOut' })
    }

  return (
    <header id="header" className="w-full fixed top-6 z-40 flex justify-center">
        <div className="bg-[#fff] w-full lg:w-fit flex gap-20 items-center justify-between lg:justify-baseline h-16 px-5 mx-6 rounded-xl">
            <div className="relative font-bold flex flex-col">
                <div className="text-lg leading-3.5">Harmony</div>
                <div className="text-right px-3">Dental</div>
            </div>
            <ul className="lg:flex gap-2 hidden font-semibold">
                {
                    navsLinks.map((el, i) => (
                        <li key={i} onMouseEnter={() => handleLinkEnter(i)} onMouseLeave={() => handleLinkLeave(i)} className="relative px-2 py-1 cursor-pointer">
                            <a href={el.href}>
                                <p>
                                    {el.name}
                                </p>
                                <div ref={node => { linkRefs.current[i] = node }}
                                    className="bg-blue w-full h-0.5"></div>
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="flex gap-1">
                <button className="bg-blue text-background cursor-pointer rounded-full p-1 size-9 flex items-center justify-center">
                        <svg className="w-5 h-5 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
                </button>
                <button onClick={toggleOpen} className="lg:hidden bg-blue size-9 rounded-full">
                    <div id='hamb-menu' className="flex flex-col gap-1 p-2">
                        <div id="top-line" ref={topLineRef} className="h-0.5 w-full bg-background rounded"></div>
                        <div id="mid-line" ref={midLineRef} className="h-0.5 w-full bg-background rounded"></div>
                        <div id="btm-line" ref={btmLineRef} className="h-0.5 w-full bg-background rounded"></div>
                    </div>
                </button>
                <Button></Button>
            </div>
        </div>
    </header>
  )
}
