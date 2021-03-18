import React from 'react'
import {useGlobalContext} from './context'

const FilteredPlaylist = () => {
    const {playlist} = useGlobalContext()

    return (
        <section className='vids-container'>
            <div className="vids">
                {playlist.map((vid)=> {
                    console.log(vid);
                     const {snippet} = vid
                     const vidID = snippet.resourceId.videoId
                     const vidTitle = snippet.title
                     return (
                        <div key={vidID}>
                            <iframe src={`https://www.youtube.com/embed/${vidID}`} 
                            frameborder="0"
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
