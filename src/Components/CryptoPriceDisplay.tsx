import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    const { result, loading } = useCryptoStore()
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])
    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Logo crypto" />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Más bajo en el día: <span>{result.LOWDAY}</span></p>
                            <p>Variación  últimas 24h: <span>{result.CHANGE24HOUR}</span></p>
                            <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>)
}