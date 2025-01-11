import { create } from "zustand";
import axios from "axios";
import { cryptoSchemas, cryptoSchemaType } from "./types";
import { devtools } from "zustand/middleware";

type CrytoStore = {
    cryptoCurrencies: cryptoSchemaType[]
    fetchCryptos: () => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = cryptoSchemas.safeParse(Data)
    if (result.success)
        return result.data
}

export const useCryptoStore = create<CrytoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
        const cryptoCurrency = await getCryptos()
        set(() => ({
            cryptoCurrencies: cryptoCurrency
        }))
    }
})))