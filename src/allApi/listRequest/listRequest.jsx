import React from 'react'

 export default async function listRequest() {
  
    const data= await fetch(`https://basic-blog.teamrabbil.com/api/post-list/2}`)
 



  return data.json()
  
}
