import React from 'react'
import {useGlobalContext} from './context'

const FilteredPlaylist = () => {
    const {playlist, filteredMuscle} = useGlobalContext()

    if(playlist.length < 1){
    return <h1>No available videos for {filteredMuscle} in the chosen channel</h1>
    }
    return (
        <section className='vids-container'>
            <div className="vids">
                <h2>{filteredMuscle}</h2>
                {playlist.map((vid)=> {
                    // console.log(vid);
                     const {snippet} = vid
                     const vidID = snippet.resourceId.videoId
                     const vidTitle = snippet.title
                     return (
                        <div key={vidID}>
                            <iframe src={`https://www.youtube.com/embed/${vidID}`} 
                            frameBorder="0"
                            allowFullScreen
                            title={vidTitle}
                            />
                            <p>{vidTitle}</p>
                        </div>
                        )
                })}
            </div>
        </section>
    )
}

export default FilteredPlaylist
