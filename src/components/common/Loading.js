import React from "react";
import { useSelector } from "react-redux";
const Loading = () => {
  const { isLoading } = useSelector((state) => state.loading);
  return <div className={`loading ${isLoading ? "active" : ""}`}></div>;
};
export default Loading;
