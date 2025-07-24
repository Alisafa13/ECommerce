import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sss } from "@/constans";

const AccordionPage = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {Sss.map((sss, index) => (
          <AccordionItem value={sss.id} key={index}>
            <AccordionTrigger>{sss.title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{sss.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionPage;
