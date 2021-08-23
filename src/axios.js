import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://aceassist-backend.herokuapp.com/api',
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlnYXJiYXdhbGFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjI5NjQxNjA4LCJleHAiOjE2Mjk3MjgwMDh9.0RmBAb3lCJrJwhIej3wmB7acHuBjKw7fQPwrLeBGprg'
	}
})

export default instance
