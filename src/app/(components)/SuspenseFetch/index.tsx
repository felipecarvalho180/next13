import React from "react";

export default async function SuspenseFetch() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    "http://api.github.com/users/felipecarvalho180",
    {
      cache: "no-store",
    }
  );

  const user = await response.json();

  return (
    <div>
      <h1>SuspenseFetch</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
