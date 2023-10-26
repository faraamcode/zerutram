import React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import PeopleIcon from '@mui/icons-material/People'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { mainListItems, secondaryListItems } from './listItems'
import Chart from './Charts'
import Deposits from './Deposits'
import Orders from './Orders'

function DashboardHome () {
  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            elevation={1}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 150,
              borderRadius: 5
            }}
          >
            <Grid container>
              <Grid
                item
                xs={3}
                md={3}
                lg={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Avatar sx={{ width: 100, height: 100, marginRight: 1 }}>
                  <PeopleIcon />
                </Avatar>
                <Box>
                  <Typography component='p' variant='p'>
                    Total revenue
                  </Typography>
                  <Typography component='h5' variant='h5'>
                    250000
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                md={3}
                lg={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Avatar sx={{ width: 100, height: 100, marginRight: 1 }}>
                  <PeopleIcon />
                </Avatar>
                <Box>
                  <Typography component='p' variant='p'>
                    Total revenue
                  </Typography>
                  <Typography component='h5' variant='h5'>
                    250000
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                md={3}
                lg={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Avatar sx={{ width: 100, height: 100, marginRight: 1 }}>
                  <PeopleIcon />
                </Avatar>
                <Box>
                  <Typography component='p' variant='p'>
                    Total revenue
                  </Typography>
                  <Typography component='h5' variant='h5'>
                    250000
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                md={3}
                lg={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Avatar sx={{ width: 100, height: 100, marginRight: 1 }}>
                  <PeopleIcon />
                </Avatar>
                <Box>
                  <Typography component='p' variant='p'>
                    Total revenue
                  </Typography>
                  <Typography component='h5' variant='h5'>
                    250000
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {/* <Chart /> */}
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
        {/* Recent Orders */}
        {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
      </Grid>
      {/* <Copyright sx={{ pt: 4 }} /> */}
    </Container>
  )
}

export default DashboardHome
