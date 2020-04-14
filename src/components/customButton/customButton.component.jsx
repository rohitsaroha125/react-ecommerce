import React from 'react'

import './customButton.style.scss'

const CustomButton=({type, value,click, handleClick, isGoogle, inverted, item}) => {
        if(click)
        {
            return(<button className={`${inverted ? 'inverted':''} ${isGoogle ? 'google-sign-in':''} custom-button`} onClick={handleClick} type={type}>
            {value}
        </button>)
        }
        else
        {
            return(<button className="custom-button" type={type}>
            {value}
        </button>)
        }
}



export default CustomButton