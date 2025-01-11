import { useEffect } from "react"
import CriptoSearchForm from "./Components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./Components/CryptoPriceDisplay"
function App() {

  const { fetchCryptos } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-tittle">Cotizador de
          <span>Criptomonedas</span></h1>
        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
