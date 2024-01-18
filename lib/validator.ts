import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Descrição deve ter no mínimo 3 caracteres")
    .max(400, "Descrição deve ter no máximo 400 caracteres."),
  location: z
    .string()
    .min(3, "Location deve ter no mínimo 3 caracteres")
    .max(400, "Location deve ter menos de 400 caracteres."),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
