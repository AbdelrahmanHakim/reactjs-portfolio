import React from 'react'
import {Link} from 'react-router-dom'
import './project.css'

const Project = (props) => {
    return (
        <section>
                <div className="project">
                <img src={props.img} alt="project"/>
                <h5>{props.name}</h5>
                <h5>{props.desc}</h5>
                <h5>{props.url}</h5>
                <Link to={`project/${props.id}`} className="btn">Show Info</Link>

            </div>
        </section>
    )
}

export default Project;
