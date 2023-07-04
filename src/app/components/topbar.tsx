import React from 'react'
import { GoBell } from 'react-icons/go'

function Topbar() {
  return (
    <div className='h-10 bg-white flex items-center pr-6 justify-end'>
        <GoBell size={17} color='#C4C4C4'/>
    </div>
  )
}

export default Topbar