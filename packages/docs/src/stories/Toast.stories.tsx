import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@tmowes-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Example Toast',
    description: 'Example toast description',
    open: true,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
