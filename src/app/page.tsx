import Link from "next/link";
import SuspenseFetch from "./(components)/SuspenseFetch";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <Link href="/dashboard">Dashboard</Link>

      <Suspense fallback={<p>Carregando com suspense...</p>}>
        {/* @ts-expect-error */}
        <SuspenseFetch />
      </Suspense>
    </div>
  );
}
