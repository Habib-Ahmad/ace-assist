import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ClientIntakeForm from './components/Forms/AddNewPatient/ClientIntakeForm'
import PersonalHistory from './components/Forms/AddNewPatient/PersonalHistory'
import Topbar from './components/Navigators/Topbar'
import Sidebar from './components/Navigators/Sidebar'
import PatientDashboard from './pages/PatientDashboard'
// import useAuth from './hooks/useAuth'
import Toast from 'toastr'

Toast.options = {
	closeButton: false,
	debug: true,
	newestOnTop: true,
	progressBar: true,
	positionClass: 'toast-top-right',
	preventDuplicates: false,
	showDuration: '300',
	hideDuration: '1000',
	timeOut: '5000',
	extendedTimeOut: '1000',
	showEasing: 'swing',
	hideEasing: 'linear',
	showMethod: 'fadeIn',
	hideMethod: 'fadeOut'
}

function App() {
	// const { adminAuth } = useAuth()
	// console.log(adminAuth)

	return (
		<Router>
			<div>
				<Topbar />
				<div className='app__container'>
					<Sidebar />
					<Switch>
						<Redirect exact from='/home' to='/' />
						
						<Route exact path='/'>
							<Dashboard />
						</Route>
						
						<Route exact path='/dashboard'>
							<Dashboard />
						</Route>

						<Route path='/patient/:userId'>
							<PatientDashboard />
						</Route>
						
						<Route exact path='/client-intake-form'>
							<ClientIntakeForm />
						</Route>
						
						<Route exact path='/personal-history'>
							<PersonalHistory />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
