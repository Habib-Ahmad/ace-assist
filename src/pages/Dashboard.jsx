import React from 'react'
import FeaturedInfo from '../components/Cards/FeaturedInfo'
import Chart1 from '../components/Charts/Chart1'
import WidgetSm from '../components/Widgets/WidgetSm'
import WidgetLg from '../components/Widgets/WidgetLg'
import { userData } from '../DummyData'

const DashBoard = () => {
	return (
		<div className='dashboard'>
			<div className='dashboardWrapper'>
				<FeaturedInfo />
				<Chart1
					data={userData}
					title='User Analytics'
					grid
					dataKey='Active User'
				/>
				<div className='dashboardWidgets'>
					<WidgetSm />
					<WidgetLg />
				</div>
			</div>
		</div>
	)
}

export default DashBoard
