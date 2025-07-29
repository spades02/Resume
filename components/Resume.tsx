"use client";
import projects from "@/data/projects";
import { useState } from "react"
import React from 'react'
import ProjectCard from "./ProjectCard";

export default function Resume({data} :any) {
  const [activeTab, setActiveTab] = useState("hard");
  const setBg = (active: any) => (activeTab === active ? 'bg-yellow-300' : 'bg-gray-200');
  const skill = (active: any) => (activeTab === active ? 'visible' : 'collapse');
  return (
    <div className='max-h-screen'>
      <h1 className='font-bold font-mono text-xl'>About Me</h1>
      <p className='font-medium font-mono'>I am a Software Engineer graduated from Bahria University with a strong passion for coding, problem-solving, and building scalable software. My journey began in childhood with a fascination for computers and games, which evolved into a commitment to continuous learning in the world of development.
</p>
      <div className='grid grid-cols-2 mt-4'>
        <button key = {"hard"} type = 'button' onClick={() =>setActiveTab("hard")} className={`${setBg("hard")} p-2 px-6 text-2xl text-left font-bold uppercase`}>
          Hard Skills
        </button> 
        <button key = {"soft"} type = 'button' onClick={() =>setActiveTab("soft")} className={`${setBg("soft")} p-2 px-6 text-2xl text-right font-bold uppercase`}>
            Soft Skills
            </button>
      </div>
      <div>
        <ul className={`flex flex-row flex-wrap content-start list-none gap-2 mt-2 ${activeTab === "soft" ? 'justify-end': 'justify-start'}`}>
          {data[activeTab].map(({icon, text} :any)=>(
            <li className="bg-gray-200 py-2 px-4 text-md font-mono w-fit rounded-md">
              <span> {icon}</span> {text}
            </li>
          ))}


        </ul>
      </div>
     <div className="mt-2">
      <h1 className='font-bold font-mono text-xl'>My Projects</h1>
      <div className="p-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-white">
        {projects.map((project, index) => (
          <ProjectCard key={project.id || index} project={project} />
        ))}
      </div>
    </div>
     </div>

    </div>
  )
}
