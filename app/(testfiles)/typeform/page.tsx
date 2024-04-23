"use client";

import React from "react";
import { PopupButton } from "@typeform/embed-react";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <PopupButton
        id="<form-id>"
        style={{ fontSize: 20 }}
        className="my-button border border-gray-400 p-2 bg-black text-white my-14"
      >
        Open the form
      </PopupButton>
    </div>
  );
};

export default page;
