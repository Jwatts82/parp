class Read_Date {
    constructor(data) {
        this.id = data.id
        this.month = data.month
        this.day = data.day
        this.year = data.year
        this.completed = data.completed
    }

    renderReadDates() {
        return `
        <li>
            <a href='#' data-id='${this.id}'>${this.month}.${this.day}.${this.year}</a>
            - ${this.completed ? 'Completed' : 'Not Completed'}
        </li>
        `
    }

    renderReadDate() {
        return `
        <h3>${this.month}.${this.day}.${this.year}</h3>
        <hr>
        <br>
        <p>${this.completed ? "Completed" : "Not Completed"}</p>
        <button id='delete-todo' data-id='${this.id}'>Delete</button>
        
        `
    }

}