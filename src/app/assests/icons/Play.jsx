import React from "react";

function Play({height, width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 512 512"
    >
      <path
        d="M425 5105c-60-22-110-68-139-127l-26-52V194l26-52c31-63 81-106 148-128 72-24 141-14 229 34 40 21 974 546 2077 1166 1250 703 2019 1142 2043 1164 54 53 77 106 77 182s-23 129-77 182c-24 22-793 461-2043 1164C1637 4526 702 5051 662 5073c-86 46-168 57-237 32z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Play;