class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

    async fetchReadDates() {
        let res = await fetch(this.baseURL + '/read_dates')
        let data = await res.json()
        return data
    }
}