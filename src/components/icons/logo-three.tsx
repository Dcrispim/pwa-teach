import * as React from "react"
import { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#64748B"
      d="M5.025 6.333.057 11.301l4.968 4.967 4.967-4.967-4.967-4.968Z"
    />
    <path
      fill="#CBD5E1"
      d="m10 11.299-4.968-4.97a7.025 7.025 0 0 1 0 9.933l-4.97 4.964 4.97 4.97L10 21.226l4.97-4.963L10 11.298Z"
    />
    <path
      fill="#64748B"
      d="m27.085 26.206 4.967-4.967-4.967-4.968-4.968 4.968 4.968 4.967Z"
    />
    <path
      fill="#CBD5E1"
      d="m22.118 21.238 4.97 4.963a7.025 7.025 0 0 1 0-9.933l4.969-4.97-4.97-4.969-4.97 4.97-4.963 4.97 4.964 4.969Z"
    />
    <path
      fill="#64748B"
      d="m6.124 27.299 4.968 4.967 4.967-4.967-4.967-4.968L6.124 27.3Z"
    />
    <path
      fill="#CBD5E1"
      d="m11.092 22.324-4.97 4.97a7.025 7.025 0 0 1 9.934 0l4.964 4.969 4.97-4.97-4.97-4.97-4.964-4.963-4.964 4.964Z"
    />
    <path
      fill="#64748B"
      d="M25.998 5.234 21.03.266l-4.967 4.968 4.968 4.967 4.967-4.967Z"
    />
    <path
      fill="#CBD5E1"
      d="m21.03 10.207 4.965-4.97a7.025 7.025 0 0 1-9.934 0L11.092.267l-4.97 4.97 4.97 4.97 4.97 4.97 4.969-4.97Z"
    />
  </svg>
)
export { SvgComponent as LogoThree }
