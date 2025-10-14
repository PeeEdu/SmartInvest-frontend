"use client";

import SmallIcon from "@/presentation/components/global/SmallIcon";
import HomeBanner from "@/presentation/components/Home/HomeBanner";
import { TrendingUp, Target, Shield, Search } from "lucide-react";
import HomeDescription from "@/presentation/components/Home/HomeDescription";
import HomeBigButton from "@/presentation/components/Home/HomeBigButton";
import WhiteSquare from "@/presentation/components/global/WhiteSquare";
import InformativeBanner from "@/presentation/components/Home/InformativeBanner";
import { useModal } from "@/presentation/hooks/useModal";
import Modal from "@/presentation/components/global/Modal";


export default function Home() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <SmallIcon icon={<TrendingUp />} text="Simulador de Investimentos" />
      <HomeBanner text="Simule seus investimentos" />
      <HomeDescription text="Descubra o potencial dos seus investimentos com simulações precisas e personalizadas para seu perfil" />
      <div className="flex justify-around items-center max-w-[950px] mx-auto">
        <HomeBigButton
          text="Começar Simulação Gratuita"
          icon={<Target className="w-7 h-7" style={{ color: "#FFFFFF" }}/>}
          href="/perfil-investidor"
          className="bg-[#0D3B68] text-white"
        />
        <HomeBigButton
          text="Buscar por protocolo"
          icon={<Search className="w-7 h-7" style={{ color: "#0D3B68" }} />}
          onClick={() => openModal()}
          className="bg-[#FFFFFF] text-[#0D3B68]"
        />
      </div>
      <WhiteSquare className="flex items-center mt-10 max-w-[950px] mx-auto mb-10">
        <InformativeBanner icon={<TrendingUp className="w-8 h-8" style={{ color: "#0D3B68" }} />} text="Simulações Precisas" subtext={"Algoritmos avançados para projeções realistas"} bgColor={"bg-[#E3E8EC]"} />
        <InformativeBanner icon={<Shield className="w-8 h-8" style={{ color: "#16A249" }} />} text="100% Seguro" subtext={"Seus dados são protegidos e nunca compartilhados"} bgColor={"bg-[#E4F2E9]"} />
        <InformativeBanner icon={<Target className="w-8 h-8" style={{ color: "#1DA0E2" }} />} text="Personalizado" subtext={"Adaptado ao seu perfil e objetivos financeiros"} bgColor={"bg-[#E5F2F9]"} />
      </WhiteSquare>
      {isOpen && <Modal isOpen={isOpen} closeModal={closeModal} title="Buscar Investimento"/>}
    </>
  );
}
