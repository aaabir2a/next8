
import Button from '@/app/components/Button'
import React from 'react'
import abc from '@/public/images/abc.jpg'
import Image from 'next/image'

function page() {
  return (
    <div>
      <div>Mission Page</div>
      <p>After making these changes, you can navigate to /blogs/1 or /blogs/2 to view the corresponding blog details. If the id doesn’t match any blog, the user will see a 404 page.</p>
      <div className='w-[400px]'>
      <Image src={abc} alt='image'/>
      </div>
      
      <Button/>
    </div>
  )
}

export default page