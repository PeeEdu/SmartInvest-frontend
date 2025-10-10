import typeOfInvestment from "@/mocks/typeOfInvestment";
import GraySquare from "@/presentation/components/global/GraySquare";
import WhiteSquare from "@/presentation/components/global/WhiteSquare";
import InvestorTip from "@/presentation/components/simulacao/InvestorTip";
import SimulationForm from "@/presentation/components/simulacao/SimulationForm";


const Simulacao = () => {
  return (
    <div className="max-w-[700px] mx-auto px-4 py-6">
      <p className="font-bold text-center text-4xl mb-4">Configure sua simulação</p>
      <p className="text-center text-[18px] text-[#5F799F] max-w-2xl mx-auto mb-8">Preencha os dados para simular seus investimentos</p>
      <GraySquare className={"mb-6"}>
        <p className="font-semibold text-[#0D3B68] ">Entenda os tipos de investimento</p>
        <p className="mb-4 text-[14px] text-[#5F799F]">Escolha entre Renda Fixa e Renda Variável com base no seu perfil e objetivos financeiros</p>

        <p className="mb-4 text-[14px] text-[#5F799F]">
          <span className="font-semibold text-[#16a249]">Renda Fixa:</span>  Investimentos com rentabilidade previsível e menor risco. Ideal para quem busca
          segurança e estabilidade. Exemplos: CDB, Tesouro Direto, LCI/LCA.
        </p>
        <p className="mb-1 text-[14px] text-[#5F799F]">
          <span className="font-semibold text-[#0D3B68]">Renda Variável:</span> Investimentos com potencial de maior retorno, mas com oscilações e maior risco.
          Ideal para quem aceita volatilidade em busca de ganhos maiores. Exemplos: Ações, Fundos
          Imobiliários.
        </p>
      </GraySquare>
      <InvestorTip />
      <WhiteSquare>
        <p className="font-semibold text-[#0d3b68ea] mb-4">
          Tipo de Investimento
        </p>
        <SimulationForm items={typeOfInvestment} />
      </ WhiteSquare >
    </div>
  );
};

export default Simulacao;
