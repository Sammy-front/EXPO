 export default async function traduzirTexto(texto, idiomaAlvo = "ja") {
    const key = "";
    const endpoint = "https://api.cognitive.microsofttranslator.com/"
    const region = "eastus";
    const url = `${endpoint}/translate?api-version=3.0&to=${idiomaAlvo}`;
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify([{ Text: texto}]),
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Ocp-Apim-Subscription-Region": region,
            "Content-type": "application/json"
        }
    });
    const data = await response.json();
    const traduzido = data[0].translations[0].text;
    console.log(traduzido, '\n');
    return traduzido
}

