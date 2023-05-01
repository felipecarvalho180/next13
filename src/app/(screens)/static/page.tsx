import React from "react";

export const revalidate = 30;

export default async function Static() {
  const response = await fetch(
    "http://api.github.com/users/felipecarvalho180",
    {
      next: {
        // revalidate: 30
      },
    }
  );
  const user = await response.json();

  return (
    <div>
      <h1>Static Page</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
