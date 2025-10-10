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

    const [year, month] = dateString.split("-");
    return `${months[parseInt(month, 10) - 1]}/${year}`;
}

// Função para calcular a variação percentual
function calculatePercentageChange(currentValue, previousValue) {
    if (previousValue == null || currentValue == null) return 0;
    if (previousValue === 0) return 0;
    return ((currentValue - previousValue) / previousValue) * 100;
}

export default function LineChartGraphic({ data }) {
    // Adiciona variação percentual para cada ação
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

    // Pega todas as ações existentes em todos os meses
    const allActions = Array.from(
        new Set(
            data.flatMap(item => Object.keys(item).filter(key => key !== "week"))
        )
    );

    return (
        <ResponsiveContainer width="100%" height={450}>
            <LineChart data={enrichedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" tickFormatter={(week) => formatDate(week)} />
                <YAxis label={{ value: 'Preço', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #d3d3d3' }}
                    content={({ payload }) => {
                        if (!payload || payload.length === 0) return null;

                        const sortedPayload = [...payload].sort((a, b) => b.value - a.value);

                        return (
                            <div style={{ padding: 10, backgroundColor: '#ffffff', border: '1px solid #d3d3d3' }}>
                                {sortedPayload.map((item) => {
                                    const percentageKey = `${item.name}Percentage`;
                                    const percentageChange = item.payload?.[percentageKey] ?? 0;
                                    const sign = percentageChange > 0 ? "+" : "";
                                    return (
                                        <div key={item.name} style={{ color: item.color, marginBottom: 5 }}>
                                            {item.name}: R$ {item.value?.toFixed(2)} ({sign}{percentageChange.toFixed(2)}%)
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

                {allActions.map((acao, index) => {
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
