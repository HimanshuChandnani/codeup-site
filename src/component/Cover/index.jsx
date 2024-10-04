import React from 'react'
import video from '../../images/astronauts.mp4'
import Wrapper from './style'

const Cover = () => {

  const bracket = ['{', '}']
  
  return (
    <Wrapper className="cover py-5">
        <div className="video">
            <video autoPlay muted loop src={video}></video>
        </div>
        <div className="container text-light position-relative">
            <div id="cover-message" className="mx-5">
                <h1 className="" id="cover-anim1"><span className="left">{bracket[0]} </span>A journey from Student to Aspirant<span className="right"> {bracket[1]}</span></h1>
                <p className="" id="cover-anim2">Let us understand where you are. Lets plan a roadmap and break the barrier.</p>
            </div>
            <button className="btn btn-success mb-5">Enroll into Codeup ACE Academy</button>
        </div>
    </Wrapper>
  )
}

export default Cover
