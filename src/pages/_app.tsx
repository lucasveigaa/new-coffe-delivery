import type { AppProps } from 'next/app'
import { useState } from 'react'
import { CartProvider } from '../contexts/CartContext'

import '../styles/global.css'
import { CheckoutType } from '../types'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function MyApp({ Component, pageProps }: AppProps) {

  const [dataCheckout, setDataCheckout] = useState<CheckoutType>({} as CheckoutType)

  return (
    <>
      <ToastContainer autoClose={3000} />
      <CartProvider>
        <Component {...pageProps} setDataCheckout={setDataCheckout} dataCheckout={dataCheckout} />
      </CartProvider>
    </>
  )
}

export default MyApp
