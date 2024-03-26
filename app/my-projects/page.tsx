import React from 'react'
import { Projects } from '@/constants'
import ProjectCard from '@/components/ProjectCard'

const Page = () => {
    return (
        <div
        style={{backgroundImage: "url(/Mountains.jpg)"}} 
        className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-2 gap-16 md:max-w-[90%] md:max-h-[90%] py-20'>
                {Projects.map((project, index)=> (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    text={project.text}
                    image={project.src}
                    link={project.link}
                    />

                ))}
            </div>
            
            <div className='md:hidden max-w-[95%] max-h-[95%] overflow-auto sticky top-0'>
            <div className='md:hidden grid grid-cols-1 gap-16 md:max-w-[90%] md:max-h-[90%]'>
                {Projects.map((project, index)=> (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    text={project.text}
                    image={project.src}
                    link={project.link}
                    />

                ))}
            </div>
            </div>

            
        </div>
    )
}

export default Page