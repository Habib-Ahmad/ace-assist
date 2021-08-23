import React from 'react'
// import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Room } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

const PatientDashboard = () => {
	const props = useLocation()
	const data = props.state
	return (
		<div className='patientDashbaord'>
			<div className='patientDashboardWrapper'>
				<div className='patientTitleContainer'>
					<h1 className='patientTitle'>Patient Details</h1>
					<Avatar className='patientImg' />
				</div>
				<div className='patientDetailsWrapper'>
					<div className='patientDetailsLeft'>
						<div className='patientDetail'>
							<strong>FullName:</strong> {data.fullname}
						</div>
						<div className='patientDetail'>
							<strong>Sex:</strong> {data.sex}
						</div>
						<div className='patientDetail'>
							<strong>Marital Status:</strong> {data.marital_status}
						</div>
						<div className='patientDetailsSubtitle'>Address</div>
						<div className='patientDetail'>
							<strong>Address:</strong> {data.address.address}
						</div>
						<div className='patientDetail'>
							<strong>LGA:</strong> {data.address.lga_of_residence}
						</div>
						<div className='patientDetail'>
							<strong>Town:</strong> {data.address.town_name}
						</div>
						<div className='patientDetail'>
							<strong>Ward Village:</strong> {data.address.ward_village}
						</div>
						<div className='patientDetail'>
							<strong>State of Residence:</strong> {data.address.state_of_residence}
						</div>
						<div className='patientDetailsSubtitle'>Contact Details</div>
						<div className='patientDetail'>
							<strong>Phone Number:</strong> {data.address.phonenumber}
						</div>
						<div className='patientDetail'>
							<strong>Next of Kin Phone Number:</strong> {data.next_of_kin_address.phonenumber}
						</div>
						<div className='patientDetail'>
							<strong>Next of Kin Address:</strong> {data.next_of_kin_address.address}
						</div>
						<div className='patientDetail'>
							<strong>Relationship:</strong> {data.pediatric_patient.relationship}
						</div>
					</div>
					<div className='patientDetailsRight'>
						<div className='patientDetail'>
							<strong>HIV:</strong>
						</div>
						<div className='patientDetail'>
							<strong>Hepatitis B:</strong>
						</div>
						<div className='patientDetail'>
							<strong>Hepatitis C:</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PatientDashboard
