import React from 'react'
import {useState,useEffect} from 'react'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(r => r.json())
import Profile from '../Compotents/Profile'
import SkeletonProfile from '../Compotents/SkeletonProfile'
import Technologies from '../Compotents/Technologies'
import Projects from '../Compotents/Projects'
import SkeletonProjects from '../Compotents/SkeletonProjects'
function HomePage() {
    const [profile,setProfile] = useState(undefined)
    const [projects,setProjects] = useState(undefined)
    const {data,error} = useSWR('https://api.lanyard.rest/v1/users/432570314120101889',fetcher,{revalidateIfStale: false,refreshInterval:1000,refreshWhenOffline:false})
    const {data:repos,error:errorProjects} = useSWR('https://api.github.com/users/dreammstudio/repos',fetcher,{refreshInterval:5000})
    useEffect(() => {
        if(data) {
            setProfile(data.data)
        }
        if(repos) {
          setProjects(repos)
        }
    },[data,repos])
  return (
    <div>
      <div className='container mx-auto pr-8 pl-8  md:pr-24 md:pl-24 pt-8 pb-8 mt-8' data-aos="fade">
      {profile ? <Profile profile={profile} /> : <SkeletonProfile/>}
      <Technologies/>
      <br/>
      {projects ? <Projects id="projects" projects={projects}/> : <SkeletonProjects/>}
      </div>
    </div>
  )
}

export default HomePage
