import React from "react";

function LinkedIn({height,width,color}) {
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
        d="M905 4598c-136-26-282-140-344-270-46-98-60-204-39-301 23-103 60-177 123-245 306-329 845-117 845 333 0 314-277 542-585 483zM3380 3290c-47-10-107-26-135-35-167-58-335-186-425-327l-40-60-2 188-3 189-407 3-408 2V510h850v733c0 730 5 849 36 972 37 144 125 259 236 310 114 52 297 58 412 15 111-42 194-145 230-286 30-117 36-279 36-1006V520h850v798c0 825-6 1007-41 1202-82 465-318 711-746 775-135 20-336 18-443-5zM580 1880V510h850v2740H580V1880z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default LinkedIn;