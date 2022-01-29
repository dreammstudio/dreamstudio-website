import React from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
import { useRouter } from "next/router";
import Aos from 'aos'
function Projects({projects}) {
    const router = useRouter()
  return (
    <div id="projects">
      <h1 className="text-4xl font-bold text-center mb-8">Projects:</h1>
      <div className="grid grid-cols sm:grid-cols-2 gap-8" data-aos="fade-up">
        {projects.map((project) => (
          <div data-aos="fade" className="bg-primary hover:scale-105 transition-all p-4 relative" key={project.id} onClick={() => router.push(project.html_url)}>
            <p 
            onClick={() => router.push(project.html_url)}
            className="absolute z-50 right-4 transition-all flex gap-2 items-center top-4 hover:bg-purple-600 cursor-pointer border border-purple-600 rounded-lg px-2">
             <img src="/images/star.png" className="w-4 h-4"></img> {project.stargazers_count}
            </p>
            <p className="text-2xl font-bold text-purple-600">{project.name}</p>
            <br />
            <p className="opacity-75">
                {project.description || "Description not found"}
            </p>
            <div className="flex gap-2 items-center mt-4 float-right cursor-pointer" onClick={() => router.push(project.owner.html_url)}>
                <img src={project.owner.avatar_url} className="rounded-full max-w-8 max-h-8"></img>
                <p className="text-lg leading-tight">{project.owner.login}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
