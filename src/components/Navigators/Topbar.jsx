import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import Drawerr from './Drawer'
import useAuth from '../../hooks/useAuth'
import { ADMIN_TOKEN } from '../../utils/token'
import { CLIENT_TOKEN } from '../../utils/token'
import { CLIENT_STEP } from '../../utils/localstorage'
import { ADMIN_ROLE } from '../../utils/localstorage'

export default function Topbar() {
	const { adminAuth } = useAuth()

	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	const [state, setState] = React.useState({
		menu: false
	})

	const toggleDrawer = (anchor, open) => (event) => {
		console.log(Event)
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	const logout = () => {
		localStorage.removeItem(ADMIN_TOKEN)
		localStorage.removeItem(CLIENT_TOKEN)
		localStorage.removeItem(CLIENT_STEP)
		localStorage.removeItem(ADMIN_ROLE)
	}

	const logoutAdmin = () => {
		logout()
		window.location.reload()
	}

	return (
		<div className='topbar'>
			<div className='topbar__left'>
				<img className='topbar__logo' src='logo192.png' alt='logo' />
				<div className='topbar__logoText'>Ace Assist</div>
			</div>

			{adminAuth ? (
				<div className='topbar__right'>
					<div className='topbar__rightIcons'>
						<NotificationsIcon />

						<Button aria-describedby={id} onClick={handleClick}>
							<Avatar />
						</Button>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center'
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center'
							}}
						>
							<div className='topbar__avatarMenu'>
								<div className='topbar__avatarMenuItem'>Ahmad Habib</div>
								<div className='topbar__avatarMenuItem2'>Administrator</div>
								<span></span>
								<Button>My Account</Button>
								<Button>Profile Settings</Button>
								<Button>Active Tasks</Button>
								<Button onClick={logoutAdmin}>Log Out</Button>
							</div>
						</Popover>
					</div>
					<Button onClick={toggleDrawer('menu', true)}>
						<MenuIcon />
					</Button>
					<Drawer anchor='left' open={state['menu']} onClose={toggleDrawer('menu', false)}>
						<div>
							<Drawerr />
						</div>
					</Drawer>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}
