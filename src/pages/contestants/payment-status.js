import { ShieldCheck, XCircle } from '@phosphor-icons/react'
import React from 'react'
import Seo from '../../components/seo'

function PaymentStatus() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Seo />
       <div className=' flex flex-col items-center '>
       <div className='animate-bounce '>
       <ShieldCheck size={200} color="#84C53E" weight='fill' />
       </div>
       <div className='text-2xl'>Payment successful!</div>
       <div>You will be redirected to the results page in 5 seconds</div>
       </div>

       <div className=' flex flex-col items-center '>
       <div className='animate-bounce '>
       <XCircle size={200} color="red" weight='fill' />
       </div>
       <div className='text-2xl'>Payment unsuccessful!</div>
       <div>You will be redirected to the results page in 5 seconds</div>
       </div>
    </div>
  )
}

export default PaymentStatus

export const Head = () => <title>Payment Status</title>