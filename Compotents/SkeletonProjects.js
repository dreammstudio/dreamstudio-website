import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonProjects() {
    return (
        <SkeletonTheme
          baseColor="#282f4c"
          highlightColor="#6063ff"
        >
            <h1 className='text-4xl font-bold text-center mb-8'>Projects:</h1>
            <div className='grid grid-cols sm:grid-cols-2 gap-8'>
            {
            [0,1,2,3,4,5,6,7].map((index) => (
                <div className='bg-primary p-4 relative' key={index}>
                    <p className='absolute right-2 top-2'><Skeleton width={50} height={20}/></p>
                    <Skeleton width={"50%"} height={30}></Skeleton>
                    <br/>
                    <p><Skeleton height={100}></Skeleton></p>
                </div>
            ))
}
</div>
        </SkeletonTheme>
    );
}

export default SkeletonProjects
