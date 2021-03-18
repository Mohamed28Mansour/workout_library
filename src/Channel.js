import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from './context'
// import Playlist from './Playlist'

const Channel = ({channelID, channelTitle, image, playlistID}) => {
    const{setPlaylist} = useGlobalContext()
    
    // const name = snippet.title;
    // const image = snippet.thumbnails.medium.url;
    // const playlistID = contentDetails.relatedPlaylists.uploads;
    const key= process.env.REACT_APP_KEY


  const playlistUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistID}&key=${key}`;

  const fetchPlaylist = async()=> {
  const response = await fetch(playlistUrl);
  const playlist = await response.json();
  console.log(playlist)
  setPlaylist(playlist.items)
}


    return (
        <article className='single-channel'>
            <button className='channel-btn' onClick={fetchPlaylist}>
            <h3>{channelTitle}</h3>
            <Link to={`/channel/${playlistID}`}>
            <img src={image} className='channel-card' alt={channelTitle}/>
            </Link>
            </button>
        </article>
    )
}

export default Channel
