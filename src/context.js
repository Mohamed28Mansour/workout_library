import React, {useState, useEffect, useContext} from 'react'

const API_KEY = process.env.REACT_APP_KEY
const ChannelsListUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=UCe0TLA0EsQbE-MjuHXevj2A&id=UC68TLK0mAEzUyHx5x5k-S1Q&maxResults=50&key=${API_KEY}`;
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [channels, setChannels] = useState([])
    const [playlist, setPlaylist] = useState([])
    const [filteredMuscle, setFilteredMuscle] = useState('')
    const [isFrameOpen, setIsFrameOpen] = useState(false)


const fetchChannelsData = async()=> {
    const response = await fetch(ChannelsListUrl);
    const data = await response.json();
    const channelsListData = Object.values(data)[3]
    if (channelsListData){
        const fetchedChannelsList = channelsListData.map((fetchedChannel)=>{
            const {id, snippet, contentDetails} = fetchedChannel
            return {channelID: id, 
                    channelTitle: snippet.title, 
                    image: snippet.thumbnails.medium.url,
                    playlistID: contentDetails.relatedPlaylists.uploads}
        })
        setChannels(fetchedChannelsList)
    }
}

useEffect(()=> {
  fetchChannelsData()
},[])


const openFrameandFilterMuscle = (e) => {
    setFilteredMuscle(e.target.alt);
    setIsFrameOpen(true)
}

const closeFrame = () => {
    setIsFrameOpen(false)
}

    return <AppContext.Provider value={{
        channels,
        isFrameOpen,
        openFrameandFilterMuscle,
        closeFrame,
        setPlaylist,
        playlist,
        filteredMuscle,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }