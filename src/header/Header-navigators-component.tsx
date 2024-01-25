import React from 'react'
import { useState } from "react";

export default function HeaderNavigators(props:any) {

  return (
    <div
      className={props.activePage == props.number ? "active" : ""}
      onClick={() => {
        props.setActoinActivePage(props.number);     
      }}
    >
      {props.number}
    </div>
  );
}
