class Book {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.author = data.author
        this.read_time = data.read_time
    }

    renderBook() {
        return `
        <li>
            <a href='#' data-id='${this.id}'>${this.title}, ${this.author}</a>
            - <h3>${this.read_time}</h3>
        </li>
        `
    }



}