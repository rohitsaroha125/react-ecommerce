import React from 'react'

import './menu-item.style.scss'

const Menuitem=({title,imageUrl,size}) => {
    return(
        <div className={`${size} menu-item`}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
                    <div className="content">
    <h1 className="title">{title}</h1>
    <p className="subtitle">SHOP NOW</p>
                    </div>
                </div>
    )
}

export default Menuitem