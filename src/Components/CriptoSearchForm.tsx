import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { ChangeEvent, FormEvent, useState } from "react"
import { PairCurrencyType } from "../types"
import Error from "./Error"

export default function CriptoSearchForm() {

    const [pair, setPair] = useState<PairCurrencyType>({ criptocurrency: '', currency: '' })
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({ ...pair, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('Ambos campos son obligatorios')
            return
        }
        setError('')
    }

    const { cryptoCurrencies } = useCryptoStore()
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency"
                    onChange={handleChange} value={pair.currency}
                >
                    <option value="">--Seleccione moneda--</option>
                    {currencies.map(currency => (
                        <option value={currency.code} key={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Moneda:</label>
                <select name="criptocurrency" id="criptocurrency"
                    onChange={handleChange} value={pair.criptocurrency}
                >
                    <option value="">--Seleccione--</option>
                    {cryptoCurrencies.map(crypto => (
                        <option
                            value={crypto.CoinInfo.Name}
                            key={crypto.CoinInfo.Name}
                        >{crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>
            {error && <Error>{error}</Error>}
            <input type="submit" value="Cotizar" />
        </form>
    )
}