"use client";
import proodutosFixos from "@/mocks/produtos";
import { useState } from "react";

export default function SimulationForm({ items }) {
    const [selected, setSelected] = useState("");
    const [valorInvestimento, setValorInvestimento] = useState("");
    const rendaFixa = proodutosFixos;

    // Se for EXPERIENTE, mostra mensagem e não renderiza o form
    if (selected === "EXPERIENTE") {
        return (
            <div className="text-center text-[#0d3b68ea] font-semibold mt-6">
                Em breve mais opções para você!
            </div>
        );
    }

    const formatCurrency = (value) => {
        if (!value) return "";

        let cleanValue = value.replace(/\D/g, "");
        cleanValue = (parseInt(cleanValue, 10) / 100).toFixed(2);
        const [integer, decimal] = cleanValue.split(".");
        const integerFormatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `${integerFormatted},${decimal}`;
    };

    const handleValorChange = (e) => {
        const rawValue = e.target.value;
        if (/^[0-9.,]*$/.test(rawValue)) {
            setValorInvestimento(formatCurrency(rawValue));
        }
    };

    return (
        <div>
            <div className="flex gap-4">
                {items
                    .filter(item => item.value === "RENDA_FIXA" || item.value === "RENDA_VARIAVEL")
                    .map((item) => (
                        <label
                            key={item.value}
                            className={`flex w-1/2 rounded-lg p-4 cursor-pointer transition-all duration-200 border-2
                            ${selected === item.value
                                    ? item.value === "RENDA_FIXA"
                                        ? "bg-[#16a2491a] border-[#19A44C]"
                                        : "bg-[#0d3b680d] border-[#0d3b68]"
                                    : "bg-white border border-gray-200 hover:bg-gray-50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="typeOfInvestment"
                                    value={item.value}
                                    checked={selected === item.value}
                                    onChange={() => setSelected(item.value)}
                                    className="w-3 h-3 accent-[#0d3b68]"
                                />

                                <div className={`p-2 rounded-full ${item.bgColor}`}>
                                    {item.icon && item.icon}
                                </div>

                                <h3 className="text-[#0D3B68] font-semibold text-[14px]">
                                    {item.title}
                                </h3>
                            </div>
                        </label>
                    ))}
            </div>

            <form className="space-y-4 mt-4">
                {selected === "RENDA_FIXA" && (
                    <div>
                        <div id="select-amount" className="w-full mb-6 gap-2 flex flex-col">
                            <label
                                htmlFor="amount"
                                className="block text-sm font-bold text-[#0d3b68]"
                            >
                                Produto de Investimento
                            </label>
                            <div>
                                <select
                                    id="amount"
                                    name="amount"
                                    className="mt-1 block w-full rounded-md bg-gray-100 py-3 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d3b68] focus:border-[#0d3b68] sm:text-sm placeholder:text-[#5F799F]"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Selecione um produto
                                    </option>
                                    {rendaFixa.map((produto) => (
                                        <option key={produto.id} value={produto.value}>
                                            {produto.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className="mb-6 gap-2 flex flex-col">
                            <label
                                htmlFor="valorInvestimento"
                                className="block text-sm font-bold text-[#0d3b68]"
                            >
                                Valor a investir (R$)
                            </label>
                            <input
                                type="text"
                                id="valorInvestimento"
                                name="valorInvestimento"
                                value={valorInvestimento}
                                onChange={handleValorChange}
                                placeholder="R$ 0,00"
                                className="mt-1 block w-full rounded-md bg-gray-100 py-3 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d3b68] focus:border-[#0d3b68] sm:text-sm placeholder:text-[#5F799F]"
                            />
                        </div>

                        <div className="mb-6 gap-2 flex flex-col">
                            <label
                                htmlFor="periodo"
                                className="block text-sm font-bold text-[#0d3b68]"
                            >
                                Período (meses)
                            </label>
                            <input
                                type="number"
                                id="periodo"
                                name="periodo"
                                placeholder="Digite o período"
                                className="mt-1 block w-full rounded-md bg-gray-100 py-3 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d3b68] focus:border-[#0d3b68] sm:text-sm placeholder:text-[#5F799F]"
                            />
                        </div>
                    </div>
                )}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full 
                        max-w-[365px] 
                        bg-primary 
                        text-[#0D3B68] 
                        border-[1px] 
                        border-[#e5e7eb] 
                        px-6 
                        py-3 
                        rounded-xl 
                        text-[14px] 
                        font-semibold 
                        hover:bg-[#0b2e54] 
                        hover:text-white 
                        transition 
                        duration-300 
                        ease-in-out 
                        cursor-pointer
                        mt-6
                        "
                        
                    >
                        {selected === "RENDA_FIXA" ? "Simular Investimento" : "Visualizar Histórico de Investimentos"}
                    </button>
                </div>
            </form>
        </div>
    );
}
