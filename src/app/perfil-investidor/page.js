import Button from "@/presentation/components/global/Button";
import ListUl from "@/presentation/components/global/List-ul";
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
                 <InformativeBanner icon={ <BookOpen className="w-8 h-8" style={{ color: "#16A249" }}/>} text="Iniciante" subtext={"Estou começando agora e quero aprender sobre investimentos de forma segura"} bgColor={"bg-[#E4F2E9]"}/>
                 <ListUl items={[
                    "Simulações educativas",
                    "Dicas e orientações",
                    "Estratégias conservadoras"
                 ]} coloredList={"text-[#16A249]"}/> 
                 <Button text="Sou iniciante" href="/simulacao" />
            </WhiteSquare>
            <WhiteSquare className={"w-1/2"}>
                <InformativeBanner icon={<BarChart3 className="w-8 h-8" style={{ color: "#1DA0E2" }} />} text="Experiente" subtext={"Já invisto há um tempo e quero otimizar minha carteira com análises avançadas"} bgColor={"bg-[#E5F2F9]"}/>
                <ListUl items={[
                    "Análises avançadas",
                    "Estratégias diversificadas",
                    "Comparativo de carteiras"
                 ]} coloredList={"text-[#1DA0E2]"}/> 
                 <Button text="Sou experiente" href="/simulacao" />
            </WhiteSquare>
        </div>
    </div>
  );
}