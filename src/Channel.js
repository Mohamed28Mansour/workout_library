import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from './context'

const Channel = ({channelID, channelTitle, image, playlistID}) => {
    const{setPlaylist, filterPlaylist, filteredMuscle} = useGlobalContext()
    
    const key= process.env.REACT_APP_KEY


  const playlistUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistID}&key=${key}`;

  const fetchPlaylist = async()=> {
  const response = await fetch(playlistUrl);
  const data = await response.json();
  const playlist = data.items
let keywords = {
    back : ['back', 'lat', 'lats', 'trap', 'traps'],
    shoulders: ['shoulders', 'shoulder', 'delt', 'delts'],
    chest: ['chest', 'peck', 'pecks', 'bench'],
    triceps: ['triceps'],
    biceps: ['biceps', 'bicep'],
    forearms: ['forearms', 'forearm'],
    core: ['ab', 'abs', '6 pack', 'six pack', 'core', 'obliques'],
    glutes: ['glutes', 'butt'],
    calves: ['calves', 'calf'],
    quads: ['quads', 'leg', 'legs'],
    hamstrings: ['hamstrings', 'leg', 'legs']
}
let newPlaylist = filterPlaylist(keywords[filteredMuscle], playlist)
setPlaylist(newPlaylist)
}


    return (
        <article className='single-channel'>
            <button className='channel-btn' onClick={fetchPlaylist}>
            <h3>{channelTitle}</h3>
            <Link to={`/channel/${channelID}`}>
            <img src={image} className='channel-card' alt={channelTitle}/>
            </Link>
            </button>
        </article>
    )
}

export default Channel
