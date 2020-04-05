import React from 'react'

import './form-input.style.scss'

const Forminput=({handleChange, label, name, value, type}) => {
return(
    <div className="group">
        <input className="form-input" type={type} onChange={handleChange} name={name} value={value} />
        {
            label ?
(<label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label> ):null
        }
    </div>
)
}

export default Forminput