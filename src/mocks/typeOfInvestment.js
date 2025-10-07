import { TrendingDown, TrendingUp } from "lucide-react";

const typeOfInvestment = [
    {
        value: "RENDA_FIXA",
        title: "Renda Fixa", 
        icon: <TrendingUp color="#16A249" size={20} />,
        bgColor: "bg-[#16a2491a]"
    },
    {
        value: "RENDA_VARIAVEL",
        title: "Renda Variável",
        icon: <TrendingDown color="#0E3B68" size={20} />,
        bgColor: "bg-[#0e3b681a]"
    }
]

export default typeOfInvestment;