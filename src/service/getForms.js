// src/services/apiForms.js
import axios from "axios";

const API_URL = "https://smart-invest-api-latest.onrender.com";

export async function getRendasFixas() {
    try {
        console.log("Buscando produtos de renda fixa...");

        const response = await axios.get(`${API_URL}/renda-fixa`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar rendas fixas:", error);
        return [];
    }
}

export async function getByProtocol(protocolo) {
    try {
        console.log("Buscando simulação pelo protocolo...");
        const response = await axios.get(`${API_URL}/simulacao/${protocolo}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar simulação pelo protocolo:", error);
        return null;
    }
}

export async function getHistoricoRendaVariavel() {
    try {
        console.log("Buscando histórico de renda variável...");
        const response = await axios.get(`${API_URL}/acoes/historico`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar histórico de renda variável:", error);
        return null;
    }
}

