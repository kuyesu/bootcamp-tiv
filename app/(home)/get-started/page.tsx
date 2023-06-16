import React from 'react'
import Get from './get'
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';
export default async function page() {
     const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) {
        redirect('/intro')
    }
  return (
      <>
          <Get />
      </>
  )
}
