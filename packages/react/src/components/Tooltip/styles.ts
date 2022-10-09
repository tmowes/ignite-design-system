import * as Tooltip from '@radix-ui/react-tooltip'

import { styled, keyframes } from '../../styles'

// "closed" | "delayed-open" | "instant-open"
const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {
  '&[data-state="closed"]': {
    animation: `${fadeOut} 200ms ease-out`,
  },

  '&[data-state="delayed-open"]': {
    animation: `${fadeIn} 200ms ease-out`,
  },

  '&[data-state="instant-open"]': {
    animation: `${fadeIn} 0ms ease-out`,
  },
})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
