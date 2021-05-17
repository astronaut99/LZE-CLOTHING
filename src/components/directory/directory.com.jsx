import React from 'react'
import {connect} from 'react-redux'
import MenuItem from '../menu-item/menu-item.com'
import './directory.sty.scss'
import {createStructuredSelector } from 'reselect'

import {selectDirectorySections} from '../../redux/directory/directory.selectors'

const Directory = ({sections}) => (
          <div className='directory-menu'>
              {
              sections.map(({title,imageUrl,id,size,linkUrl}) => 
              <MenuItem linkUrl={linkUrl} size={size} imageUrl={imageUrl} key={id} title={title} /> )
              }
          </div>
      )

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory);