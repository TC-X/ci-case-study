import React from 'react'

export function IconPanelStartHide({
  size = 24,
  strokeWidth = 1.5,
  className,
  ...props
}: React.ComponentProps<'svg'> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M9 3V21M16 15L13 12L16 9M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z'
        stroke='black'
        strokeWidth={`${strokeWidth}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function IconPanelStartUnhide({
  size = 24,
  strokeWidth = 1.5,
  className,
  ...props
}: React.ComponentProps<'svg'> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M9 3V21M14 9L17 12L14 15M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z'
        stroke='black'
        strokeWidth={`${strokeWidth}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function IconNewChat({
  size = 24,
  strokeWidth = 1.5,
  className,
  ...props
}: React.ComponentProps<'svg'> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M11.528 2.94797H4.8951C4.39249 2.94797 3.91046 3.14763 3.55506 3.50303C3.19966 3.85844 3 4.34046 3 4.84308V18.1088C3 18.6114 3.19966 19.0934 3.55506 19.4488C3.91046 19.8042 4.39249 20.0039 4.8951 20.0039H18.1608C18.6634 20.0039 19.1455 19.8042 19.5009 19.4488C19.8563 19.0934 20.0559 18.6114 20.0559 18.1088V11.4759M17.5686 2.59264C17.9456 2.21568 18.4568 2.00391 18.9899 2.00391C19.523 2.00391 20.0343 2.21568 20.4113 2.59264C20.7882 2.9696 21 3.48087 21 4.01397C21 4.54707 20.7882 5.05834 20.4113 5.4353L11.871 13.9765C11.646 14.2013 11.368 14.3659 11.0627 14.455L8.3404 15.251C8.25887 15.2748 8.17244 15.2762 8.09016 15.2551C8.00789 15.234 7.93279 15.1912 7.87274 15.1312C7.81268 15.0711 7.76987 14.996 7.74879 14.9137C7.72771 14.8315 7.72914 14.745 7.75292 14.6635L8.54886 11.9412C8.63843 11.6361 8.80331 11.3585 9.02833 11.1339L17.5686 2.59264Z'
        stroke='black'
        strokeWidth={`${strokeWidth}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function IconEllipsisVertical({
  size = 24,
  strokeWidth = 1.5,
  className,
  ...props
}: React.ComponentProps<'svg'> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
        stroke='black'
        strokeWidth={`${strokeWidth}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
        stroke='black'
        strokeWidth={`${strokeWidth}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
        stroke='black'
        strokeWidth={`${strokeWidth}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function IconSettings({
  size = 24,
  strokeWidth = 1.5,
  className,
  ...props
}: React.ComponentProps<'svg'> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M20 7H11M14 17H5M14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17ZM10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7Z'
        stroke='black'
        strokeWidth={`${strokeWidth}`}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
