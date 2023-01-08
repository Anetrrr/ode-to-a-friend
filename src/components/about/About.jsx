import React from 'react'
import { Link } from 'react-router-dom';
import './about.css'
import { MdVideoLibrary } from 'react-icons/md'
import { AiFillPicture } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
const About = () => {
  return (
    <section id='about'>
      <h2> Zainab in Consensus</h2>
      <p>Wihout any doubt, we can say that Zainab has had a tremendous impact on everyone at work. She is dedicated, committed and has found a special place in all of our hearts. We all wish we had more time with her but you know we can't stop her from flying. We all love you and wish you the best as you go out there to rock the world... AOA</p>

      <div className="container about_container">
        <div className="about_me">
            <img src='http://drive.google.com/uc?export=view&id=158y3nDlSVIFK6ss9PbKbM6jL2I94rvIp' alt="About image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <AiFillPicture className='about_icon'/>
              <h5>Picture Memories</h5>
              <small>Relive some of the best memories with in pictures</small>
                <Link to='/pictures'>
                  View<IoIosArrowForward/>
                </Link>
            </article>
            <article className='about_card'>
              <MdVideoLibrary className='about_icon'/>
              <h5>Video Memories</h5>
              <small>Relive some of the best memories with in videos</small> 
                <Link to='/videos'>
                  View<IoIosArrowForward/>
                </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About