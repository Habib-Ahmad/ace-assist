import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
	const [navClass, setNavClass] = useState(SidebarData)

	function ExpandMore(e, idx) {
		if (navClass[idx].class === 'hide') {
			const updatedNavClass = [...navClass]
			updatedNavClass[idx] = { ...navClass[idx], class: 'expand' }
			setNavClass(updatedNavClass)
		} else {
			const updatedNavClass = [...navClass]
			updatedNavClass[idx] = { ...navClass[idx], class: 'hide' }
			setNavClass(updatedNavClass)
		}
	}

	return (
		<div className='sidebar'>
			<div className='sidebar__menu'>
				<div className='sidebar__menuText'>Navigation Menu</div>
				<ul className='sidebar__menuItems'>
					<li className='sidebar__menuItem dashboard'>
						<Link className='link' to='/dashboard'>
							Dashboard
						</Link>
					</li>

					{SidebarData.map((data, idx) => (
						<li
							id={idx}
							key={`button:${idx}`}
							className='sidebar__menuItem'
						>
							<Button onClick={(e) => ExpandMore(e, idx)}>
								{data.title}
								{navClass[idx].class === 'hide' ? (
									<ExpandMoreIcon />
								) : (
									<ExpandLessIcon />
								)}
							</Button>
							<div
								className={`sidebar__menuSubItems ${navClass[idx].class}`}
							>
								{data.subNav.map((subData, subIdx) => (
									<div
										key={`subButton:${subIdx}`}
										className={`sidebar__menuSubItem`}
									>
										<Link
											className='link'
											to={subData.path}
										>
											<div>{subData.title}</div>
										</Link>
									</div>
								))}
							</div>
						</li>
					))}
				</ul>
			</div>

			<span></span>
		</div>
	)
}

export default Sidebar
