"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navigation() {
  const { push } = useRouter();

  return (
    <div>
      <h1>Navigation</h1>
      <button onClick={() => push("/")}>Ir pra home</button>
    </div>
  );
}
