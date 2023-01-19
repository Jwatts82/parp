class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

    async fetchReadDates() {
        let res = await fetch(this.baseURL + '/read_dates')
        let data = await res.json()
        return data
    }

    async fetchReadDate(id) {
        let res = await fetch(this.baseURL + `/read_dates/${id}`)
        let data = await res.json()
        return data
    }
    
}