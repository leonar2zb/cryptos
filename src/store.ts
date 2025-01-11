import { create } from "zustand";
import { cryptoSchemaType } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "./Services/CryptoServices";

type CrytoStore = {
    cryptoCurrencies: cryptoSchemaType[]
    fetchCryptos: () => Promise<void>
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