"use client"

import dynamic from "next/dynamic";

const RouterProvider = dynamic(() => import("./RouterProvider"), { ssr: false });

export default function Page() {
  return <RouterProvider />;
}
