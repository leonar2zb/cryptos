import { useCryptoStore } from "../store"
import { currencies } from "../data"

export default function CriptoSearchForm() {

    const { cryptoCurrencies } = useCryptoStore()
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency">
                    <option value="">--Seleccione moneda--</option>
                    {currencies.map(currency => (
                        <option value={currency.code} key={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Moneda:</label>
                <select name="criptocurrency" id="criptocurrency">
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
            <input type="submit" value="Cotizar" />
        </form>
    )
}