import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={421}
    height={495}
    fill="none"
    {...props}
  >
    <path
      fill="#FB923C"
      fillRule="evenodd"
      d="M71.43 117.091C34.54 160.186 2.85 225.227.477 293.654c-2.372 68.427 33.68 117.604 93.576 157.864 112.387 75.543 255.096 39.704 294.703-17.629 36.995-53.551 41.43-95.441 14.2-156.834-27.231-61.393-45.874-104.851-39.988-159.701 5.8-54.037.996-88.08-31.217-103.624-34.841-16.81-76.637-19.124-122.999 0C161.452 33.24 105.75 77 71.431 117.091Z"
      clipRule="evenodd"
    />
  </svg>
)
export { SvgComponent as BlobThree }
