import React from 'react'
import Header from '../Compotents/Header'
import NavigationBar from '../Compotents/NavigationBar.js'
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
    const {data,error} = useSWR('https://api.lanyard.rest/v1/users/432570314120101889',fetcher)
    const {data:repos,error:errorProjects} = useSWR('https://api.github.com/users/dreammstudio/repos',fetcher)
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
      <Header/>
      <NavigationBar/>
      <div className='pr-8 pl-8 pt-4 pb-4 mt-8'>
      {profile ? <Profile profile={profile}/> : <SkeletonProfile/>}
      <Technologies/>
      <br/>
      {projects ? <Projects projects={projects}/> : <SkeletonProjects/>}
      </div>
    </div>
  )
}

export default HomePage
