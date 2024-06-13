import React, { useContext } from 'react'
import { Chat, Sidebar } from '../components'
import config from '../config/config';

const Home = () => {

  console.log(config.APIKEY_SECRET);

  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home