import React, { useState, useEffect } from 'react'
import FeaturedInfo from '../components/Cards/FeaturedInfo'
import Chart1 from '../components/Charts/Chart1'
import PieChart from '../components/Charts/PieChart'
import WidgetSm from '../components/Widgets/WidgetSm'
import WidgetLg from '../components/Widgets/WidgetLg'
import { userData } from '../DummyData'
import axios from '../axios'

const DashBoard = () => {
	const [pieChartData, setPieChartData] = useState([])

	useEffect(() => {
		axios.get('/request-result').then((response) => {
			const pieChartDataCopy = [[...pieChartData], [], []]
			pieChartDataCopy[0][0] = {
				name: 'positive',
				value: response.data.total_tests_taken.hiv.positive
			}
			pieChartDataCopy[0][1] = {
				name: 'negative',
				value: response.data.total_tests_taken.hiv.negative
			}
			pieChartDataCopy[1][0] = {
				name: 'positive',
				value: response.data.total_tests_taken.hepatitis.b_test.positive
			}
			pieChartDataCopy[1][1] = {
				name: 'negative',
				value: response.data.total_tests_taken.hepatitis.b_test.negative
			}
			pieChartDataCopy[2][0] = {
				name: 'positive',
				value: response.data.total_tests_taken.hepatitis.c_test.positive
			}
			pieChartDataCopy[2][1] = {
				name: 'negative',
				value: response.data.total_tests_taken.hepatitis.c_test.negative
			}
			// pieChartDataCopy[3][0] = response.data.total_tests_taken
			setPieChartData(pieChartDataCopy)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='dashboard'>
			<div className='dashboardWrapper'>
				<FeaturedInfo />
				<Chart1 data={userData} title='Number of Patients' grid dataKey='Number of patients' />
				{pieChartData && (
					<div className='pieChartWrapper'>
						<PieChart title='Hiv tests' data={pieChartData[0]} nameKey='name' dataKey='value' />
						<PieChart title='Hepatitis B tests' data={pieChartData[1]} nameKey='name' dataKey='value' />
						<PieChart title='Hepatitis C tests' data={pieChartData[2]} nameKey='name' dataKey='value' />
					</div>
				)}
				<div className='dashboardWidgets'>
					<WidgetSm />
					<WidgetLg />
				</div>
			</div>
		</div>
	)
}

export default DashBoard
