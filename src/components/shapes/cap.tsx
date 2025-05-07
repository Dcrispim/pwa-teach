import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={65}
    fill="none"
    {...props}
  >
    <path
      fill="#FACC15"
      d="M32.333 46.5a2 2 0 0 1-.992-.264L13.833 36.23a1.001 1.001 0 0 0-1.5.867V46.5a2 2 0 0 0 1.03 1.75l18 10a2 2 0 0 0 1.942 0l18-10a1.999 1.999 0 0 0 1.028-1.75v-9.403a1.001 1.001 0 0 0-1.5-.867L33.326 46.236a2 2 0 0 1-.993.264Z"
    />
    <path
      fill="#FB923C"
      d="M62.323 24.312V24.3a2.001 2.001 0 0 0-1-1.535l-28-16a2 2 0 0 0-1.985 0l-28 16a2 2 0 0 0 0 3.472l28 16a2 2 0 0 0 1.985 0L57.958 28.16a.25.25 0 0 1 .375.217v18.067c0 1.076.828 2 1.904 2.053a2 2 0 0 0 2.096-1.997v-22c0-.063-.003-.125-.01-.188Z"
    />
  </svg>
)
export { SvgComponent as Cap }
