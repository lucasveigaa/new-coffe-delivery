import Image from "next/image";
import { Header } from "../components/Header";

import iconCashYellowDark from '../assets/icon-cash-full-yellow-dark.svg';
import iconMapPinPurple from '../assets/icon-map-pin-full-purple.svg';
import iconTimerFullYellow from '../assets/icon-timer-full-yellow.svg';
import illustrationPageSuccess from '../assets/illustration-page-success.svg';

export default function Success() {
  return (
    <div className='max-w-[1170px] mx-auto'>
      <Header />

      <div className="flex gap-24 mt-20">
        <div>
          <h1 className="font-baloo2 font-extrabold text-[32px] text-yellow-dark">
            Uhu! Pedido confirmado
          </h1>
          <span className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </span>
          <div className="text-base-text mt-10 p-10 rounded-md rounded-tr-[36px] rounded-bl-[36px] border-2 border-bg-border-gradient">
            <div className="flex gap-3">
              <Image alt="" src={iconMapPinPurple} />
              <div className="flex flex-col">
                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <Image alt="" src={iconTimerFullYellow} />
              <div className="flex flex-col">
                <span>Previsão de entrega</span>
                <strong>20min - 30min</strong>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <Image alt="" src={iconCashYellowDark} />
              <div className="flex flex-col">
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Image src={illustrationPageSuccess} alt="" />
        </div>
      </div>
    </div>
  )
}