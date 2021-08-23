import { Person } from '@material-ui/icons'

export default function FeaturedInfo() {
	return (
		<div className='cards'>
			<div className='card'>
				<div className='CardDetailsContainer'>
					<div className='cardTitle'>Number of Patients</div>
					<div className='cardDetail'>3</div>
				</div>
				<Person className='cardIcon' style={{ color: '#3a3ae6' }} />
			</div>
			<div className='card'>
				<div className='CardDetailsContainer'>
					<div className='cardTitle'>Number of Doctors</div>
					<div className='cardDetail'>0</div>
				</div>
				<Person className='cardIcon' style={{ color: '#46c346' }} />
			</div>
			<div className='card'>
				<div className='CardDetailsContainer'>
					<div className='cardTitle'>Patients Per Doctor</div>
					<div className='cardDetail'>0</div>
				</div>
				<Person className='cardIcon' style={{ color: '#dc4f4f' }} />
			</div>
		</div>
	)
}
