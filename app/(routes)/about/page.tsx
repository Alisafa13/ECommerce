import { columns, Payment } from "@/components/dataTable/columns";
import { DataTable } from "@/components/dataTable/data-table";
import { Metadata } from "next";
import React from "react";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    
    },
    // ...
  ];
}
export const metadata:Metadata={
    title:'About | Ecommerce',
    description:'Ecommerce sayti haqqinda',
    robots:{
        index:true,
        follow:true
    }

}
const AboutPage = async () => {
  const data = await getData();
  const jsonLd={
    '@context':'https://schema.org',
    '@type':'Product',
    author:'alisafahajizada',
    isPublished:true,
    tags:['web development','next js','mobile development','shopify development']
  }
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <div className="mx-8 py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </>
  );
};

export default AboutPage;
