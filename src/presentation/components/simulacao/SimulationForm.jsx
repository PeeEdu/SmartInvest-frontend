"use client";

import { useRedirect } from "@/presentation/hooks/useRedirect";
import { getRendasFixas } from "@/service/getForms";
import { postForm } from "@/service/postForm";
import formatCurrency from "@/utils/formatString";
import { useEffect, useState } from "react";
import Select from "react-select";
import '@/style/loader.css'

export default function SimulationForm({ items }) {
    const [selected, setSelected] = useState("");
    const { redirectTo } = useRedirect();
    const [loading, setLoading] = useState(true); // 🔹 loader inicial
    const [selectOptions, setSelectOptions] = useState([]);
    const [formData, setFormData] = useState({
        tipoUsuario: localStorage.getItem("selectedInvestor") !== "EXPERIENTE" ? "INICIANTE" : "EXPERIENTE",
        tipoPerfil: localStorage.getItem("selectedInvestor"),
        tipoInvestimento: "",
        idRendaFixa: "",
        valorInvestimento: "",
        periodo: ""
    });

    // 🔹 Busca de produtos de renda fixa
    useEffect(() => {
        async function fetchData() {
            try {
                const rendaFixa = await getRendasFixas().then(res => res.data).catch(() => []);
                setSelectOptions(rendaFixa);
            } catch (err) {
                console.error("Erro ao buscar rendas fixas:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.tipoInvestimento) {
            alert("Selecione o tipo de investimento");
            return;
        }

        if (formData.tipoInvestimento === "RENDA_FIXA" && !formData.idRendaFixa) {
            alert("Selecione um produto de investimento");
            return;
        }

        // 🔹 Loader ativado enquanto espera resposta do backend
        setLoading(true);
        try {
            if (selected === "RENDA_FIXA") {
                const response = await postForm(formData);
                redirectTo(`/simulacao/${response.data.protocolo}`);
            } else {
                redirectTo(`/historico-renda-variavel`);
            }
        } catch (err) {
            console.error("Erro ao enviar formulário:", err);
            setLoading(false);
        }
    };

    const handleValorChange = (e) => {
        const rawValue = e.target.value;
        if (/^[0-9.,]*$/.test(rawValue)) {
            setFormData({ ...formData, valorInvestimento: formatCurrency(rawValue) });
        }
    };

    const handlePeriodoChange = (e) => {
        setFormData({ ...formData, periodo: e.target.value });
    };

    const options = Array.isArray(selectOptions)
        ? selectOptions.map(option => ({
            value: option.id,
            label: option.nome,
            taxaMensal: option.taxaMensal
        }))
        : [];

    const selectedOption = options.find(opt => opt.value === formData.idRendaFixa) || null;

    if (loading) {
        return (
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div>
            {/* Tipo de investimento */}
            <div className="flex gap-4">
                {items.filter(item => item.value === "RENDA_FIXA" || item.value === "RENDA_VARIAVEL")
                    .map(item => (
                        <label key={item.value} className={`flex w-1/2 rounded-lg p-4 cursor-pointer transition-all duration-200 border-2
                            ${selected === item.value
                                ? item.value === "RENDA_FIXA"
                                    ? "bg-[#16a2491a] border-[#19A44C]"
                                    : "bg-[#0d3b680d] border-[#0d3b68]"
                                : "bg-white border border-gray-200 hover:bg-gray-50"
                            }`}>
                            <div className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="typeOfInvestment"
                                    value={item.value}
                                    checked={selected === item.value}
                                    onChange={() => {
                                        setSelected(item.value);
                                        setFormData({ ...formData, tipoInvestimento: item.value });
                                    }}
                                    className="w-3 h-3 accent-[#0d3b68]"
                                />
                                <div className={`p-2 rounded-full ${item.bgColor}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-[#0D3B68] font-semibold text-[14px]">{item.title}</h3>
                            </div>
                        </label>
                    ))}
            </div>

            {/* Formulário */}
            <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                {selected === "RENDA_FIXA" && (
                    <div>
                        {/* Select produto */}
                        <div className="w-full mb-6 gap-2 flex flex-col">
                            <label htmlFor="produto" className="block text-sm font-bold text-[#0d3b68]">Produto de Investimento</label>
                            <Select
                                id="produto"
                                options={options}
                                value={selectedOption}
                                onChange={(option) => setFormData({ ...formData, idRendaFixa: option.value })}
                                placeholder="Selecione um produto"
                                formatOptionLabel={(option, { context }) =>
                                    context === "menu" ? (
                                        <div className="flex flex-col">
                                            <span className="text-[#0d3b68] font-medium">{option.label}</span>
                                            <span className="text-sm text-[#5f799f]">Retorno mensal: {option.taxaMensal.toFixed(2)}%</span>
                                        </div>
                                    ) : option.label
                                }
                                styles={{
                                    control: (base) => ({ ...base, borderRadius: 12, borderColor: "#0d3b68", minHeight: "48px" }),
                                    option: (base, state) => ({ ...base, backgroundColor: state.isSelected ? "#0d3b68" : "#fff", color: state.isSelected ? "#fff" : "#0d3b68", padding: "12px 16px", fontSize: "14px" })
                                }}
                            />
                        </div>

                        {/* Valor a investir */}
                        <div className="mb-6 gap-2 flex flex-col">
                            <label htmlFor="valorInvestimento" className="block text-sm font-bold text-[#0d3b68]">Valor a investir (R$)</label>
                            <input
                                type="text"
                                id="valorInvestimento"
                                value={formData.valorInvestimento}
                                onChange={handleValorChange}
                                placeholder="R$ 0,00"
                                className="mt-1 block w-full rounded-md bg-gray-100 py-3 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d3b68] focus:border-[#0d3b68] sm:text-sm placeholder:text-[#5F799F]"
                            />
                        </div>

                        {/* Período */}
                        <div className="mb-6 gap-2 flex flex-col">
                            <label htmlFor="periodo" className="block text-sm font-bold text-[#0d3b68]">Período (meses)</label>
                            <input
                                type="number"
                                id="periodo"
                                value={formData.periodo}
                                onChange={handlePeriodoChange}
                                placeholder="Digite o período"
                                className="mt-1 block w-full rounded-md bg-gray-100 py-3 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d3b68] focus:border-[#0d3b68] sm:text-sm placeholder:text-[#5F799F]"
                            />
                        </div>
                    </div>
                )}

                {/* Botão */}
                <div className="flex justify-center">
                    {selected && (
                        <button
                            type="submit"
                            className="w-full max-w-[365px] bg-primary text-[#0D3B68] border-[1px] border-[#e5e7eb] px-6 py-3 rounded-xl text-[14px] font-semibold hover:bg-[#0b2e54] hover:text-white transition duration-300 ease-in-out cursor-pointer mt-6"
                        >
                            {selected === "RENDA_FIXA" ? "Simular Investimento" : "Visualizar Histórico de Investimentos"}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
