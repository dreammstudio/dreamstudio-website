import React from 'react'
import Data from '../TechnologiesData'
import { useRouter } from 'next/router'
function Technologies() {
    const router = useRouter()
    const tech = Data
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-8'>Technologies I Use:</h1>
            <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
            {
                tech.map((item,index) => {
                    return (
                        <div
                         key={index} 
                         onClick={() => router.push(item.url)}
                         className="flex flex-col items-center justify-center bg-primary rounded p-4 hover:scale-105 cursor-pointer transition-all">
                            <img src={item.logo} className="max-w-20 max-h-20"/>
                            <h1 className="text-2xl font-bold mt-4">{item.name}</h1>
                        </div>
                    )
                }
                )
            }
                            </div>
        </div>
    )
}

export default Technologies
