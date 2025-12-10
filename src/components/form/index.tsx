import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

interface IFormProps {
    onSubmit: SubmitHandler<TaskSchemaType>
}

const taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(["checked", "todo"]).default("todo").optional(),
  id: z.string().optional()
})

export type TaskSchemaType = z.infer<typeof taskSchema>

export default function Form({ onSubmit }: IFormProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<TaskSchemaType>({
        resolver: zodResolver(taskSchema)
    })

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <input { ...register("title", { required: true }) } id="title" type="text" />
            { errors.title && <p>Invalid title</p> }
            <label htmlFor="description">Description</label>
            <input { ...register("description", { required: true }) } id="description" type="text" />
            { errors.description && <p>Invalid description</p> }
            <button type="submit">Enviar</button>
        </form>
    )
}