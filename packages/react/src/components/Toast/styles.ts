import * as Toast from '@radix-ui/react-toast'

import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
  border: '1px solid $gray600',
  backgroundColor: '$gray800',
  padding: '$3 $5',
  width: '$80',
  borderRadius: '$sm',
  fontFamily: '$default',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$1',
  lineHeight: '$base',
  position: 'relative',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$20',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999999,
  outline: 'none',
})
