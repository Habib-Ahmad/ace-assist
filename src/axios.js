import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://aceassist-backend.herokuapp.com/api',
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlnYXJiYXdhbGFAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjI5OTg5MzU0LCJleHAiOjE2MzAwNzU3NTR9.H-ibW7khoI4W7u6z4HpDz9KtM96JW380JUBhHLOiKZQ'
	}
})

export default instance
