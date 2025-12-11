import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Título del Puesto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Empresa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Fecha de Inicio',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Fecha de Fin (dejar vacío si es actual)',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'link',
      title: 'Link para más información',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Orden (menor = primero)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'jobTitle',
      subtitle: 'company',
    },
  },
})
