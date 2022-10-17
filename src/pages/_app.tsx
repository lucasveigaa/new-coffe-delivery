import type { AppProps } from 'next/app'
import { useState } from 'react'

import '../styles/global.css'
import { CheckoutType } from '../types'


function MyApp({ Component, pageProps }: AppProps) {

  const [dataCheckout, setDataCheckout] = useState<CheckoutType>({} as CheckoutType)

  return <Component {...pageProps} setDataCheckout={setDataCheckout} dataCheckout={dataCheckout} />
}

export default MyApp
