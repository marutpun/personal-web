import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(4, { message: 'Name is incorrect' }),
  email: z.string().email({ message: 'Invalid E-mail' }),
  message: z.string().min(5, { message: 'Message is invalid' }),
});
