import { ComponentProps } from 'react'

import {
  TooltipContainer,
  TooltipContent,
  TooltipArrow,
  TooltipTrigger,
  TooltipProvider,
  TooltipPortal,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="top" align="center">
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
