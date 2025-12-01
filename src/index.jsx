import { Routes, Route, Link } from "react-router-dom";

import WorkDetail from "./pages/_WorkDetail/WorkDetail";

export default function AppRouter() {
  return (
    <>
      {/* ルーティングの設定 */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/WorkDetail" element={<WorkDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
