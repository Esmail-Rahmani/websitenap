import { height } from "@mui/system";
import React from "react";

const GoogleMap = () => {
  return (
    <div className="mt-5 container-fluid">
      <hr className="pb-2" />
      <iframe
        style={{ width: "100%", height: "400px" }}
        src="https://maps.google.com/maps?width=612&amp;height=242&amp;hl=en&amp;q=B M, 181, Tank Shore Rd, EWS Colony, Lake City, Bengaluru, Karnataka 560076&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
