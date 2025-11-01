import Image from 'next/image'
import React from 'react'
import { contactinfo, copyrightNotice, navsLinks, servicesList } from '../data/data'

export default function Footer() {
  return (
    <footer className='bg-lightblue h-[140lvh] md:h-[110lvh] lg:h-[110lvh] mx-3 lg:mx-5 rounded-xl px-5 pt-5 flex flex-col'>
        <div className='relative h-2/5 lg:h-1/2 w-full overflow-hidden rounded'>
            <Image
                src={'/images/outside-entry.png'}
                alt='Entry-door-image'
                fill
                className='object-cover'
                ></Image>
        </div>
        <div className='grid grid-rows-[max-content] grid-cols-8 md:grid-cols-16 lg:grid-cols-24 gap-3 mx-5 py-[clamp(40px,8vh,100px)] grow'>
            <div className='flex flex-col gap-3 col-span-8 md:col-span-4 lg:col-span-12 pb-5 h-fit'>
                <div className="relative font-bold flex flex-col w-fit">
                    <div className="text-xl leading-3.5">Harmony</div>
                    <div className="text-right px-4 w-full">Dental</div>
                </div>
                <ul className='flex gap-1'>
                    <li className='bg-blue min-w-9 h-9 flex items-center justify-center rounded-full'>
                        <svg className="w-5 h-5 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                        </svg>
                    </li>
                    <li className='bg-blue min-w-9 h-9 flex items-center justify-center rounded-full'>
                        <svg className="w-5 h-5 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className='col-span-4 lg:col-span-4 xl:col-span-3 h-fit'>
                <div className='font-bold'>Company</div>
                <ul className='flex flex-col gap-1 pt-3'>
                    {navsLinks.map((el, i) => (
                        <li key={i}>{el.name}</li>
                    ))}
                </ul>
            </div>
            <div className='col-span-4 lg:col-span-4 xl:col-span-3 h-fit'>
                <div className='font-bold'>Services</div>
                <ul className='flex flex-col gap-1 pt-3'>
                    {servicesList.map((el, i) => (
                        <li key={i}>
                            {el.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='col-span-4 lg:col-span-4 xl:col-span-3 h-fit'>
                <div className='font-bold'>Contact</div>
                <ul className='flex flex-col gap-1 pt-3'>
                    <li>{contactinfo.email}</li>
                    <li>{contactinfo.phone}</li>
                </ul>
            </div>
        </div>
        <div className='border-t border-blue/30 mx-5 h-10 flex items-center'>
            {copyrightNotice}
        </div>
    </footer>
  )
}
