import CategoriesRequest from '@/allApi/categoriesRequest/categoriesRequest'
import Footer from '@/footer/footer'
import React from 'react'

async function page() {
const categoriesItems=await CategoriesRequest()
  return (
    
    <>
    <section>
    
      <div className=' relative  sm:top-[30px] md:top-[80px] '>
        {
          categoriesItems.map((items,index)=>(
            <div key={index} className='border-2'>
<div ype="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"><button t>
  {items.name}
</button></div>
            </div>
          ))
        }
      </div>
      
    </section>
<section><div className='relative top-[100px]'><Footer/></div></section>
    </>
  )
}

export default page