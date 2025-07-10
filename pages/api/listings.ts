// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DataListing, MockDataList } from "@/lib/mockDB";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
    res: NextApiResponse<DataListing[] | { error: string }>,
) {
  if (req.method === 'GET') {
    res.status(200).json(MockDataList);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
