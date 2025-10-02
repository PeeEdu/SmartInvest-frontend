import WhiteSquare from "@/presentation/components/global/WhiteSquare";
import InformativeBanner from "@/presentation/components/Home/InformativeBanner";
import { BarChart3, BookOpen } from "lucide-react";

export default function PerfilInvestidor() {
  return (
    <div className="py-20">
        <p className="font-bold text-center text-4xl mb-4">Qual é o seu perfil de investidor?</p>
        <p className="text-center text-[18px] text-[#5F799F] max-w-2xl mx-auto">Escolha a opção que melhor descreve sua experiência para personalizarmos sua simulação</p>
        <div className="flex justify-between max-w-5xl gap-5 mx-auto mt-10">
            <WhiteSquare className={"w-1/2"}>
                 <InformativeBanner icon={ <BookOpen className="w-8 h-8" style={{ color: "#16A249" }}/>} text="100% Seguro" subtext={"Seus dados são protegidos e nunca compartilhados"} bgColor={"bg-[#E4F2E9]"}/>
            </WhiteSquare>
            <WhiteSquare className={"w-1/2"}>
                <InformativeBanner icon={<BarChart3 className="w-8 h-8" style={{ color: "#1DA0E2" }} />} text="Personalizado" subtext={"Adaptado ao seu perfil e objetivos financeiros"} bgColor={"bg-[#E5F2F9]"}/>
            </WhiteSquare>
        </div>
    </div>
  );
}