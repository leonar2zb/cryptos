import axios from "axios"
import { cryptoSchemas, PairCurrencyType, TradingInfo } from "../types"


export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = cryptoSchemas.safeParse(Data)
    if (result.success)
        return result.data
}

export async function getData(pair: PairCurrencyType) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY } } = await axios(url)
    // esta API los campos son dinámicos. Acceder con notación de corchetes
    const Data = DISPLAY[pair.criptocurrency][pair.currency]
    const result = TradingInfo.safeParse(Data)
    if (result.success)
        return result.data
}