import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 59 38" {...props}>
    <path
      stroke="#FACC15"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m37.037 17.854 12.88-3.451a5.334 5.334 0 0 1 2.76 10.303L14.04 35.059 2.171 21.674l7.728-2.07 6.532 3.771 7.727-2.07-9.983-16.65 7.728-2.071 15.134 15.27Z"
    />
  </svg>
)
export { SvgComponent as PlaneFlying }
