import { Shield, TrendingUp, Zap } from "lucide-react";

const typeOfInvestor = [
  {
    title: "Conservador",
    value: "CONSERVADOR",
    description: "Priorizo segurança e estabilidade nos investimentos",
    icon: <Shield color="#16A249" size={20} />,
    bgColor: "bg-[#16a2491a]",
  },
  {
    title: "Moderado",
    value: "MODERADO",
    description: "Busco equilíbrio entre segurança e rentabilidade",
    icon: <TrendingUp color="#1DA0E2" size={20} />,
    bgColor: "bg-[#1DA0E21a]",
  },
  {
    title: "Agressivo",
    value: "AGRESSIVO",
    description: "Aceito mais riscos em busca de maiores retornos",
    icon: <Zap color="#7F3FBF" size={20} />,
    bgColor: "bg-[#7F3FBF1a]",
  },
];

export default typeOfInvestor;
