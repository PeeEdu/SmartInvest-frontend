"use client";

import { useRedirect } from "@/presentation/hooks/useRedirect";
import { Search } from "lucide-react";
import { InputText } from 'primereact/inputtext';
import { useState } from "react";

export default function Modal({ isOpen, closeModal, title }) {
    const [value, setValue] = useState('');
    const { redirectTo } = useRedirect();
    if (!isOpen) return null;

    const handleSearch = () => {
        if (value === '') return (
            alert('Digite o número do protocolo da sua simulação para visualizar os detalhes.')
        );

        redirectTo("/simulacao/" + value);
    }

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
                        <p className=" text-[14px] text-[#0d3b68] font-light mt-2">Digite o número do protocolo da sua simulação para visualizar os detalhes.</p>
                    </div>
                    <div className="p-4 md:p-5 rounded-b mt-2">
                        <label className="text-[14px] text-[#0d3b68]">Número do Protocolo:</label>
                        <InputText
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="EX: ABC123DEF"
                            className="border border-gray-200 rounded-lg w-full py-1 px-2 placeholder:text-sm"
                        />
                    </div>
                    <div className="flex justify-end items-center p-4 md:p-5 rounded-b mt-2">
                        <button
                            onClick={closeModal}
                            className="cursor-pointer mr-4 bg-[#E2E7EB] px-4 py-2 rounded-lg hover:bg-[#cfd6db] transition duration-300 ease-in-out text-[14px] font-medium">
                            Fechar
                        </button>
                        <button onClick={() => handleSearch()}
                            className="flex align-center bg-[#0D3B68] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#0b2e54] transition duration-300 ease-in-out text-[14px] font-medium">
                            <Search className="h-4 w-4" style={{ marginRight: "10px", marginTop: "2px" }} />Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
