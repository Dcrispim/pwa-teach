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
      d="M32.667 6.5c-14.337 0-26 11.664-26 26s11.663 26 26 26c14.336 0 26-11.664 26-26s-11.664-26-26-26Zm9.336 31.602c-1.063 1.296-4.961 4.81-9.336 7.94-4.375-3.126-8.274-6.645-9.337-7.94-2.5-3.046-3.697-6.174-3.662-9.562.039-3.883 3.152-7.041 6.941-7.041 2.75 0 4.663 1.551 5.774 2.845l.284.343.283-.343c1.092-1.308 3.02-2.844 5.774-2.844 3.789 0 6.903 3.159 6.941 7.041.035 3.386-1.163 6.515-3.662 9.561Z"
    />
    <path
      fill="#FB923C"
      stroke="#0F172A"
      strokeWidth={3}
      d="M26.61 19.999c2.702 0 4.712 1.23 6.05 2.472C34 21.215 36.022 20 38.723 20c4.645 0 8.394 3.856 8.441 8.526v.355c-.046 3.656-1.403 7.003-4.003 10.172v.001c-1.189 1.45-5.214 5.055-9.623 8.207l-.872.623-.872-.623c-4.135-2.953-7.932-6.31-9.37-7.91l-.254-.297c-2.685-3.272-4.042-6.734-4.003-10.53.047-4.67 3.797-8.525 8.442-8.525Z"
    />
  </svg>
)

export { SvgComponent as HeartCircle }
