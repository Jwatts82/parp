const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    renderReadDates()
}

async function renderReadDates() {
    const read_dates = await apiService.fetchReadDates()
    main.innerHTML = ""
    read_dates.map(read_date => {
        const newReadDate = new Read_Date(read_date)
        main.innerHTML += newReadDate.renderReadDates()
    })
}








init()