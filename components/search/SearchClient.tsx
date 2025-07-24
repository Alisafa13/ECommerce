"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const SearchClient: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return <div>Query: {query}</div>;
};

export default SearchClient;
