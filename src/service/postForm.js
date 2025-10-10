import axios from "axios";
import convertToSend from "@/utils/convertToSend";

export async function postForm(form) {
    const formattedForm = convertToSend(form);

    console.log("Dados enviados:", formattedForm);

    try {
        const response = await axios.post(
            "https://smart-invest-api-latest.onrender.com/simulacao",
            formattedForm 
        );

        return response.data;
    } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        return null;
    }
}


