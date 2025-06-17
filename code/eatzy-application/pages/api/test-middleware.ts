import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "middleware/db-connect";
import { findAllLocations, findLocationsById } from "mongoose/locations/services";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await dbConnect();
  const locations = await findLocationsById(["61708"])
  res.status(200).json(locations);
}
