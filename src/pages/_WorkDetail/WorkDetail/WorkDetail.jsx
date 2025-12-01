import React from "react";
import WorkVideo from "../WorkVideo/WorkVideo";
import worksList from "../../../components/worksList";
import WorkDetailTitle from "../WorkDetailTitle/WorkDetailTitle";

export default function WorkDetail() {
  return (
    <div>
      <WorkVideo video={worksList[0].video} />
      <WorkDetailTitle title={worksList[0].label} />
    </div>
  );
}
