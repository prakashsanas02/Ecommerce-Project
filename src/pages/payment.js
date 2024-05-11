import React from 'react'
import { Link } from 'react-router-dom';


const payment = () => {
  return (
    <section id='payment'>
    <div className='mx-auto container p-4'>

        <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                
        <h1 className='text-2xl font-bold text-center text-red-600 font-sans'>Payment Details</h1>

                <form className='pt-6 flex flex-col gap-4'>
                <div className='grid'>
                        <label>Full Name : </label>
                        <div className='bg-slate-100 p-2'>
                            <input 
                            required
                               type='name'
                                placeholder='Enter full name' 
                                name='name'
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <div className='grid'>
                        <label>Card Number : </label>
                        <div className='bg-slate-100 p-2'>
                            <input 
                               type='number'
                                placeholder='Enter card number' 
                                name='card number'
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>

                    <div className='grid'>
                        <label>Expiry Date : </label>
                        <div className='bg-slate-100 p-2'>
                            <input 
                               type='date'
                                placeholder='Expiry Date' 
                                name='expiryDate'
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>

                    <div className='grid'>
                        <label>CVV : </label>
                        <div className='bg-slate-100 p-2'>
                            <input 
                               type='number'
                                placeholder='Enter CVV' 
                                name='cvv'
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                   

                 <Link to={"/"}> <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Payment</button></Link>

                </form>

              
        </div>


    </div>
</section>
  )
}

export default payment