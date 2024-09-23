import React from "react";
import AdminProductManagerTabSection from "../components/sections/AdminProductManagerTabSection";
import { useParams } from "react-router-dom";

const AdminProductDetail = () => {
  const { id } = useParams();

  return <AdminProductManagerTabSection id={id} />;
};

export default AdminProductDetail;
