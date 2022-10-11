
import Image from 'next/image';

import coffeLogo from '../assets/coffe-logo.svg';
import iconCartFullYellowDark from "../assets/icon-cart-full-yellow-dark.svg";
import iconMapFullPurple from "../assets/icon-map-full-purple-header.svg";

export function Header() {
  return (
    <header className='flex justify-between content-center max-w-[1170px] mx-auto py-8'>
      <Image src={coffeLogo} alt="Logo do Coffe Delivery" />

      <div className='flex gap-3'>

        <div className='flex justify-center content-center bg-purple-light p-2 rounded-md text-purple-dark text-sm gap-1 shadow-3xl'>
          <Image src={iconMapFullPurple} width={22} height={22} alt="" />
          <span>Minas Gerais, MG</span>
        </div>

        <Image src={iconCartFullYellowDark} alt="" />

      </div>
    </header>
  )
}