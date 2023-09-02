import React from "react";

function CheckMark({height, width,color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 512 512"
      fill={color}
    >
      <path
        d="M4598 4491c-243-127-627-368-878-551-503-366-952-799-1267-1224-126-169-229-331-313-490l-64-119-40 46c-23 26-169 195-326 376s-298 337-315 346c-27 14-82 16-528 13l-499-3-24-28c-39-46-33-95 19-155 23-27 469-511 991-1075 554-599 960-1030 976-1037 40-16 96 3 114 38 7 15 32 97 55 182 270 1001 821 2009 1558 2852 155 177 436 461 595 600 75 65 139 126 142 134 9 24 7 73-4 95-12 21-60 49-84 49-9 0-57-22-108-49z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default CheckMark;