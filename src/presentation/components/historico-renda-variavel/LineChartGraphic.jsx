import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

// Função para formatar a data no formato "mes/ano"
function formatDate(dateString) {
    const months = [
        "jan", "fev", "mar", "abr", "mai", "jun",
        "jul", "ago", "set", "out", "nov", "dez"
    ];

    const [year, month] = dateString.split("-"); // Extrai ano e mês
    return `${months[parseInt(month, 10) - 1]}/${year}`; // Formata como "mes/ano"
}

// Função para calcular a variação percentual
function calculatePercentageChange(currentValue, previousValue) {
    if (previousValue == null || currentValue == null) {
        return 0; // primeiro ponto = 0%
    }
    if (previousValue === 0) {
        return 0; // evita divisão por zero
    }
    return ((currentValue - previousValue) / previousValue) * 100;
}

export default function LineChartGraphic({ data }) {
    // Adiciona uma propriedade de variação percentual para cada ação
    const enrichedData = data.map((item, index) => {
        const newItem = { ...item };
        Object.keys(item).forEach(key => {
            if (key !== "week") {
                const previousValue = data[index - 1]?.[key];
                const currentValue = item[key];
                newItem[`${key}Percentage`] = calculatePercentageChange(currentValue, previousValue);
            }
        });
        return newItem;
    });

    return (
        <ResponsiveContainer width="100%" height={450}>
            <LineChart data={enrichedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" tickFormatter={(week) => formatDate(week)} /> {/* Exibe o eixo X com o formato "mes/ano" */}
                <YAxis label={{ value: 'Preço', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #d3d3d3' }}
                    content={({ payload }) => {
                        if (!payload || payload.length === 0) return null;

                        // Ordena do maior pro menor
                        const sortedPayload = [...payload].sort((a, b) => b.value - a.value);

                        return (
                            <div style={{ padding: 10, backgroundColor: '#ffffff', border: '1px solid #d3d3d3' }}>
                                {sortedPayload.map((item) => {
                                    const percentageKey = `${item.name}Percentage`;
                                    const percentageChange = item.payload?.[percentageKey] ?? 0;
                                    const sign = percentageChange > 0 ? "+" : "";
                                    return (
                                        <div key={item.name} style={{ color: item.color, marginBottom: 5 }}>
                                            {item.name}: R$ {item.value.toFixed(2)} ({sign}{percentageChange.toFixed(2)}%)
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    }}
                />

                <Legend
                    wrapperStyle={{ paddingTop: 10 }}
                    formatter={(value) => <span style={{ marginRight: 20 }}>{value}</span>}
                />

                {Object.keys(enrichedData[0])
                    .filter(key => key !== "week" && !key.includes("Percentage"))
                    .map((acao, index) => {
                        const colors = [
                            '#E63946',
                            '#28e00f',
                            '#f9d33b',
                            '#000000',
                            '#f93bc4',
                            '#266BFF',
                        ];

                        return (
                            <Line
                                key={acao}
                                type="monotone"
                                dataKey={acao}
                                name={acao}
                                stroke={colors[index % colors.length]}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                            />
                        );
                    })}
            </LineChart>
        </ResponsiveContainer>
    );
}