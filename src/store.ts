import { create } from "zustand";
import { cryptoSchemaType, PairCurrencyType, TradingInfoType } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos, getData } from "./Services/CryptoServices";

type CrytoStore = {
    cryptoCurrencies: cryptoSchemaType[]
    result: TradingInfoType
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: PairCurrencyType) => Promise<void>
}

export const useCryptoStore = create<CrytoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {
        CHANGE24HOUR: '',
        HIGHDAY: '',
        IMAGEURL: '',
        LASTUPDATE: '',
        LOWDAY: '',
        PRICE: '',
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptoCurrency = await getCryptos()
        set(() => ({
            cryptoCurrencies: cryptoCurrency
        }))
    },
    fetchData: async (pair: PairCurrencyType) => {
        set(() => ({ loading: true }))
        const result = await getData(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))