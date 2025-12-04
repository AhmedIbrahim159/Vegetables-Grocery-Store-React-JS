import React from 'react'
import Gallery from '../Date'
import Cards from './Cards'

function GalleryD() {
    const fetchData = Gallery.map((items) => {
        return (
            <Cards id={items.id} img={items.img}
                title={items.title}
                price={items.price} />
        )
    })
    return (
        <div className='container'>
            <div className='row'>{fetchData}</div>

        </div>
    )
}

export default GalleryD
