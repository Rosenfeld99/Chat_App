import React, { useContext, useState } from 'react'
import { img, attach } from '../assets'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase/firebase'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const [text, setText] = useState("")
  const [image, setImage] = useState(null)

  const handelSend = async () => {
    if (!currentUser) {
      console.error("User is not authenticated");
      return;
    }
  
    try {
      if (image) {
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, image);
        console.log("Uploading image:", image);
  
        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            console.error("Error during upload:", error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                image: downloadURL,
              }),
            });
          }
        );
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now()
          })
        });
      }
  
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [`${data.chatId}.lastMessage`]: { text },
        [`${data.chatId}.date`]: serverTimestamp()
      });
  
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [`${data.chatId}.lastMessage`]: { text },
        [`${data.chatId}.date`]: serverTimestamp()
      });
  
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  
  return (
    <div className='input'>
      <input type="text" placeholder='Type somthing...' value={text} onChange={(e) => setText(e.target.value)} />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{ display: 'none' }} id='file' onChange={(e) => setImage(e.target.files[0])} />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button onClick={handelSend}>Send</button>
      </div>
    </div>
  )
}

export default Input