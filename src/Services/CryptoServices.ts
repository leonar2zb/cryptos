import axios from "axios"
import { cryptoSchemas, PairCurrencyType } from "../types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = cryptoSchemas.safeParse(Data)
    if (result.success)
        return result.data
}

export async function getData(pair: PairCurrencyType) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    console.log(url)
    /*const { data: { Data } } = await axios(url)
    const result = cryptoSchemas.safeParse(Data)
    if (result.success)
        return result.data*/
}