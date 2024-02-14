import { Menu, MenuItem } from '@mui/material'
import React, { type FC } from 'react'

import { Button } from '../../Button'

interface DropdownProps {
  label: string | undefined
  items: Array<{
    label: string
    value?: string
    sortBy?: string
  }>
}

export const Dropdown: FC<DropdownProps> = ({ label, items }) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        size="small"
        variant='secondary'
        onClick={handleClick}
      >
        { label }
      </Button>
      <Menu
        keepMounted
        id="customized-menu"
        anchorEl={anchorEl}
        open
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'black',
            color: '#B2B2B2',
            borderRadius: '16px',
            border: '1px solid #404040',
            background: '#131313',
            boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
            padding: '12px',
            marginTop: '16px',
            marginLeft: '-30px',
          },
          '& .MuiMenuItem-root': {
            '&:hover': {
              color: '#dfdfdf',
            },
            '&.Mui-selected': {
              color: '#75FB6E',
              background: 'transparent',
            },
          },
        }}
        onClose={handleClose}
      >
        {items.map((item, index) => {
          return (
            <MenuItem
              key={index}
            >
              {item.label}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
