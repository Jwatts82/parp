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
    attachClicksToLinks()
}

function attachClicksToLinks() {
    const dates = document.querySelectorAll('li a')
    for (const date of dates) {
        date.addEventListener('click', displayReadDate)
    }
}

async function displayReadDate(e) {
    // console.log(e.target)
    let id = e.target.dataset.id

    const data = await apiService.fetchReadDate(id)
    const read_date = new Read_Date(data)
    main.innerHTML = read_date.renderReadDate()

}








init()