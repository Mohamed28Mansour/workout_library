import React from 'react'
import {useGlobalContext} from './context'

const FilteredPlaylist = () => {
    const {playlist, filteredMuscle} = useGlobalContext()

    if(playlist.length < 1){
    return (
            <section className='vids-container'>
                    <iframe src="https://giphy.com/embed/3osxYyselsczdHc1eE" 
                            frameBorder="0" 
                            className="gif" 
                            title= 'gif'
                            allowFullScreen
                            />
                <h1>No available videos for {filteredMuscle} in the chosen channel</h1>
            </section>
        )
    }
    return (
        <section className='vids-container'>
            <div className="vids">
                <h2 className='muscle'>{filteredMuscle}</h2>
                {playlist.map((vid)=> {
                    // console.log(vid);
                     const {snippet} = vid
                     const vidID = snippet.resourceId.videoId
                     const vidTitle = snippet.title
                     return (
                        <div className='vid' key={vidID}>
                            <iframe src={`https://www.youtube.com/embed/${vidID}`} 
                            frameBorder="0"
                            allowFullScreen
                            title={vidTitle}
                            className='vid-frame'
                            />
                            <p className='vid-title'>{vidTitle}</p>
                        </div>
                        )
                })}
            </div>
        </section>
    )
}

export default FilteredPlaylist
