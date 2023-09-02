import React from "react";

function People({height, width,color}) {
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
        d="M2434 4769c-59-22-135-85-169-139-88-140-62-327 62-440 75-69 144-93 249-88 138 7 243 78 300 202 82 179-7 396-190 465-74 28-181 28-252 0zm216-159c131-67 128-266-5-330-171-83-343 106-243 267 47 77 163 106 248 63zM1677 4536c-96-27-182-114-208-209-19-69-6-167 28-229 120-213 419-200 539 22 29 54 27 200-4 257-71 134-216 198-355 159zm159-171c61-40 82-130 44-192-28-46-65-67-120-67-150 0-194 198-60 267 40 21 97 18 136-8zM3277 4536c-96-27-182-114-208-209-19-69-6-167 28-229 120-213 419-200 539 22 29 54 27 200-4 257-71 134-216 198-355 159zm159-171c61-40 82-130 44-192-28-46-65-67-120-67-150 0-194 198-60 267 40 21 97 18 136-8z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M2174 3971c-36-16-114-93-114-112 0-5-139-9-308-11-307-3-309-3-344-27-19-13-46-40-59-59-24-35-24-37-27-346-2-210 1-318 8-337 6-14 29-43 51-65l39-38v-354c0-494-24-462 340-462s340-33 340 463c0 243 3 358 11 362 6 4 21-3 35-16l24-22v-435c0-479-2-465 64-510 31-21 40-22 325-22 277 0 295 1 326 20 65 40 65 41 65 517v430l24 22c14 13 29 20 35 16 8-4 11-119 11-362 0-496-24-463 340-463s340-32 340 462v354l39 38c22 22 45 51 51 65 7 19 10 127 8 337-3 309-3 311-27 346-13 19-40 46-59 59-35 24-37 24-344 27-169 2-308 6-308 11 0 19-78 96-114 112-37 17-72 19-386 19s-349-2-386-19zm726-161c19-19 20-33 20-342v-321l-54-57c-34-35-58-71-65-96s-11-183-11-446v-408h-460v408c0 263-4 421-11 446s-31 61-65 96l-54 57v321c0 309 1 323 20 342s33 20 340 20 321-1 340-20zm-862-394l2-268-34-39c-68-74-66-62-66-444v-345h-360v696l-28 45c-16 24-39 53-50 63-21 19-22 25-22 286 0 147 3 270 7 273 4 4 128 6 277 5l271-3 3-269zm1600 0l2-268-34-39c-68-74-66-62-66-444v-345h-360v696l-28 45c-16 24-39 53-50 63-21 19-22 25-22 286 0 147 3 270 7 273 4 4 128 6 277 5l271-3 3-269z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M684 3199c-42-12-82-54-94-98-16-62-49-310-61-466-15-185-6-633 15-794 26-191 24-189 372-525 359-347 354-341 354-366 0-17-7-20-50-20-41 0-56-5-75-25l-25-24V632c0-237 1-251 21-276l20-26h1156l21 23c21 23 22 30 22 278 0 254 0 256-23 277-16 15-36 22-65 22h-42v228c0 257-7 300-68 416-24 47-64 98-117 152-66 67-96 89-175 127-85 42-129 54-252 72-31 5-65 31-203 160-158 147-189 168-270 190-6 2-28 46-50 99l-39 96 19 73c41 152 17 319-63 442-46 71-130 150-198 186-61 33-90 39-130 28zm141-233c53-53 93-136 108-219 9-57 8-75-13-160-27-113-24-147 20-257l32-79-41-36c-47-42-64-87-63-163 1-83 36-139 222-344 230-256 222-248 264-248 79 0 102 80 42 147-18 21-106 119-195 217-160 177-186 218-171 261 11 31 72 43 113 22 17-9 97-77 177-152s163-147 185-160c24-14 66-26 105-30 199-21 370-147 439-323 19-48 21-74 21-282V930h-627l-17 61c-20 74-32 87-413 452-156 149-269 265-279 286-28 59-44 211-50 492-7 273 2 447 32 659 22 151 22 152 46 139 12-6 40-30 63-53zM2200 630V490h-920v280h920V630zM4359 3196c-134-47-266-191-311-341-28-91-30-214-3-312l19-73-39-96c-22-53-44-97-50-99-81-22-112-43-270-190-138-129-172-155-203-160-123-18-167-30-252-72-79-38-109-60-175-127-53-54-93-105-117-152-61-116-68-159-68-416V930h-43c-33 0-49-6-65-23-21-23-22-30-22-278 0-254 0-256 23-277l23-22h1153l20 26c20 25 21 39 21 276v249l-25 24c-19 20-34 25-75 25-44 0-50 2-50 21 0 12 19 40 43 63 23 22 170 165 326 316 333 322 333 322 357 517 21 169 29 605 15 788-20 251-53 461-79 506-29 51-96 75-153 55zm45-316c31-226 39-378 32-655-6-284-22-437-50-496-10-21-128-142-289-297-377-361-383-367-403-441l-17-61h-627v230c0 259 5 281 81 390 84 120 200 187 370 214 48 8 98 20 112 28 14 7 96 78 182 158s170 151 186 159c21 11 39 12 66 5 35-8 38-12 41-47 4-50-1-57-176-251-80-88-163-180-184-203-29-32-38-51-38-78 0-46 29-75 76-75 42 0 34-8 264 248 193 214 220 256 220 348 0 80-16 120-64 162l-38 33 32 80c43 106 47 148 21 249-25 100-26 127-6 205 21 81 70 159 130 207 59 47 56 52 79-112zM3840 630V490h-920v280h920V630z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default People;