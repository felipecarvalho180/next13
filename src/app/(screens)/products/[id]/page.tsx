import React from "react";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductDetailProps) {
  return {
    title: `Produto ${params.id}`,
  };
}

export default function ProductDetail({ params: { id } }: ProductDetailProps) {
  return (
    <div>
      <span>O produto tem o id: {id}</span>
    </div>
  );
}
