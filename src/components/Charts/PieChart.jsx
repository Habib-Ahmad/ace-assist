import { useState } from 'react'
import { PieChart as PChart, Pie, Sector } from 'recharts'

const PieChart = ({ title, data, nameKey, dataKey }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const renderActiveShape = (props) => {
		const RADIAN = Math.PI / 180
		const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props
		const sin = Math.sin(-RADIAN * midAngle)
		const cos = Math.cos(-RADIAN * midAngle)
		const sx = cx + (outerRadius + 10) * cos
		const sy = cy + (outerRadius + 10) * sin
		const mx = cx + (outerRadius + 10) * cos
		const my = cy + (outerRadius + 20) * sin
		const ex = mx + (cos >= 0 ? 1 : -1) * 22
		const ey = my
		const textAnchor = cos >= 0 ? 'start' : 'end'

		return (
			<g>
				<text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
					{payload.name}
				</text>
				<Sector
					cx={cx}
					cy={cy}
					innerRadius={innerRadius}
					outerRadius={outerRadius}
					startAngle={startAngle}
					endAngle={endAngle}
					fill={fill}
				/>
				<Sector
					cx={cx}
					cy={cy}
					startAngle={startAngle}
					endAngle={endAngle}
					innerRadius={outerRadius + 6}
					outerRadius={outerRadius + 10}
					fill={fill}
				/>
				<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill='none' />
				<circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
				<text
					x={ex + (cos >= 0 ? 1 : -1) * 12}
					y={ey}
					dy={6}
					textAnchor={textAnchor}
					fill='#3d3d3d'
					style={{ fontSize: '12px' }}
				>
					{`Rate ${(percent * 100).toFixed(2)}%`}
				</text>
			</g>
		)
	}

	const onPieEnter = (_, index) => {
		setActiveIndex(index)
	}

	return (
		<div classNme='pieChart'>
			<div className='pieChartTitle'>{title}</div>
			<PChart width={320} height={200}>
				<Pie
					data={data}
					nameKey={nameKey}
					dataKey={dataKey}
					cx='50%'
					cy='50%'
					outerRadius={80}
					innerRadius={40}
					fill='#82ca9d'
					activeIndex={activeIndex}
					activeShape={renderActiveShape}
					onMouseEnter={onPieEnter}
				/>
			</PChart>
			<div className='pieChartText'>Total: 3</div>
		</div>
	)
}

export default PieChart
