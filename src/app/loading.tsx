import React from "react";
import { Spinner } from "@nextui-org/spinner";

const loading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Spinner label="Loading..." color="warning" size="lg" className="text-2xl" />
    </div>
  );
};

export default loading;
