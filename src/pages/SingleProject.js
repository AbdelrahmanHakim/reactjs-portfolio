import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
import data from '../components/data'
import './singleproject.css'
import {ThemeProvider, createGlobalStyle} from 'styled-components'

 const SingleProject = () => {
    const GlobalStyle = createGlobalStyle
    `body{
        background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE' };
        color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111' }; 
       }
       .form-heading h2{
          color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111' }; 
       }
       .about-section h2{
          color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111' }; 
       }
       .projects h2{
          color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111' }; 
       }` 
       const [theme,setTheme] = useState({mode:'light'})
     const id = useParams()

 
    
    let info = null;

    return (
        <ThemeProvider theme={theme}>
        <section className="info">
            <Header />
            <GlobalStyle />
            <button className="dark-mode" onClick=
            {e=>setTheme(theme.mode ==='dark'?
            {mode: 'light'}:
            {mode:'dark'})}>Theme Toggler</button>
            <img src={info = id? data[id.id].imageURL: null} className="info-image"></img>
            <h4 className="info-name"> {info = id? data[id.id].name: null} </h4> 
            <h4 className="info-desc"> {info = id? data[id.id].desc: null} </h4> 
            <a className="info-link"> {info = id? data[id.id].url: null} </a> 

        </section>
        </ThemeProvider> 
    )
}

export default SingleProject;