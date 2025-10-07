import typeOfInvestor from "@/mocks/typeOfInvestor";
import TypeOfInvestor from "../perfil-investidor/TypeOfInvestor";
import { useRedirect } from "@/presentation/hooks/useRedirect";

export default function Modal({ isOpen, closeModal, title }) {
    const {redirectTo} = useRedirect();
    if (!isOpen) return null;

    return (
        <div
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50 "
        >
            <div className="relative p-4 w-full max-w-[490px] mx-auto max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm">
                    <div className="pt-8 px-8 rounded-t">
                        <h3 className="text-[24px] font-semibold text-[#0D3B68]">
                            {title}
                        </h3>
                        <p className=" text-[14px] text-[#0d3b68] font-light mt-2">Escolha a opção que melhor representa sua estratégia de investimento</p>
                    </div>
                    <div className="px-8 mt-4">
                        <TypeOfInvestor items={typeOfInvestor} />
                    </div>
                    <div className="flex justify-end items-center p-4 md:p-5 rounded-b mt-2">
                        <button
                            onClick={closeModal}
                            className="cursor-pointer mr-4 bg-[#E2E7EB] px-4 py-2 rounded-lg hover:bg-[#cfd6db] transition duration-300 ease-in-out text-[14px] font-medium">
                            Fechar
                        </button>
                        <button onClick={() => redirectTo("/simulacao")}
                            className="bg-[#0D3B68] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0b2e54] transition duration-300 ease-in-out text-[14px] font-medium">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
