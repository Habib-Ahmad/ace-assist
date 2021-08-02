import Dashboard from './pages/Dashboard'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import ClientIntakeForm from './components/Forms/AddNewPatient/ClientIntakeForm'
import Topbar from './components/Navigators/Topbar'
import Sidebar from './components/Navigators/Sidebar'
import useAuth from './hooks/useAuth'
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
	const { adminAuth } = useAuth()
	console.log(adminAuth)

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
						
						<Route exact path='/client-intake-form'>
							<ClientIntakeForm />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
