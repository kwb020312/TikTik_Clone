// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/utils/client";
import {
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;
    let query;
    let user;
    let userVideosQuery;
    let userLikedVideos;
    let userVideos;
    if (id) {
      query = singleUserQuery(id);
      userVideosQuery = userCreatedPostsQuery(id);
      userLikedVideos = userLikedPostsQuery(id);
      userVideos = await client.fetch(userVideosQuery);
      user = await client.fetch(query);
    }

    res.status(200).json({ user: user[0], userVideos, userLikedVideos });
  }
}
