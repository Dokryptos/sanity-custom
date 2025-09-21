import { createClient } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";

import { apiVersion, dataset, projectId, token } from "../sanity/env";

export const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const getSanityImageConfig = () => client;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const doc = {
      _type: "articles",
      title: req.body.title,
      gallery: req.body.gallery,
      auteur: req.body.auteur,
      Infoauteur: req.body.Infoauteur,
      tempsDeLecture: req.body.tempsDeLecture,
      texte: req.body.texte,
      chapeau: req.body.chapeau,
      citation: req.body.citation,
      intertitre: req.body.intertitre,
      status: "pending", // tu filtres par ça côté admin
    };

    const result = await client.create(doc);
    res.status(200).json({ success: true, id: result._id });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: string | any) {
    res.status(500).json({ error: err.message });
  }
}
