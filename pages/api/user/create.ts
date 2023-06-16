import type { NextApiRequest, NextApiResponse } from "next";
// import logger from "next-auth/utils/logger";
import { getServerSession } from "next-auth/next";
import {db} from "@/lib/db";
import { authOptions } from "../auth/[...nextauth]";


export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;
    //  res.status(200).json({data});
    // await handlePOST(res, req);

  } else if (req.method === "PUT") {
    await handlePUT(res, req);
  } else if (req.method === "GET") {
    await handleGET(res, req);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// const hashPassword = (password: string) => {
//   return sha256(password).toString();
// };

// POST /api/user
// async function handlePOST(res, req) {

//   const data = req.body;
//   const university = await db.university.create({
//     data: {
//       name: data.name,
//       website: data.website,
//       city: data.city,
//       region: data.region,
//       country: data.country,
//       ownedBy: data.ownby
//     },
//   });

//   res.status(200).json({ university });
// }

// Get /api/user
async function handleGET(res, req) {
  // logger.debug("Getting all users");
  const user = await db.user.findMany();
  res.status(200).json({ user });
}


// put /api/user
async function handlePUT(res, req) {
  // logger.debug("Getting all users");
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }
  const userId = session.user.id;
  const user = await db.user.update({
    where: { id: userId },
    data: {
      ...req.body,
    },
  });
  res.status(200).json({ user });
}