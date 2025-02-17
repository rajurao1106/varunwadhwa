import React from 'react'
import BookGallery from './components/BookGellery'
import BookShocase from './components/BookShocase'
import About from './components/About'
import BookShowcase2 from './components/BookShocase2'
import Testimonial from './components/Testmonial'

export default function Books() {
  return (
    <div className='font-Minion flex flex-col gap-10'>
      <BookGallery/>
      <BookShocase/>
      <About/>
      <Testimonial/>
    </div>
  )
}
