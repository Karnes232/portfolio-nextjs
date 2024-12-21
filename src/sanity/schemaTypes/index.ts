import { type SchemaTypeDefinition } from 'sanity'

import { postType } from './postType'
import { profile } from './profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, postType],
}
