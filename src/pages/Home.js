import React,{useState} from 'react'
import Header from '../components/Header'
import About from '../components/About'
import ProjectList from '../components/ProjectsList'
import Form from '../components/Form'
import SocialMedia from '../components/SocialMedia'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import './home.css'

 const Home = () => {
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
     }` ;
     const [theme,setTheme] = useState({mode:'light'})
    return (
        <ThemeProvider theme={theme}
        >
        <section>
        
            <Header / >
            <GlobalStyle />
            <button className="dark-mode" onClick=
            {e=>setTheme(theme.mode ==='dark'?
            {mode: 'light'}:
            {mode:'dark'})}>Theme Toggler</button>
            <About />
            <ProjectList />
            <Form />
            <SocialMedia />
            
        </section>

        </ThemeProvider>   
    )
}

export default Home;