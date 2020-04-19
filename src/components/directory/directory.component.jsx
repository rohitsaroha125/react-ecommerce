import React from 'react'

import { connect } from 'react-redux'

import './directory.style.scss'
import Menuitem from '../menu-item/menu-item.component'
import selectData from '../../redux/directory/directory.selector.js'

const Directory=({directory}) => {
        return(
            <div className="directory-menu">
                {
                    directory.map(({title,imageUrl,id,size,linkUrl}) => {
                        return(
                            <Menuitem title={title} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}></Menuitem>
                        )
                    })
                }
            </div>
        )
}

const mapStateToProps=(state) => ({
    directory: selectData(state)
})

export default connect(mapStateToProps)(Directory) 