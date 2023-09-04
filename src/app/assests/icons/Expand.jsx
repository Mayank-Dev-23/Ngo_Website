import React from "react";

function Expand({height, width,color,change}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1"
      viewBox="0 0 512 512"
      fill={change ? "#FFFFFF" :'#2a6b75'}
    >
      <path
        d="M1025 4088c-3-7-4-238-3-513l3-500 103-3 102-3v676l398-398 397-397 73 72 72 73-397 397-398 398h676l-3 103-3 102-508 3c-401 2-509 0-512-10zM3077 4093c-4-3-7-51-7-105v-98h675l-398-398-397-397 72-73 73-72 397 397 398 398v-676l103 3 102 3v1020l-506 3c-278 1-509-1-512-5zM1627 1772l-397-397v676l-102-3-103-3V1025h1020l3 103 3 102h-676l398 398 397 397-73 73-72 72-398-398zM3022 2098l-72-73 397-397 398-398h-676l3-102 3-103h1020v1020l-102 3-103 3v-676l-398 398-397 397-73-72z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Expand;