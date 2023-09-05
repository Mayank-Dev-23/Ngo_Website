import React from "react";

function Email({height, width,color}) {
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
        d="M2416 5104c-111-24-184-64-399-217-111-79-220-156-241-171l-39-26h-421c-418 0-421 0-461-23-22-13-49-40-62-62-22-39-23-48-23-321v-281l-372-264c-205-145-378-270-385-279-19-24-18-3230 1-3283C37 114 78 64 133 34l52-29h4750l52 29c55 30 96 80 119 143 19 53 20 3259 1 3284-7 8-180 134-384 279l-373 263v281c0 273-1 282-23 321-13 22-40 49-62 62-40 23-43 23-461 23h-421l-74 52c-41 28-149 105-241 170s-196 132-230 148c-127 57-284 73-422 44zm309-184c33-11 79-33 102-48 80-52 232-162 238-172 4-7-171-10-505-10-311 0-509 4-505 9 5 10 122 95 224 163 50 34 136 69 201 82 50 10 186-4 245-24zm1455-1253v-853l-596-495c-328-272-623-517-655-544-88-76-156-113-249-136-177-45-333 0-498 143-27 24-317 266-646 538l-596 494v1706h3240v-853zM768 3170l-3-211-263 220c-145 120-264 223-265 227-1 5 118 93 263 196l265 188 3-204c1-113 1-300 0-416zm3859 427c139-98 255-182 258-186 3-6-442-385-517-439-17-13-18 3-18 403 0 330 3 415 13 409 6-4 126-88 264-187zM1135 2430c446-370 810-677 810-681 0-6-1470-1233-1758-1468-16-13-17 81-17 1469v1482l78-65c42-35 442-367 887-737zm3813-1419l-3-740-885 735c-487 405-886 739-887 742-1 4 397 338 885 743l887 736 3-738c1-407 1-1072 0-1478zm-2760 551c69-48 193-92 295-105 73-9 104-8 180 5 140 24 224 62 347 156l25 19 879-731 879-731-1116-3c-614-1-1619-1-2233 0l-1117 3 879 731 879 731 28-21c16-12 50-36 75-54z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M2560 4183c-72-6-195-33-272-59-336-114-643-437-740-779-30-107-32-324-4-430 68-257 245-469 482-576 166-75 469-125 699-116 329 14 575 110 767 298 81 80 88 90 88 126 0 40-23 72-62 86-30 11-73-12-112-58-147-177-434-285-751-285-188 1-447 52-576 115-229 111-371 327-386 586-8 127 14 223 77 354 103 211 290 393 504 490 246 111 550 104 753-17 123-73 235-214 284-358 30-89 38-278 15-370-36-145-134-288-226-329-62-28-162-29-190-1-25 25-25 22 4 138 30 118 136 641 136 670 0 12-11 33-24 48-18 21-32 28-61 28-48 0-81-36-91-99l-6-46-48 45c-76 71-186 116-283 116-220 0-476-251-542-532-33-141-11-300 56-401 125-189 415-219 626-63l57 42 31-41c46-62 123-96 217-96 85-1 141 12 211 47 131 67 249 238 298 434 19 73 21 103 16 224-6 160-21 224-77 341-139 285-400 451-735 468-49 2-110 2-135 0zm88-622c52-27 99-81 135-160l30-64-21-106c-25-120-53-169-156-275-101-103-220-144-329-112-104 30-157 113-157 246 0 197 163 438 330 489 47 14 120 6 168-18z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Email;