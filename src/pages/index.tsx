import type { NextPage } from 'next';
import { Header } from '../components/header';

import Image from 'next/image';

import bannerCoffeHome from "../assets/banner-home.svg";
import iconCartWhiteBackYellow from "../assets/cart-white-back-yellow.svg";
import iconCoffeWhiteBackPurple from "../assets/coffe-white-back-purple.svg";
import iconPackingWhiteBackGray from "../assets/packing-white-back-gray.svg";
import timerWhiteBackYellow from "../assets/timer-white-back-yellow.svg";


const Home: NextPage = () => {
  return (
    <div className='max-w-[1170px] mx-auto'>
      <Header />

      <div className='flex mb-24'>
        <div>

          <h1 className='text-base-title text-5xl font-baloo2 font-extrabold leading-tight mb-4'>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className='text-base-subtitle text-xl font-roboto leading-tight'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </span>

          <div className='mt-16 grid grid-cols-2 grid-rows-2 gap-5'>
            <div className='flex items-center gap-3'>
              <Image src={iconCartWhiteBackYellow} alt="" />
              <span className='font-roboto text-base-text'>Compra simples e segura</span>
            </div>
            <div className='flex items-center gap-3'>
              <Image src={iconPackingWhiteBackGray} alt="" />
              <span className='font-roboto text-base-text'>Embalagem mantém o café intacto</span>
            </div>
            <div className='flex items-center gap-3'>
              <Image src={timerWhiteBackYellow} alt="" />
              <span className='font-roboto text-base-text'>Entrega rápida e rastreada</span>
            </div>
            <div className='flex items-center gap-3'>
              <Image src={iconCoffeWhiteBackPurple} alt="" />
              <span className='font-roboto text-base-text'>
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <Image src={bannerCoffeHome} alt="" />
      </div>
    </div>
  )
}

export default Home
