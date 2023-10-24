import React from 'react'
import { useState } from 'react'
import './App.css'
import { imageDb } from './firebase'
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [image,setImage] = useState('')
  const[imgUrl,setImgUrl] = useState()

  async function handleClick (e){
    e.preventDefault()
    const imageref = ref(imageDb,`images/${uuidv4()}`);
    uploadBytes(imageref,image).then(value =>{
      console.log(value)
      getDownloadURL(value.ref).then(url =>{
        console.log(url)
        setImgUrl(url)
      })
    })

  }

  console.log(imgUrl)
      //  const imgRef =  ref(imageDb,`files/${v4()}`)
      //  uploadBytes(imgRef,img).then(value=>{
      //      console.log(value)
      //      getDownloadURL(value.ref).then(url=>{
      //          setImgUrl(data=>[...data,url])
      //      })
      //  })


  return (
    <div>
        <h1 className='text-center'>INI COBA UPLOAD IMAGE KE FIREBASE STORAGE DAN DAPETIN LINKNYA </h1>
        <form >
            <label htmlFor="image">Masukkan File Foto Anda</label>
            <input 
            type="file" 
            name="image"
            id="image" 
            onChange={(e)=>{setImage(e.target.files[0])}}
            />
            <button type="submit" onClick={handleClick}>Kirim Foto</button>
        </form>
    </div>
  )
}
