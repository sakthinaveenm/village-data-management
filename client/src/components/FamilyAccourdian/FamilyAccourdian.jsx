import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCard,
} from "@coreui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./FamilyAccourdian.css";
export default function FamilyAccourdian(props) {
  // { props.head.map(()=>{
  return (
    <CAccordion style={{ width: 800 }}>
      <CAccordionItem itemKey={uuidv4()}>
        <CAccordionHeader>Family Name</CAccordionHeader>
        <CgAdd className="addcircle" />
        {/* { props.member */}
        <CAccordionBody className="rmborder">
          <CCard className="familycard">Person Name</CCard>
          <FiEdit className="editbtn" />
          <BsTrash className="deletebtn" />
        </CAccordionBody>
        {/* } */}
      </CAccordionItem>
    </CAccordion>
  );
}
