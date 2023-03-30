import { client } from "@/utils/client";
import { topicPostsQuery } from "@/utils/queries";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { topic } = req.query;
    let videosQuery;
    let videos;
    if (topic) {
      videosQuery = topicPostsQuery(topic);
      videos = await client.fetch(videosQuery);
    }

    res.status(200).json(videos);
  }
}
