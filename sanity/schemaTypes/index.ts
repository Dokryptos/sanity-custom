import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./tribuneTypes";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { articlesType } from "./articlesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, articlesType],
};
