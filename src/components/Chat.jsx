import React, { useContext } from 'react'
import { add, more, cam } from '../assets'
import { Input, Messages } from '../components'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {

  const { data } = useContext(ChatContext)
  // console.log(data);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}
          {data.user?.photoURL && <img className='imgAvatar' src={data.user?.photoURL} alt="profile avatar" />}
        </span>
        <div className="chatIcons">
          <img src={more} alt="" />
          <img src={add} alt="" />
          <img src={cam} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat