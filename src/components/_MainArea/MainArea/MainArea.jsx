import React from "react";
import Title from "../../_Header/MainTitle/MainTitle";
import Navigation from "../../_Header/Navigation/Navigation";
import Titles from "../Titles/Titles";
import Works from "../_Works/Works/Works";
import Profile from "../_Profile/Profile/Profile";
import Contact from "../_Contact/Contact/Contact";

export default function () {
  return (
    <>
      <main>
        <Works />
        <Profile />
        <Contact />
      </main>
    </>
  );
}
