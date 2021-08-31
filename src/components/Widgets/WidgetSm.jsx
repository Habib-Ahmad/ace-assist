import React, { useState, useEffect } from 'react'
import { Avatar, Button } from '@material-ui/core'
import axios from '../../utils/api'
import { Link } from 'react-router-dom'

export default function WidgetSm() {
	const [patients, setPatients] = useState([])

	useEffect(() => {
		axios.get('/personal-history').then((response) => {
			let patients = response.data.all_patients
			const numberOfPatients = response.data.all_patients.length
			if (numberOfPatients > 5) {
				patients = patients.splice(-6)
			}
			setPatients(patients)
		})
	}, [])

	const Btn = ({ type }) => {
		return <button className={'widgetSmBtn ' + type}>{type}</button>
	}

	return (
		<div className='widgetSm'>
			<span className='widgetSmTitle'>New Patients</span>
			<ul className='widgetSmList'>
				{patients.map((patient, index) => (
					<li key={`${index}${patient._id}`} className='widgetSmListItem'>
						<Avatar className='widgetSmImg' />
						<div className='widgetSmUser'>
							<span className='widgetSmUsername'>{patient.fullname}</span>
							<span className='widgetSmUserTitle'>{patient.sex}</span>
						</div>
						<div>
							<Btn type='HIV' />
							<Btn type='HepatitisB' />
							<Btn type='HepatitisC' />
						</div>
						<Link className='link' to={{ pathname: 'patient/' + patient._id, state: patient }}>
							<Button className='widgetSmButton'>Details</Button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
