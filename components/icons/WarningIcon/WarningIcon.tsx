import React from 'react'

import { RiErrorWarningLine } from 'react-icons/ri'

import type { IconProps } from '../type'

export default function WarningIcon(props: IconProps) {
  return <RiErrorWarningLine {...props} className="text-red-500 text-xl" />
}
