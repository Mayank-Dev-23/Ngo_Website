import React from "react";

function RightArrow({height, width,color}) {
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
        d="M2909 4677c-64-24-102-53-211-165-126-127-151-172-151-272 0-124-14-106 601-722l557-558H1968c-1722 0-1738 0-1792-20-74-28-139-98-161-174-13-45-16-91-13-224 3-145 6-173 25-213 25-56 84-118 138-144 39-20 75-20 1793-25l1752-5-560-560c-617-617-604-601-603-722 1-96 31-148 165-279 140-138 176-159 278-159 62 1 84 5 125 27 67 36 1953 1923 1981 1983s26 176-5 236c-32 64-1928 1958-1985 1984-52 23-151 29-197 12z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default RightArrow;