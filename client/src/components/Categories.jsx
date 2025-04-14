import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
  {categories.map((category, index) => (
    <div
      key={index}
      className="group cursor-pointer p-6 rounded-xl flex flex-col justify-center items-center transition transform hover:scale-105 shadow-md"
      style={{ backgroundColor: category.bgColor }}
      onClick={() => {
        navigate(`/products/${category.path.toLowerCase()}`);
        scrollTo(0, 0);
      }}
    >
      <img
        src={category.image}
        alt={category.text}
        className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300"
      />
      <p className="text-base font-semibold mt-4">{category.text}</p>
    </div>
  ))}
</div>
    </div>
  )
}

export default Categories
