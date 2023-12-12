import React from 'react'

async function CategoriesRequest() {
const data=await fetch("https://basic-blog.teamrabbil.com/api/post-categories")

  return data.json()
    
  
}

export default CategoriesRequest