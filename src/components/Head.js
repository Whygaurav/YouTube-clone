// import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
// import { CORS_PROXY_URL, YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    
    // const [searchQuery, setSearchQuery] = useState("");
    // useEffect(() => {
    //     console.log(searchQuery) //Calling the API
    // Function to call API after every key press but,
    // If time gap between two presses is more than 200ms then decline the API call
    //     getSearchSuggestions();
    // }, [searchQuery])
    // const getSearchSuggestions = async() => {
    //     const data = await fetch( CORS_PROXY_URL + YOUTUBE_SEARCH_API + searchQuery);
    //     const json = await data.json();
    //     console.log(json);
    // }

  return (
    <div className=' grid grid-flow-col p-2 m-1 w-screen '>
        <div className='flex col-span-1'>
            <img
                onClick={() => toggleMenuHandler()}
                className='h-11 cursor-pointer' 
                src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
                alt='menu-icon'
            ></img>
            <a>
                <img
                    className='h-11 mx-2 p-2'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png'
                    alt='youtube-logo'
                ></img>
            </a>
        </div>

        <div className='col-span-10 px-10'>
            <input 
                className='w-1/2 border border-gray-400 p-2 rounded-l-full' 
                type='text'
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            <button className='border border-gray-400 bg-gray-100 p-2 rounded-r-full'>Search</button>
        </div>

        <div className='col-span-1'>
            <img 
                className='h-8'
                src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                alt='user-icon'
            ></img>
        </div>
    </div>
  )
}

export default Head