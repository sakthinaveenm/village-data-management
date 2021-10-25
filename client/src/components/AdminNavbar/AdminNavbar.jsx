import { CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import React from "react";
import "./AdminNavbar.css";
export default function AdminNavbar() {
  return (
    <CNavbar colorScheme="light" className="bg-light">
      <CContainer fluid>
        <CNavbarBrand className="mb-0 h1">Admin Panel</CNavbarBrand>
        <div>
          Insiders : 800 &nbsp; Outsiders :200&nbsp; Total People :
          1000&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </CContainer>
    </CNavbar>  
  );
}
