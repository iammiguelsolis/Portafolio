import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { experienceType } from './experience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, experienceType],
}