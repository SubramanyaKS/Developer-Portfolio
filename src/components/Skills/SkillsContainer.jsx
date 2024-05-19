import React from 'react'
import { Slide } from 'react-awesome-reveal'

const SkillsContainer = ({data}) => {
  return (
    <Slide direction='right'>
    <div className='shadow-lg skill-container p-5'>
        <img src={data.image} alt="image"/>
    </div>
    </Slide>
  )
}

export default SkillsContainer