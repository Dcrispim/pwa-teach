import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={534}
    height={522}
    fill="none"
    {...props}
  >
    <path
      fill="#FB923C"
      fillRule="evenodd"
      d="M26.933 166.66C.64 218.766-10.932 292.146 13.179 362.559c24.11 70.412 85.682 112.74 171.689 140.733 161.38 52.525 314.518-15.363 338.397-82.606 22.305-62.808 11.039-106.567-44.996-163.306-56.035-56.739-94.96-97.041-109.618-154.357-14.441-56.465-33.448-90.184-77.303-99C243.915-5.51 194.031 1.29 147.22 30.986 99.464 61.281 51.392 118.187 26.933 166.66Z"
      clipRule="evenodd"
    />
  </svg>
)
export { SvgComponent as BlobSeven }
