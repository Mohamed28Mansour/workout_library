import React from 'react'
import {bodyParts} from './images'
import {useGlobalContext} from './context'

const Display = () => {
    const {openFrameandFilterMuscle} = useGlobalContext()
    return (
        <section className="cards-container">
            <div className="card">
            {bodyParts.map((bodyPart,index)=> {
                const {id, title, image} = bodyPart
                index = +Object.values({index}).join()
                // console.log(typeof title);
                return <span key={id} 
                style={{'--i':`${index+1}`}} 
                onClick={openFrameandFilterMuscle}
                >
                    <h3 className='card-title'>{title}</h3>
                    <img src={image} alt={title}/>
                    </span>
                
            })}
            </div>
        </section>
    )
}

export default Display
