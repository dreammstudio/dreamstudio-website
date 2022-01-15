import React from 'react'
import Link from 'next/link'
function NavigationBar() {
    return (
        <div className='w-full md:w-3/4 mx-auto p-2 rounded flex items-center'>
            <Link href="/">
            <div className='flex items-center gap-2 cursor-pointer'>
                <img src="/images/dream.png" className='w-12'></img>
                <h1 className=' text-lg md:text-xl font-semibold'>dream's website</h1>
            </div>
            </Link>
            <div className='flex gap-4 ml-auto mr-8'>
            <Link href="/#projects">
            <a className='opacity-80 hover:opacity-100 transition-all text-lg sm:text-xl font-semibold'>Projects</a>
            </Link>
            <Link href="" disabled={true}>
            <a className='opacity-50 text-red-600 cursor-not-allowed text-lg sm:text-xl font-semibold'>Blog #soon</a>
            </Link>
            <Link href="/donate">
            <a className='opacity-80 hover:opacity-100 transition-all text-lg sm:text-xl font-semibold'>Donate</a>
            </Link>
            </div>
        </div>
    )
}

export default NavigationBar
