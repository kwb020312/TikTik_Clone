import { client } from "@/utils/client";
import { searchPostsQuery } from "@/utils/queries";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { searchTerm } = req.query;
    let videosQuery;
    let videos;
    if (searchTerm) {
      videosQuery = searchPostsQuery(searchTerm);
      videos = await client.fetch(videosQuery);
    }
    res.status(200).json(videos);
  }
}
