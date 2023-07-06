"use client";
import { useState } from "react"
import React from 'react'

export default function Resume({data} :any) {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active: any) => (activeTab === active ? 'bg-yellow-300' : 'bg-gray-200');
  const skill = (active: any) => (activeTab === active ? 'visible' : 'collapse');
  return (
    <div className =''>
        <div className=''>
            <h1 className='font-bold font-mono text-xl'>About Me</h1>
            <p className='font-medium font-mono'>I am a dedicated student of Software Engineering at Bahria University, where I am pursuing my passion for coding and building a strong foundation in the field. With a lifelong love for computers that began during my childhood, when I frequently played video games, I have developed a deep interest in software development and am eager to embark on a continuous learning journey as a software engineer.</p>
            <br />
            <p className='font-medium font-mono'>In addition to my academic pursuits, I am an average CS:GO player. I also have a keen interest in cricket, which not only helps me maintain a balanced lifestyle but also instills discipline and teamwork. Moreover, I devote time to improving my physical fitness, recognizing its importance for overall well-being and mental clarity.</p>
            <br />
            <p className='font-medium font-mono'>Furthermore, I actively engage in the world of cryptocurrency trading, managing a small account. This experience has provided me with insights into the dynamic nature of the financial market and the ability to analyze and make informed decisions in a rapidly evolving industry.</p>
        </div>
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
     

    </div>
  )
}
