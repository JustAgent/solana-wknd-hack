import { Alert, type AlertColor, AlertTitle, Box, IconButton, Snackbar } from '@mui/material'
import React from 'react'

import { type AppDialogProps } from '../../utils/dialog'

export interface AlertSnackbarParams {
  severity: AlertColor // color
  title?: React.ReactNode // bold text in the beginning
  body: React.ReactNode // text
  duration: number // milliseconds before snackbar closed
  action?: React.ReactNode // button to display on the right side. Will also close snack bar
}

export type AlertSnackbarProps = AppDialogProps<AlertSnackbarParams>

export function AlertSnackbar(
  {
    severity,
    title,
    body,
    duration,
    open,
    onClose,
    action,
  }: AlertSnackbarProps,
): JSX.Element {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
    >
      <Alert
        severity={severity}
        sx={{
          width: '100%',
        }}
        action={
          action && (
            <Box
              sx={{
                display: 'grid',
                gridAutoRows: 'auto',
                gridTemplateRows: '1fr',
                gridAutoFlow: 'column',
                gap: 1,
              }}
              onClick={onClose}
            >
              {action}
              <IconButton
                color="inherit"
                size="small"
                onClick={onClose}
              >
                <i className="ti ti-close" />
              </IconButton>
            </Box>
          )
        }
        onClose={onClose}
      >
        {
          title
            ? (<AlertTitle>{title}</AlertTitle>)
            : null
        }

        {body}
      </Alert>
    </Snackbar>
  )
}
