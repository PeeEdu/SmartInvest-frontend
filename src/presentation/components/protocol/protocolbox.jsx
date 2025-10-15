"use client";
import { Copy, Download } from "lucide-react";
import html2canvas from "html2canvas";

export default function ProtocoloBox({ protocolo }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(protocolo);
        alert("✅ Protocolo copiado para a área de transferência!");
    };

    const handleDownload = async () => {
        const element = document.body;
        const canvas = await html2canvas(element);
        const dataUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `simulacao_${protocolo}.png`;
        link.click();
    };

    return (
        <div className="flex justify-between items-center border border-[#607a9f7a] rounded-lg p-4 bg-[#0d3b680d] mb-20">
            <div>
                <p className="text-[#607a9f] text-sm mb-2">Seu Protocolo de Simulação</p>
                <b className="text-lg mb-3">{protocolo}</b>
                <p className="text-[#5F799F] text-[12px] mt-2">
                    Guarde este protocolo para consultar sua simulação posteriormente.
                </p>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 bg-[#0D3B68] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#0b3054] transition cursor-pointer transform hover:scale-105"
                >
                    <Copy className="w-4 h-4" /> Copiar
                </button>
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-1 border border-[#0D3B68] text-[#0D3B68] px-3 py-2 rounded-lg text-sm hover:bg-[#f1f5f9] transition cursor-pointer transform hover:scale-105"
                >
                    <Download className="w-4 h-4" /> Baixar
                </button>
            </div>
        </div>
    );
}
