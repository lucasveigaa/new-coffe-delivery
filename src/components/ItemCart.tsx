import Image from 'next/image';
import cartWhiteBackPurpleDark from "../assets/cart-white-back-purple-dark.svg";

import { Minus, Plus } from "phosphor-react";

interface Product {
  idProduct: number;
  imgProduct: string;
  typeProduct: string[];
  titleProduct: string;
  valueProduct: number;
  descriptionProduct: string;
}

export function ItemCart(product: Product) {


  const { descriptionProduct, imgProduct, titleProduct, typeProduct, valueProduct } = product

  const newValueProduct = valueProduct.toString().replace('.', ',')

  return (
    <div className='flex flex-col items-center w-fit px-4 pb-5 bg-base-card rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px]'>
      <div className='mt-[-21px] mb-3'>
        <Image src={imgProduct} alt="" />
      </div>
      <div className='mb-4'>
        {typeProduct.map((item) => {
          return (
            <span key={item} className='bg-yellow-light py-1 px-2 w-fit text-yellow-dark text-[10px] font-bold rounded-full font-baloo2'>
              {item}
            </span>

          )
        })}
      </div>
      <strong>{titleProduct}</strong>
      <span className='text-base-label text-sm w-52 text-center'>
        {descriptionProduct}
      </span>

      <div className='flex mt-8 w-[232px]'>
        <span className='text-sm text-base-text mr-6'>R$
          <strong className='font-baloo2 font-extrabold text-2xl'> {newValueProduct}0</strong>
        </span>
        <div className='bg-base-button rounded-md p-2 mr-2 flex items-center'>
          <button type='button'>{<Minus color='#8047F8' />}</button>
          <span className='text-base-title px-1'>1</span>
          <button type='button'>{<Plus color='#8047F8' />}</button>
        </div>
        <div className='cursor-pointer'>
          <Image src={cartWhiteBackPurpleDark} alt="" />
        </div>
      </div>
    </div>
  )
}