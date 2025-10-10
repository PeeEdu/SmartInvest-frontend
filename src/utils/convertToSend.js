export default function convertToSend(form) {
  const rawValue = form.valorInvestimento || "0";

  const moneyString = rawValue.replace(/\./g, "").replace(",", ".");
  const valorConvertido = parseFloat(moneyString);

  return {
    tipoUsuario: form.tipoUsuario,
    tipoPerfil: form.tipoPerfil,
    tipoInvestimento: form.tipoInvestimento === "RENDA_FIXA" ? "FIXA" : "VARIAVEL",
    idRendaFixa: form.idRendaFixa,
    valorInicial: isNaN(valorConvertido) ? 0 : valorConvertido,
    prazoMeses: form.periodo
  };
}
