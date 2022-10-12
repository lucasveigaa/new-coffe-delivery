

import Image from "next/image";
import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from 'phosphor-react';
import { Input } from "../components/Input";


import expressoTradicional from '../assets/01-expresso-tradicional.svg';
import { Header } from "../components/Header";


export default function Checkout() {
  return (
    <div className='max-w-[1170px] mx-auto'>
      <Header />

      <form className="grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <strong>Complete seu pedido</strong>
          <div className="flex flex-col p-10 rounded-md bg-base-card mt-4">
            <div className="flex">
              <MapPin size={22} color='#DBAC2C' />
              <span className="text-base-subtitle"> Endereço de entrega</span>
            </div>
            <span className="text-base-text text-sm">Informe o endereço onde deseja receber seu pedido</span>

            <div className="flex gap-4 flex-col mt-8">
              <div className="grid grid-cols-3">
                <Input type='number' placeholder="CEP" />
              </div>
              <Input type='text' placeholder="Rua" />
              <div className="grid grid-cols-3 gap-3">
                <Input type='number' placeholder="Número" />
                <div className="col-span-2">
                  <Input type='text' placeholder="Complemento" />
                </div>
              </div>
              <div className="grid grid-cols-9 gap-3">
                <div className="col-span-3">
                  <Input type='text' placeholder="Bairro" />
                </div>
                <div className="col-span-5">
                  <Input type='text' placeholder="Cidade" />
                </div>
                <Input type='text' placeholder="UF" />
              </div>
            </div>

          </div>

          <div className="mt-3 flex flex-col p-10 rounded-md bg-base-card">
            <div className="flex gap-2">
              <CurrencyDollar size={22} color="#8047F8" />
              <span className="text-base-subtitle">Pagamento</span>
            </div>
            <span className="text-sm text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>

            <div className="flex gap-3 mt-8">
              <input type="text" id="credit-card" className="hidden" />
              <label htmlFor="credit-card"
                className="flex items-center gap-3 text-base-text text-xs p-4 bg-base-button rounded-md w-44 cursor-pointer hover:bg-base-hover"
              >
                <CreditCard color="#8047F8" />
                CARTÃO DE CRÉDITO
              </label>

              <input type="text" id="debit-card" className="hidden" />
              <label htmlFor="debit-card"
                className="flex items-center gap-3 text-base-text text-xs p-4 bg-base-button rounded-md w-44 cursor-pointer hover:bg-base-hover"
              >
                <Bank color="#8047F8" />
                CARTÃO DE DÉBITO
              </label>

              <input type="text" id="cash" className="hidden" />
              <label htmlFor="cash"
                className="flex items-center gap-3 text-base-text text-xs p-4 bg-base-button rounded-md w-44 cursor-pointer hover:bg-base-hover"
              >
                <Money color="#8047F8" />
                DINHEIRO
              </label>
            </div>

          </div>
        </div>
        <div className="col-span-2">
          <strong>Cafés selecionados</strong>
          <div className="mt-4 flex flex-col p-10 pt-4 bg-base-card rounded-md rounded-tr-[44px] rounded-bl-[44px]">

            <div className=" flex items-center pb-6 pt-6 border-b-1 border-base-button">
              <Image width={64} height={64} src={expressoTradicional} alt="" />
              <div className="ml-5 mr-10">
                <span>Expresso Tradicional</span>
                <div className="flex gap-2 mt-2">
                  <div className='bg-base-button rounded-md p-2 flex items-center w-fit'>
                    <button type='button'>{<Minus color='#8047F8' />}</button>
                    <span className='text-base-title px-1'>1</span>
                    <button type='button'>{<Plus color='#8047F8' />}</button>
                  </div>
                  <div className="flex items-center p-2 rounded-md gap-2 bg-base-button cursor-pointer hover:bg-base-hover">
                    <Trash color='#8047F8' />
                    <span className="text-xs text-base-text">
                      REMOVER
                    </span>
                  </div>
                </div>
              </div>
              <strong className="font-bold text-base-text mb-auto">R$ 9,90</strong>
            </div>

            <div className=" flex items-center pb-6 pt-6 border-b-1 border-base-button">
              <Image width={64} height={64} src={expressoTradicional} alt="" />
              <div className="ml-5 mr-10">
                <span>Expresso Tradicional</span>
                <div className="flex gap-2 mt-2">
                  <div className='bg-base-button rounded-md p-2 flex items-center w-fit'>
                    <button type='button'>{<Minus color='#8047F8' />}</button>
                    <span className='text-base-title px-1'>1</span>
                    <button type='button'>{<Plus color='#8047F8' />}</button>
                  </div>
                  <div className="flex items-center p-2 rounded-md gap-2 bg-base-button cursor-pointer hover:bg-base-hover">
                    <Trash color='#8047F8' />
                    <span className="text-xs text-base-text">
                      REMOVER
                    </span>
                  </div>
                </div>
              </div>
              <strong className="font-bold text-base-text mb-auto">R$ 9,90</strong>
            </div>

            <div className="mt-6 gap-3">
              <div className="flex justify-between">
                <span className="text-sm text-base-text">Total de itens</span>
                <span className="text-base-text">R$ 29,70</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-base-text">Entrega</span>
                <span className="text-base-text">R$ 3,50</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-base-subtitle text-xl">Total</strong>
                <strong className="text-base-subtitle text-xl">R$ 33,20</strong>
              </div>
            </div>

            <button type="submit"
              className="mt-6 w-[100%] py-3 bg-yellow rounded-md font-bold text-white hover:bg-yellow-dark"
            >
              CONFIRMAR PEDIDO
            </button>

          </div>
        </div>

      </form >

    </div >
  )
}