'use client'


import dicas from "@/mocks/tipToInvestor";
import { useInvestor } from "@/presentation/hooks/context/investorContext";

export default function InvestorTip() {
    const { selected } = useInvestor();
    const dica = dicas.find((d) => d.type === selected);
    if (!dica) return null;

    return (
        <div
            className={`p-6 rounded-lg border-[2px] ${dica.bgColor} ${dica.boderColor}`}
        >
            <h3 className="text-[#0D3B68] font-semibold text-[14px]">
                💡 {dica.tip}
            </h3>
        </div>
    );
}
