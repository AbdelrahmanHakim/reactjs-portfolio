import React from 'react'
import {SocialIcon} from 'react-social-icons'
import './socialMedia.css'
 const SocialMedia = () => {
     const d = new Date();
     const year = d.getFullYear();
    return (
        <footer>
            <div className="social-icons">
                <SocialIcon url="https://github.com/AbdelrahmanHakim" />
                <SocialIcon url="https://www.linkedin.com/in/abdelrahman-abdelhakim-961402163/" />
            <SocialIcon url="https://www.instagram.com/abdelrahman_hakim/" />
                <SocialIcon url="https://www.facebook.com/abdelrhman.hakim.96" />
            </div>
            <div className="copyrights">
              <h4>  {year} &copy;Abdelrahman Abdelhakim</h4>
            </div>
        </footer>
    )
}

export default SocialMedia;