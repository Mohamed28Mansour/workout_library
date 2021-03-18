import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './context'
import Channel from './Channel'

const Channels = () => {
    const {channels, closeFrame, isFrameOpen, filteredMuscle} = useGlobalContext()
    return (
        <section className={`${isFrameOpen? "frame-status show-frame" : "frame-status"}`}>
            <div className="frame-container">
                <h2>{filteredMuscle}</h2>
                {channels.map((channel)=> {
                console.log(filteredMuscle)
                    return <Channel key={channel.id} {...channel}/>
                })}
                <button className="close-frame-btn" onClick={closeFrame}>
                    <FaTimes/>
                </button>
            </div>
        </section>
    )
}

export default Channels
