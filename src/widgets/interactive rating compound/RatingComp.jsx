import React from 'react'
import { useState } from 'react'
import star from './images/icon-star.svg'
import Thankyou from './images/illustration-thank-you.svg'
import './RatingComp.css'
const RatingComp = () => {
    const [isSubmitted,setisSubmitted] = useState(false)
    const [items,setItems] = useState('')
    const Button =({number}) => {
        return (
            <button onClick={() => setItems(number)}
            className='btn bg-blue-700 text-white h-10 w-10 rounded-full m-2 pt-1'>
                {number}
            </button>
            
        )
    }

    return (
    <div >
        {!isSubmitted && (
            <div className=' wrapper flex flex-col'>
            <img src={star} alt="x" className="bg-gray-700 p-2 w-12 h-12 rounded-full"/>
            <h1 className='text-white text-[30px]'>How did we do?</h1>
            <p className='mb-5'>Please let us know how we did with your support 
                request.All feedback is appreciated to help us improve our offering!
            </p>
            
            <div className="grid justify-items-center">
                <ul className=' flex flex-row '>
                    <li> <Button number = {1}/> </li>
                    <li> <Button number = {2}/> </li>
                    <li> <Button number = {3}/> </li>
                    <li> <Button number = {4}/> </li>
                    <li> <Button number = {5}/> </li>
                </ul>
            </div>
            
            <button onClick={()=> setisSubmitted(true)}
            className='rating  text-white rounded-full uppercase tracking-wide'>Submit</button> 
        </div>
        )}
        {isSubmitted &&(
            <Feedbacak items = {items} setisSubmitted = {setisSubmitted}/>
        )}
    </div>
    
  )
}

const Feedbacak = ({items,setisSubmitted}) =>{
    return(
        <div className="wrapper">
            <img src={Thankyou} alt = 'x' className='mx-auto mb-5'></img>
            <div className='grid justify-items-center'>
            <p> You selected {items} out of 5</p>
                <h1 className='text-white text-[30px]'>Thank you!</h1>
                <p className='mb-5'>We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to get in touch!
                </p>
            </div>
            <button className='rating w-full text-white rounded-full uppercase tracking-wide' onClick={() => setisSubmitted(false)}  >Rate Again</button>
        </div>
    )

}

export default RatingComp