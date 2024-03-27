import {z} from 'zod'


export type FormType = z.infer<typeof formValidation>
export const formValidation = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(4),
    subjectMessage: z.string().min(5),
    message: z.string(),
})