import { create } from "zustand";
import { cryptoSchemaType, PairCurrencyType } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos, getData } from "./Services/CryptoServices";

type CrytoStore = {
    cryptoCurrencies: cryptoSchemaType[]
    fetchCryptos: () => Promise<void>
    fetchData: (pair: PairCurrencyType) => Promise<void>
}

export const useCryptoStore = create<CrytoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
        const cryptoCurrency = await getCryptos()
        set(() => ({
            cryptoCurrencies: cryptoCurrency
        }))
    },
    fetchData: async (pair: PairCurrencyType) => {
        await getData(pair)
    }
})))