import Image from "next/image";
import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from 'phosphor-react';
import { Input } from "../components/Input";


import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from "react";
import expressoTradicional from '../assets/01-expresso-tradicional.svg';
import { Header } from "../components/Header";
import { CheckoutType } from "../types";

const schema = yup.object({
  bairro: yup.string().required('Preencha o campo bairro'),
  CEP: yup.string().min(8, 'CEP deve ter 8 caracteres').max(8, 'CEP deve ter 8 caracteres').required('Preencha o campo CEP'),
  cidade: yup.string().required('Preencha o campo cidade'),
  complemento: yup.string(),
  numero: yup.string().required('Preencha o campo número'),
  rua: yup.string().required('Preencha o campo rua'),
  UF: yup.string().min(2, 'UF deve ter 2 caracteres').max(2, 'UF deve ter 2 caracteres').required('Preencha o campo UF'),
  paymentMethod: yup.string().required()
})

interface CheckoutProps {
  setDataCheckout: Dispatch<SetStateAction<CheckoutType>>;
}


export default function Checkout({ setDataCheckout }: CheckoutProps) {

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    setDataCheckout(data)
    router.push('/success')
  }

  return (
    <div className='px-3 lg:px-0 max-w-[1170px] mx-auto'>
      <Header />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:grid lg:grid-cols-5 gap-8">
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
                <Input register={register} registerName="CEP" type='number' placeholder="CEP" />
              </div>
              <p>{typeof (errors.CEP?.message) === 'string' && errors.CEP?.message}</p>

              <Input register={register} registerName="rua" type='text' placeholder="Rua" />
              <p>{typeof (errors.rua?.message) === 'string' && errors.rua?.message}</p>
              <div className="grid grid-cols-3 gap-3">
                <Input register={register} registerName="numero" type='number' placeholder="Número" />
                <div className="col-span-2 relative">
                  <Input register={register} registerName="complemento" type='text' placeholder="Complemento" />
                  <span className="absolute text-xs text-base-label italic ml-[-65px] mt-[18px]">Opcional</span>
                </div>
              </div>
              <p>{typeof (errors.numero?.message) === 'string' && errors.numero?.message}</p>
              <div className="grid grid-cols-10 md:grid-cols-9 gap-3">
                <div className="col-span-3">
                  <Input register={register} registerName="bairro" type='text' placeholder="Bairro" />
                </div>
                <div className="col-span-5">
                  <Input register={register} registerName="cidade" type='text' placeholder="Cidade" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <Input register={register} registerName="UF" type='text' placeholder="UF" />
                </div>
              </div>
              <div className="flex gap-3">
                <p>{typeof (errors.bairro?.message) === 'string' && errors.bairro?.message}</p>
                <p>{typeof (errors.cidade?.message) === 'string' && errors.cidade?.message}</p>
                <p>{typeof (errors.UF?.message) === 'string' && errors.UF?.message}</p>
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

            <div className="flex flex-col items-center md:flex-row gap-3 mt-8">
              <div>
                <input {...register('paymentMethod')} value="credit-card" name="paymentMethod" type="radio" id="credit-card" className="hidden peer" />
                <label htmlFor="credit-card"
                  className="flex items-center gap-3 text-base-text text-xs p-4 bg-base-button rounded-md w-44 cursor-pointer hover:bg-base-hover peer-checked:border-1 peer-checked:border-purple"
                >
                  <CreditCard color="#8047F8" />
                  CARTÃO DE CRÉDITO
                </label>
              </div>

              <div>
                <input {...register('paymentMethod')} value="debit-card" name="paymentMethod" type="radio" id="debit-card" className="hidden peer" />
                <label htmlFor="debit-card"
                  className="flex items-center gap-3 text-base-text text-xs p-4 bg-base-button rounded-md w-44 cursor-pointer hover:bg-base-hover peer-checked:border-1 peer-checked:border-purple"
                >
                  <Bank color="#8047F8" />
                  CARTÃO DE DÉBITO
                </label>
              </div>

              <div>
                <input {...register('paymentMethod')} value="cash" name="paymentMethod" type="radio" id="cash" className="hidden peer" />
                <label htmlFor="cash"
                  className="flex items-center gap-3 text-base-text text-xs p-4 bg-base-button rounded-md w-44 cursor-pointer hover:bg-base-hover peer-checked:border-1 peer-checked:border-purple"
                >
                  <Money color="#8047F8" />
                  DINHEIRO
                </label>
              </div>
            </div>
            <p>{typeof (errors.paymentMethod?.message) === 'string' && 'Selecione uma forma de pagamento'}</p>

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