import React from 'react'
import './Preview.css'
import desktop from './images/image-product-desktop.jpg'
import icon from './images/icon-cart.svg'
// import mobile from './images/image-product-mobile.jpg'
const Preview = () => {
  return (
    <>
    <div className="grid h-screen place-items-center">
    <section className='flex flex-row w-[600px] border-2 rounded-md border-teal-500'>
        <div className='basis-1/2'>
                {/* <source media ="(min-width:1440px)" srcSet={desktop}/> */}
                <img id='image' className='object-contain' src = {desktop} alt = "t"/>

        </div>
        <div className='basis-1/2'>
            <div className="m-5 mb-0 flex flex-col">
                <h3 className='m-2' id='perfume'>PERFUME</h3>
                <h1 className='m-2' id='heading'>Gabrielle Essence Eau De Parfum</h1>
                <p className='m-2' >A floral solar and voluptuous interpretation composed by
                    Oliver Polge,Perfumer-Creator for the House of CHANEL
                </p>
                <div className='flex flex-row m-2'>
                    <h1 id ='discount'className='m-2'>$149.99</h1>
                    <h3 id='price'className='m-2'>$169.99</h3>
                </div>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 flex flex-row justify-center'><img className='mr-2' src={icon} alt='icon'></img>Add to Cart</button>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default Preview