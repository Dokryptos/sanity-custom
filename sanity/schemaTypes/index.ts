import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { tribuneType } from "./tribuneTypes";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { articlesType } from "./articlesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, articlesType, tribuneType],
};
