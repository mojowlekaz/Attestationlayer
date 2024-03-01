import { ReactNode } from 'react'

const BASE_BTN_CLASSES = 'bg-12F1E440 w-[170px]  h-[29px]  rounded-[13px]'
const ACTIVE_BTN_CLASSES = 'bg-0C8AFF40 w-[170px]  h-[29px] rounded-[13px]'
const CLICKED_BTN_CLASSES =
  'bg-0DBE3440 w-[106px] Nav_DIV  h-[29px] rounded-[13px]'
const NAV_BTN_CLASSES = 'bg-12F1E440 w-[106px] Nav_DIV h-[29px]  rounded-[13px]'

export function Button({
  children = '',
  onClick,
  variant,
  ...props
}: {
  children: ReactNode
  onClick: any
  variant?: string
}) {
  return (
    <button
      type="button"
      className={
        variant === 'base'
          ? BASE_BTN_CLASSES
          : variant === 'active'
            ? ACTIVE_BTN_CLASSES
            : variant === 'clicked'
              ? CLICKED_BTN_CLASSES
              : variant === 'nav'
                ? NAV_BTN_CLASSES
                : BASE_BTN_CLASSES
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
