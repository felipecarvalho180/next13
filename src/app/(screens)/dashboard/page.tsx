import { cookies, headers } from "next/headers";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  const rootCookies = cookies();
  const rootHeaders = headers();

  return (
    <div className="flex flex-col">
      <Link href="/signin">Sign In</Link>
      <Link href="/products/1">Produto 1</Link>
      <Link href="/products/2">Produto 2</Link>

      <span>Cookies: {JSON.stringify(rootCookies.getAll(), null, 2)}</span>
      <span>Headers: {JSON.stringify(rootHeaders.entries(), null, 2)}</span>
    </div>
  );
}
