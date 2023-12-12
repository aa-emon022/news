import React from 'react'

 export default async function newRequest() {
  
    const data= await fetch(`https://basic-blog.teamrabbil.com/api/post-newest`)
 



  return data.json()
  
}
