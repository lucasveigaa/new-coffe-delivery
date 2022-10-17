
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import coffeLogo from '../assets/coffe-logo.svg';
import iconCartFullYellowDark from "../assets/icon-cart-full-yellow-dark.svg";
import iconMapFullPurple from "../assets/icon-map-full-purple-header.svg";
import { CartContext } from '../contexts/CartContext';

export function Header() {

  const { cart } = useContext(CartContext)

  const cartLength = cart.length

  return (
    <header className='flex justify-between content-center py-8'>
      <div className='cursor-pointer'>
        <Link href="/">
          <Image src={coffeLogo} alt="Logo do Coffe Delivery" />
        </Link>
      </div>

      <div className='flex gap-3'>

        <div className='flex justify-center content-center bg-purple-light p-2 rounded-md text-purple-dark text-sm gap-1 shadow-3xl'>
          <Image src={iconMapFullPurple} width={22} height={22} alt="" />
          <span className='items-center flex'>Minas Gerais, MG</span>
        </div>

        <div className='cursor-pointer relative'>
          <Link href="/checkout">
            <Image src={iconCartFullYellowDark} alt="" />
          </Link>
          <span className='absolute ml-[-8.35px] -mt-2 bg-yellow-dark text-white rounded-full w-6 h-6 text-center'>{cartLength}</span>
        </div>

      </div>
    </header>
  )
}