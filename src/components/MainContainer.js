import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='overflow-x-clip px-8'>
      <div className='sticky top-0 bg-white pb-4 '>
          <ButtonList></ButtonList>
          <VideoContainer></VideoContainer>
      </div>
    </div>
  )
}

export default MainContainer