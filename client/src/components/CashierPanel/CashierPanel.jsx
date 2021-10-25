import { CCard, CCardTitle } from "@coreui/react";
import React from "react";
import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./CashierPanel.css";

function CashierLists() {
  return (
    <div>
      <CCard className="cashier-list">
        Cash Name
        <br />
        Price
      </CCard>
      <FiEdit className="cashier-editbtn" />
      <BsTrash className="cashier-deletebtn" />
    </div>
  );
}

export default function CashierPanel() {
  return (
    <CCard className="leftpane">
      <CCardTitle style={{ margin: "10px" }}>Cashier</CCardTitle>
      <CgAdd className="" />
      <CashierLists />
    </CCard>
  );
}
