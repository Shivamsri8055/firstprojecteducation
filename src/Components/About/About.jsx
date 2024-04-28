import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
       <div className='about-left'>
        <img src={about_img} alt="" className='about_img' />
        <img src={play_icon} alt="" className='play_icon' />
       </div>
       <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformation educational journey with our university's comprehensive education programs.
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cupiditate laboriosam doloremque
           exercitationem repudiandae cumque assumenda dolore dolores, tempore facilis 
           reprehenderit eveniet non inventore magni culpa pariatur quos? Quae, officiis.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo minus officiis eius ex voluptatem, 
            iste quis repellendus explicabo similique nostrum dolorum, eligendi commodi! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Tempore, sunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error porro explicabo perferendis est unde id,
             aliquid autem dolores iste totam quibusdam facilis saepe voluptate sequi sint animi
            consequatur. Animi sequi magnam optio soluta aliquid?</p>
       </div>
    </div>
  )
}

export default About