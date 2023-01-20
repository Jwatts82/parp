const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    renderReadDates()
    document.getElementById('read_date').addEventListener('click', renderReadDates)

    
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
    let id = e.target.dataset.id

    const data = await apiService.fetchReadDate(id)
    const read_date = new Read_Date(data)
    main.innerHTML = read_date.renderReadDate()

    if (read_date.books) {
        read_date.books.forEach(book => {
            console.log(book)
            main.innerHTML += `
            <li><a href='#' data-id='${this.id}'>${book.title} , ${book.author} - ${read_time}</a></li>
            `
        })
    }

}











init()