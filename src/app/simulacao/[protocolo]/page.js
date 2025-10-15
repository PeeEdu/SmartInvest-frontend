"use client";

import Graphics from "@/presentation/components/global/Graphics";
import GreenSquare from "@/presentation/components/global/GreenSquare";
import WhiteSquare from "@/presentation/components/global/WhiteSquare";
import ReturnProjection from "@/presentation/components/simulacao/ReturnProjection";
import SimulationInfo from "@/presentation/components/simulacao/SimulationInfo";
import { getByProtocol, getRendasFixas } from "@/service/getForms";
import { formatNewCurrency } from "@/utils/formatString";
import { Calendar, DollarSign, Target } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/style/loader.css";
import ProtocoloBox from "@/presentation/components/protocol/protocolbox";

export default function ShowSimulation() {
    const [simulation, setSimulation] = useState(null);
    const [product, setProduct] = useState(null);
    const [profit, setProfit] = useState(null);
    const [rentability, setRentability] = useState(null);
    const [rendasFixas, setRendasFixas] = useState([]);
    const [loading, setLoading] = useState(true); // 🔹 loader
    const params = useParams();

    useEffect(() => {
        async function fetchResults() {
            try {
                const response = await getByProtocol(params.protocolo);
                const data = response.data;
                setSimulation(data);
                setProduct(data.rendaFixa);
                setProfit(data.valorFinal - data.valorInicial);
                setRentability((data.valorFinal - data.valorInicial) / data.valorInicial * 100);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchResults();
    }, [params.protocolo]);

    useEffect(() => {
        async function getAllRendasFixas() {
            try {
                const response = await getRendasFixas().then(res => res.data).catch(() => []);
                setRendasFixas(response);
            } catch (e) {
                console.error(e);
            }
        }

        getAllRendasFixas();
    }, [simulation]);

    if (loading || !simulation || !product) {
        return (
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-[1152px] mx-auto">


                <ProtocoloBox protocolo={params.protocolo} />

                <h1 className="font-bold text-center text-4xl mb-4">Resultado da Simulação</h1>
                <h2 className="text-center text-[18px] text-[#5F799F] max-w-2xl mx-auto mb-8">
                    Investidor {simulation.tipoUsuario
                        ? simulation.tipoUsuario.charAt(0).toUpperCase() +
                        simulation.tipoUsuario.slice(1).toLowerCase()
                        : ""}
                </h2>
                {product && (
                    <>
                        <WhiteSquare>
                            <p className="font-semibold text-[#0d3b68ea] text-xl mb-4">
                                Investimento Selecionado: {product.nome
                                    ? product.nome.charAt(0).toUpperCase() +
                                    product.nome.slice(1).toLowerCase()
                                    : ""}
                            </p>
                            <div className="flex flex-row gap-4 justify-between">
                                <SimulationInfo
                                    header={"Tipo"}
                                    info={simulation.tipoInvestimento === "FIXA" ? "Renda Fixa" : "Renda Variável"}
                                    icon={<Target />}
                                />
                                <SimulationInfo
                                    header={"Valor Inicial"}
                                    info={`R$ ${formatNewCurrency(simulation.valorInicial)}`}
                                    icon={<DollarSign style={{ color: "#16A249" }} />}
                                    bgColor={"bg-[#E7F5EC]"}
                                />
                                <SimulationInfo
                                    header={"Período"}
                                    info={`${simulation.prazoMeses > 1 ? `${simulation.prazoMeses} meses` : `${simulation.prazoMeses} mes`} `}
                                    icon={<Calendar style={{ color: "#1DA0E2" }} />}
                                    bgColor={"bg-[#E8F5FC]"}
                                />
                                <SimulationInfo
                                    header={"Taxa"}
                                    info={product.taxaMensal ? `${product.taxaMensal}% a.m` : ""}
                                    icon={null}
                                />
                            </div>
                        </WhiteSquare>
                        <GreenSquare className="mt-6">
                            <p className="font-semibold text-[#0d3b68ea] text-xl mb-4">
                                Projeção de Retorno - {product.nome
                                    ? product.nome.charAt(0).toUpperCase() +
                                    product.nome.slice(1).toLowerCase()
                                    : ""}
                            </p>

                            <div className="flex justify-between">
                                <ReturnProjection header={"Valor Final"} info={`R$ ${formatNewCurrency(simulation.valorFinal)}`} />
                                <ReturnProjection header={"Lucro"} info={`R$ ${formatNewCurrency(profit)}`} fontColor={"text-[#16A249]"} />
                                <ReturnProjection header={"Rentabilidade"} info={`${rentability.toFixed(2)}% a.a`} fontColor={"text-[#1da0e2]"} />
                            </div>
                        </GreenSquare>
                        <WhiteSquare className="mt-6">
                            <p className="font-semibold text-[#0d3b68ea] text-xl mb-4">
                                Comparação com Outros Produtos de Renda Fixa
                            </p>
                            <Graphics initialAmount={simulation.valorInicial} items={rendasFixas} month={simulation.prazoMeses} />
                        </WhiteSquare>
                    </>
                )}
            </div>
        </div>
    );
}
