import { LucideIcon } from 'lucide-react'
import { cn } from '@renderer/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './card'
import { Button } from './button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from './input'
import { Label } from '@radix-ui/react-label'
import { Textarea } from './textarea'
import { Select, SelectTrigger } from './select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './form'

export enum TypeField {
  Text = '_TEXT_',
  Number = '_NUMBER_',
  Email = '_EMAIL_',
  Select = '_SELECT_',
  Textarea = '_TEXTAREA_',
  FinderInput = '_FINDER_INPUT_'
}

type Option = {
  field: any
  label: string
}

type Field = {
  type: TypeField
  label: string
  description?: string
  options?: Option[]
  placeholder?: string
  defaultfield?: string
}

export type Fields = Record<string, Field>

type FieldArray = {
  name: string
  description: string
  className?: string
  fields: Fields
}

type Dependency = {
  field: string
  condition: (field: any) => boolean
}

type FormType = {
  field: Fields | FieldArray
  dependencies: Dependency[]
}[]

export type FormBuilderObj = {
  name: string
  description?: string
  className?: string
  submitter: {
    label: string
    icon?: LucideIcon
  }
  fields: FormType
  schema: z.ZodSchema
}

type FormBuilderProps = {
  formBuilder: FormBuilderObj
}

type renderFieldProps = {
  field: Field
}
function RenderFields(field: Field, props: any) {
  if (field.type === TypeField.Text) {
    return (
      <div>
        <Label>{field.label}</Label>
        <Input type="text" placeholder={field.placeholder} {...props} />
      </div>
    )
  }
  if (field.type === TypeField.Number) {
    return (
      <div>
        <Label>{field.label}</Label>
        <Input type="number" placeholder={field.placeholder} {...props} />
      </div>
    )
  }
  if (field.type === TypeField.Email) {
    return (
      <div>
        <Label>{field.label}</Label>
        <Input type="email" placeholder={field.placeholder} {...props} />
      </div>
    )
  }
  if (field.type === TypeField.Select) {
    return (
      <div>
        <Label>{field.label}</Label>
        <Select>
          <SelectTrigger>Selecione</SelectTrigger>
        </Select>
      </div>
    )
  }
  if (field.type === TypeField.Textarea) {
    return (
      <div>
        <Label>{field.label}</Label>
        <Textarea placeholder={field.placeholder} />
      </div>
    )
  }
  return (
    <div>
      <Label>{field.label}</Label>
      <Input type="text" placeholder={field.placeholder} {...props} />
    </div>
  )
}

/// TODO - implementar o form builder e criar os outros inputs
export function FormBuilder({ formBuilder }: FormBuilderProps) {
  const { className, name, description, submitter, schema } = formBuilder

  const form = useForm<z.infer<typeof schema>>()

  return (
    <Card className={cn('w-full h-full', className)}>
      <CardTitle>{name}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      <CardContent>
        <Form {...form}>
          <FormField
            control={form.control}
            name="..."
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl></FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="flex items-center gap-2">
          {submitter.icon && <submitter.icon className="w-4 h-4" />}
          {submitter.label}
        </Button>
      </CardFooter>
    </Card>
  )
}
