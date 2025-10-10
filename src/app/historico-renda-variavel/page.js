"use client";

import WhiteSquare from "@/presentation/components/global/WhiteSquare";
import LineChartGraphic from "@/presentation/components/historico-renda-variavel/LineChartGraphic";
import { getHistoricoRendaVariavel } from "@/service/getForms";
import { useEffect, useState } from "react";
import lodaer from '../../../public/assets/lodaer.gif'
import "@/style/loader.css"
import Link from "next/link";


function transformData(data) {
    const groupedData = {};
    data.forEach(item => {
        const [year, month] = item.dataAtualizacao.split(" ")[0].split("-");
        const key = `${year}-${month}`;
        if (!groupedData[key]) {
            groupedData[key] = {};
        }
        groupedData[key][item.nomeAcao] = item.preco;
    });

    // Converte o objeto agrupado em um array ordenado por data
    const sortedKeys = Object.keys(groupedData).sort((a, b) => new Date(a) - new Date(b));
    const formattedData = sortedKeys.map(key => ({
        week: key,
        ...groupedData[key]
    }));

    return formattedData;
}

export default function HistoricoRendaVariavel() {
    const [dadosGrafico, setDadosGrafico] = useState([]);

    useEffect(() => {
        async function fetchHistorico() {
            try {
                const response = await getHistoricoRendaVariavel();
                if (!response || response.length === 0) return;

                const formattedData = transformData(response);
                setDadosGrafico(formattedData);
            } catch (error) {
                console.error("Erro ao buscar histórico:", error);
            }
        }

        fetchHistorico();
    }, []);

    return (
        <div className="max-w-[1152px] mx-auto py-10">
            {dadosGrafico.length > 0 ? (
                <>
                    <p className="font-bold text-center text-4xl mb-8"> Histórico de Renda Variável </p>
                    <WhiteSquare className={"mb-5 max-w-[768px] mx-auto"}>
                        <p className="mb-4 text-[14px] text-[#5F799F]">
                            Conheça as opções de renda variável disponíveis para visualização. Estas modalidades de investimento oferecem oportunidades de rentabilidade diversificadas, com diferentes níveis de risco e volatilidade.
                        </p>
                        <p className=" text-[14px] text-[#5F799F]">
                            Para ter acesso integral a estas e outras opções de investimento, além de contar com assessoria especializada, torne-se correntista do Agi e potencialize seus investimentos. <Link href="/"><span className="underline text-[#0d3b68]">Clique aqui para saber mais</span></Link>
                        </p>
                    </WhiteSquare>
                    <WhiteSquare className={"pb-10"}>
                        <p className="font-semibold text-[#0d3b68ea] text-xl mb-8 mt-5">
                            Comparação Mensal - Todas as Rendas Variáveis
                        </p>
                        <LineChartGraphic data={dadosGrafico} />
                    </WhiteSquare>
                </>
            ) : (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    );
}