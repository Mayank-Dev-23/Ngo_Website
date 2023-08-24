import React from "react";

function Hamburger({height, width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 512 512"
    >
      <path
        d="M765 4033c-164-86-166-300-3-384 36-18 85-19 1795-19 1690 0 1760 1 1798 19 164 76 166 298 3 382-36 18-85 19-1800 19-1586-1-1766-2-1793-17zM765 2753c-164-86-166-300-3-384 36-18 74-19 1155-19 1067 0 1120 1 1158 19 164 76 166 298 3 382-36 18-74 19-1160 19-1003-1-1126-2-1153-17zM765 1474c-164-88-166-301-2-385 36-19 61-19 635-17l598 3 37 25c21 14 50 43 65 64 24 35 27 49 27 116s-3 81-27 116c-15 21-44 50-65 64l-37 25-600 2c-533 2-604 1-631-13z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Hamburger;