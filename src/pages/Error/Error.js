import React, { useEffect } from "react";
import ErrorSection from "../../components/ErrorSection/ErrorSection";

const Error = () => {
  useEffect(() => {
    document.title = "Paga | Page Not Found";

    return () => {
      document.title = "Paga | Home";
    };
  }, []);

  return (
    <>
      <ErrorSection />
    </>
  );
};

export default Error;
