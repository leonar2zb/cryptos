import { create } from "zustand";
import axios from "axios";
import { cryptoSchemas } from "./types";


async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = cryptoSchemas.safeParse(Data)
    if (result.success)
        return result.data
}

export const useCryptoStore = create(() => ({
    fetchCryptos: async () => {
        const crytocurrencies = await getCryptos()
        console.log(crytocurrencies)
    }
}))