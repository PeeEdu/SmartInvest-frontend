export default function formatCurrency(value) {
    if (!value) return "";
    let cleanValue = value.replace(/\D/g, "");
    cleanValue = (parseInt(cleanValue, 10) / 100).toFixed(2);
    const [integer, decimal] = cleanValue.split(".");
    const integerFormatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${integerFormatted},${decimal}`;
};

export function formatNewCurrency(value) {
    return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)
}