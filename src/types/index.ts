import { z } from 'zod'

const Currency = z.object({
    code: z.string(),
    name: z.string()
})

export type Currency = z.infer<typeof Currency>