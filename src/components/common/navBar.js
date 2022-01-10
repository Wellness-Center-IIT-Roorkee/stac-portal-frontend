import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/logo/iitr.png'
import { makeStyles } from '@mui/styles'
import '../../assets/css/common/style.css'
import { useDispatch, useSelector } from 'react-redux'
import { oauthUrl } from '../../constants'
import { getInitials } from '../../helpers/helperFunctions'
import { logOut } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'

const settings = ['Logout']

const useStyles = makeStyles(theme => ({
  appBar: {
    display: 'flex',
    boxShadow: 'none !important',
    borderBottom: 'thin solid #E7EBF0',
    backgroundColor: '#fff !important'
  },
  iitrLogo: {
    width: '2.8vmax',
    height: '2.8vmax'
  }
}))

function ResponsiveAppBar () {
  const classes = useStyles()
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const userName = useSelector(state => state.user.userData.name)
  const displayPicture = useSelector(
    state => state.user.userData.display_picture
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <AppBar position='static' color='default' className={classes.appBar}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            <Button onClick={() => navigate('/')} className={classes.mainLogo}>
              <Avatar className={classes.iitrLogo} alt='IITR' src={logo}  />
            </Button>
            
          </Typography>
          {isLoggedIn && (
            <Box style={{marginRight:"1.5rem"}} sx={{ flexGrow: 0 }}>
              {/* <Tooltip title={null}> */}
                <IconButton style={{borderRadius:"0",padding:"0.5rem"}} onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={getInitials(userName)
                  .reduce((a, b) => a + b, '')
                  .substr(0, 2)}
                src={`https://channeli.in${displayPicture}`}
              />
                <Typography style={{marginLeft:"0.5rem",fontSize:"1.3rem",fontWeight:"bold",fontFamily:"SF Pro Display"}} 
                textAlign="center">{userName}</Typography>
                <ArrowDropDownIcon />                  
              </IconButton>
              {/* </Tooltip> */}
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem onClick={()=>dispatch(logOut())} key={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <div className='wl_sp_nav_btns_parent'>
            {isLoggedIn?"":
              <button
                onClick={() =>window.location.assign(oauthUrl)}
                className='wl_sp_nav_btns_signup'
              >Login</button>
             }
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
