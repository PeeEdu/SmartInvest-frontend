"use client";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export default function Graphics({ items, initialAmount, month }) {

    // Gera os dados de comparação
    const comparisonData = items.map((item) => {
        const valorFinal = initialAmount * Math.pow(1 + item.taxaMensal / 100, month);
        const lucro = valorFinal - initialAmount;

        return {
            name: item.nome,
            finalAmount: parseFloat(valorFinal.toFixed(2)),
            profit: parseFloat(lucro.toFixed(2)),
        };
    });

    return (
        <div className="w-full h-[400px] mt-8">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                        formatter={(value) =>
                            `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            `}
                        contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid hsl(var(--border))",
                        }}
                    />
                    <Legend />
                    <Bar
                        dataKey="finalAmount"
                        fill="#0d3b68"
                        name="Valor Final"
                        fillOpacity={0.8}
                    />
                    <Bar
                        dataKey="profit"
                        fill="#16a249"
                        name="Lucro"
                        fillOpacity={0.8}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
