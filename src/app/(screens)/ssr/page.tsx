import React from "react";

export default async function Ssr() {
  const response = await fetch(
    "http://api.github.com/users/felipecarvalho180",
    {
      cache: "no-store",
    }
  );
  const user = await response.json();

  return (
    <div>
      <h1>Ssr</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
