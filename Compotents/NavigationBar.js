import React from 'react'
import Link from 'next/link'
function NavigationBar() {
    return (
        <div className='bg-primary w-3/4 flex justify-around p-2 rounded mx-auto'>
            <Link href="#projects">
            <a className='opacity-80 hover:opacity-100 transition-all'>Projects</a>
            </Link>
            <Link href="#" disabled={true}>
            <a className='opacity-50 text-red-600 cursor-not-allowed'>Blog #soon</a>
            </Link>
            <Link href="/donate">
            <a className='opacity-80 hover:opacity-100 transition-all'>Donate</a>
            </Link>
        </div>
    )
}

export default NavigationBar
