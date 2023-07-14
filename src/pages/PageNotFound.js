import React, { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found / Cinemate";
  });

  return <div>PageNotFound</div>;
};
