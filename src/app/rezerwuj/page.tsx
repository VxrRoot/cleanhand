"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const BookPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <main className="text-black bg-azure">{id}</main>;
};

export default BookPage;
