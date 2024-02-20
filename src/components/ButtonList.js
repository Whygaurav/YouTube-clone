import React from 'react'
import Button from './Button'


const ButtonList = () => {
  const list = [ 'All', 'News', 'Tech', 'Live', 'Podcast', 'Football', 'Cricket', 'Songs', 'History', 'Movies', 'Trailers', 'Stand Up Comedy', 'Finance', 'Programming', 'Stocks', 'Geo-politics', ' Comedy Sketches', 'Trending' ];

  return (
    <div className='flex overflow-x-scroll max-w-full'>   
      {
        list.map((list) => (<Button key={list} name={list} />))    
      }
    </div>
  )
}

export default ButtonList

// <div className='flex overflow-x-scroll max-w-full '>
// <Button name="All" />
// <Button name="News" />
// <Button name="Tech" />
// <Button name="Live" />
// <Button name="Podcast" />
// <Button name="Football" />
// <Button name="Cricket" />
// <Button name="Songs" />
// <Button name="History" />
// <Button name="Movies" />
// <Button name="Trailers" />
// <Button name="Stand up Comedy" />
// <Button name="Finance" />
// <Button name="Programming" />
// <Button name="Stocks" />
// <Button name="Geo-politics" />
// <Button name="Sketches" />
// <Button name="Trending" />
// </div>