import type { FC, ComponentProps } from "react"

interface Props extends ComponentProps<"svg"> {}

const MoonIcon: FC<Props> = (props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width={1.8}
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}

export default MoonIcon
