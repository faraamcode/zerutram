import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LocalShipping from '@mui/icons-material/LocalShipping'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'
import Home from '@mui/icons-material/Home'
import Settings from '@mui/icons-material/Settings'
import ExitToApp from '@mui/icons-material/ExitToApp'
import AssignmentIcon from '@mui/icons-material/Assignment'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton className='active'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary='Customers' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary='Drivers' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalShipping />
      </ListItemIcon>
      <ListItemText primary='Trucks' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary='Properties' />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Account
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary='Settings' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary='Logout' />
    </ListItemButton>
  </React.Fragment>
)
