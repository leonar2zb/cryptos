import { z } from 'zod'

const Currency = z.object({
    code: z.string(),
    name: z.string()
})

export type Currency = z.infer<typeof Currency>

export const cryptoSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const cryptoSchemas = z.array(cryptoSchema)

export type cryptoSchemaType = z.infer<typeof cryptoSchema>
export type cryptoSchemasType = z.infer<typeof cryptoSchemas>[]

export const PairCurrency = z.object({
    criptocurrency: z.string(),
    currency: z.string()
})

export type PairCurrencyType = z.infer<typeof PairCurrency>

export const TradingInfo = z.object({
    "IMAGEURL": z.string(),
    "PRICE": z.string(),
    "HIGHDAY": z.string(),
    "LOWDAY": z.string(),
    "CHANGE24HOUR": z.string(),
    "LASTUPDATE": z.string()
})

export type TradingInfoType = z.infer<typeof TradingInfo>