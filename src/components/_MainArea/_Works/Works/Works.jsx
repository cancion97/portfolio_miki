import React from "react";
import Titles from "../../Titles/Titles";
import works from "../../../worksList";
import WorkItem from "../WorkItem/WorkItem";

export default function Works() {
  return (
    <>
      <Titles id={1} idname="works" />
      <WorkItem />
    </>
  );
}
