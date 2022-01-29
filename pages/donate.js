import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function DoantePage() {
    const router = useRouter()
    return (
        <div data-aos="fade">
            <img
            className="mx-auto rounded-lg cursor-pointer mt-8"
            data-aos="zoom-in-down"
            onClick={() => router.push("https://www.buymeacoffee.com/dreammstudio")}
            src="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9jZG4uYnV5bWVhY29mZmVlLmNvbS91cGxvYWRzL3Byb2ZpbGVfcGljdHVyZXMvMjAyMi8wMS82Zjc5M2Q5ZGUwOTgyMGFjNTVhNTM4ODZiOGU2NzlkYi5wbmdAMzAwd18wZS53ZWJw&creator=dreammstudio&design_code=1&design_color=%235F7FFF&slug=dreammstudio"></img>
        <Link href="https://www.buymeacoffee.com/dreammstudio">
        <h1 className='text-4xl font-bold text-center my-4 cursor-pointer'>Buy me a coffee </h1>
        </Link>
        </div>
    )
}

export default DoantePage
