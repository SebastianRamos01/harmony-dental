'use client'

import gsap from "gsap"
import { useEffect,useRef } from "react"
import { navsLinks } from "../data/data"

export default function NavMenu({ isOpen, setIsOpen } : {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const navContRef = useRef(null)

    const tlRef = useRef<gsap.core.Timeline | null>(null)
    const scrollYRef = useRef<number>(0)

    // crea la timeline una vez
    useEffect(() => {
        if (tlRef.current) return

        const target = navContRef.current
        if (!target) return

        // estado inicial: oculto
        gsap.set(target, { autoAlpha: 0, visibility: 'hidden' })
        gsap.set('#bg-menu', { opacity: 0 })
        gsap.set('#ul-cont', { y: '-10%', opacity: 0 })
        gsap.set('#btn-cont', { y: '-20%', opacity: 0 })

        // timeline pausada que controla visibilidad y animaciones internas
        tlRef.current = gsap.timeline({ paused: true })
            .to(target, { autoAlpha: 1, visibility: 'visible', duration: 0 }) // muestra instantáneo (visibility + opacity)
            .to('#bg-menu', { opacity: 1, duration: 0.4 }, ">")
            .to('#ul-cont', { y: '0%', opacity: 1, duration: 0.45 }, '<') // animación del listado
            .to('#btn-cont', { y: '0%', opacity: 1, duration: 0.45 }, '<0.1') // animación del botón
            // cuando la timeline se reverse completamente, ocultamos el contenedor (visibilidad)
            .eventCallback('onReverseComplete', () => {
                gsap.set(target, { autoAlpha: 0, visibility: 'hidden' })
            })
        }, [])

    // responde a cambios de isOpen: reproduce o invierte la animación y gestiona el bloqueo de scroll
    useEffect(() => {
        const tl = tlRef.current
        const body = document.body

        if (isOpen) {
            // bloquear scroll y mantener posición visual
            scrollYRef.current = window.scrollY || document.documentElement.scrollTop || 0
            body.classList.add('overflow-hidden')
            body.style.position = 'fixed'
            body.style.top = `-${scrollYRef.current}px`
            body.style.left = '0'
            body.style.right = '0'
            body.style.width = '100%'

            // reproducir animación de apertura
            tl?.play(0)
        } else {
            if (!tl) {
                // si no hay timeline, asegurar restauración inmediata
                body.classList.remove('overflow-hidden')
                body.style.position = ''
                body.style.top = ''
                body.style.left = ''
                body.style.right = ''
                body.style.width = ''
                window.scrollTo(0, scrollYRef.current)
                return
            }

            // invertir animación; al completar la inversión, restaurar scroll/estilos
            const restore = () => {
                body.classList.remove('overflow-hidden')
                body.style.position = ''
                body.style.top = ''
                body.style.left = ''
                body.style.right = ''
                body.style.width = ''
                window.scrollTo(0, scrollYRef.current)
                tl.eventCallback('onReverseComplete', null)
            }

            tl.eventCallback('onReverseComplete', restore)
            tl.reverse()
        }

        // limpiar en desmontado por seguridad
        return () => {
            // si el menú queda abierto por alguna razón, restaurar estilos
            if (!isOpen) return
            body.classList.remove('overflow-hidden')
            body.style.position = ''
            body.style.top = ''
            body.style.left = ''
            body.style.right = ''
            body.style.width = ''
            window.scrollTo(0, scrollYRef.current)
        }
    }, [isOpen])

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
  if (!href) return
  e.preventDefault()

  if (!href.startsWith('#')) {
    // si es un link normal, cerramos y navegamos luego
    setIsOpen(false)
    setTimeout(() => {
      window.location.href = href
    }, 600)
    return
  }

  // 1. cerrar menú
  setIsOpen(false)

  // 2. esperar a que se complete la animación y se restaure el scroll
  const id = href.slice(1)
  const target = document.getElementById(id)
  if (!target) return

  // usamos un pequeño delay para asegurarnos que el body ya no esté fixed
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', href)
  }, 600) // este delay debe ser un poco mayor que la duración de tu animación de cierre
}

  return (
    <div ref={navContRef} className="h-dvh fixed top-0 w-screen z-30">
        <div id="bg-menu" className="bg-white/40 backdrop-blur-sm h-full w-full absolute opacity-0">
        </div>
        <nav id="nav-cont" className="px-6 relative h-full pt-26">
            <ul id="ul-cont" className="w-full flex flex-col bg-[#fff] rounded-xl py-3 opacity-0">
                {navsLinks.map((el , i) => (
                    <li key={i}  className="flex justify-center items-center h-12 w-full">
                        <a href={el.href || '#'}
                            onClick={(e) => handleLinkClick(e, el.href)}>
                            <p className="w-fit">
                                {el.name}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
            <li id="btn-cont" className="bg-blue text-background rounded-xl flex justify-center items-center h-10 w-full my-3 opacity-0">
                <button>Booking</button>
            </li>
        </nav>
    </div>
  )
}
