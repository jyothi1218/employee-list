import React, { useEffect } from "react";

const Once = () => {
  useEffect(() => {
    console.log("Loaded");
  }, []);

  return (
    <div>
      <h2>Welcome Employees</h2>
    </div>
  );
};

export default Once;