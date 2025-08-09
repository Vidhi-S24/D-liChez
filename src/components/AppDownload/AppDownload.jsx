import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> DéliChez App</p>
        <div className="app-download-platforms">
            <img src={assets.google_play_icon} alt='google_play'/>
            <img src={assets.app_store_icon} alt='app_store_icon'/>
        </div>
    </div>
  )
}

export default AppDownload