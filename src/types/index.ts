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