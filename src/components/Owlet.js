import React from "react";
import Color from "color";

export default function Owlet({ primaryColor, secondaryColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="134"
      height="152"
      viewBox="0 0 21 26"
      fill="none"
      style={{ alignSelf: 'center' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0H15V1H9V0ZM7 2V1H9V2H7ZM5 3V2H7V3H5ZM4 4V3H5V4H4ZM3 5V4H4V5H3ZM2 6V5H3V6H2ZM1 7V6H2V7H1ZM4 12H3V10H1H0V7H1V9H4V10V12ZM5 14H4V12H5V14ZM4 16V15H5V14H6V16H5H4ZM3 17V16H4V17H3ZM2 18V17H3V18H2ZM2 21H1V18H2V21ZM2 21H5V20H6V26H5V22H2V21ZM17 2H15V1H17V2ZM18 3H17V2H18V3ZM20 8V5H19V3H18V6H19V8H18V9H19V8H20ZM20 12V8H21V12H20ZM19 14V12H20V14H19ZM18 15V14H19V15H18ZM18 16H17V15H18V16ZM19 18H18V16H19V18ZM19 21H20V18H19V21ZM18 22V26H19V21H18H17V22H18ZM11 25H10V26H11V25ZM12 24V25H11V24H12ZM13 24V23H12V24H13ZM13 24H14V26H13V24ZM12 8H14V9H11V8V6H12V8ZM14 6H12V5H14V6Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15H6V16H8V17H12V18H16V17H17V16H16V17H12V16H8V15Z"
        fill="#5E2C29"
      />
      <rect x="13" y="18" width="1" height="3" fill={Color(secondaryColor).darken(0.2)} />
      <rect x="14" y="18" width="2" height="3" fill={secondaryColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3H14H17V4H18V9H17V8H15V12H17H18V9H19V8H20V12H19V14H18H17V13H15H14V14H11H10V13H9V11H8V6H9V4H10V3H12ZM14 8V5H12V6H11V9H14V8ZM17 16V17H16V18H17V21H16V22H15V23H14H13V24H14V26H18V23V22H17V21H19V18H18V16H17ZM7 21H6L6 19H7L7 21ZM4 8H5V10H4V8Z"
        fill={Color(primaryColor).darken(0.5)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 1H14V2H15V3H17V4H18V3H17V2H15V1ZM4 10H5V11H4V10ZM15 13H17V14H18V15H17V16H16V17H12V16H14V15H15V14V13ZM12 17V18H11V17H12ZM7 16H8V17H7V16ZM7 21H6V22H7V21ZM14 21V22H13V23H15V22H16V21H17V18H16V21H14Z"
        fill={Color(primaryColor).darken(0.2)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1V2H7V3H5V4H4V5H3V6H2V7H1V9H4V8H5V11H4V12H5V14H6V15H8V16H14V15H15V13H14V14H10V13H9V11H8V8V6H9V4H10V3H15V2H14V1H9ZM6 26V22H7V19H6V20H5V21H2V20V19V18H3V17H4V16H7V17H11V18H13V19V21H14V22H13V23H12V24H11V25H10V26H6Z"
        fill={primaryColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6H12V8H14V6ZM19 6H18V8H19V6Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6H12V8H14V6ZM19 6H18V8H19V6Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8H15V12H17H18V9H17V8Z"
        fill="#1C121B"
      />
    </svg>
  );
}
