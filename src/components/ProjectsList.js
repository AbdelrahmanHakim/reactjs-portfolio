import React from 'react'
import './projectList.css'
import data from './data'
import Project from './Project'

 const PojectsList = () => {

    const createProject= (data) =>{
        return <Project 
            key={data.id}
            img={data.imageURL}
            name={data.name}
            id={data.id}
        />
    }
 
    return (
        <section className="projects" id="projects">
        <h2>Projects</h2>
        {data.map(createProject)}

        </section>
    )
}

export default PojectsList;