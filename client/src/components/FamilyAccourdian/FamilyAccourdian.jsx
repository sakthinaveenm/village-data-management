import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCard,
} from "@coreui/react";
import React from "react";

export default function FamilyAccourdian() {
  return (
    <CAccordion>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <CCard>Head</CCard>
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  );
}
