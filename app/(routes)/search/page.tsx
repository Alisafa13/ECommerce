import SearchClient from "@/components/search/SearchClient";
import React, { Suspense } from "react";

const SearchPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
};

export default SearchPage;
