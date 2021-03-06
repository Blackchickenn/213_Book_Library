async function getBooks(){
    let response = await fetch ("books.json")
    let data = await response.json()
    let n = 1
    // console.log(data)
    return data.map(book => {
        book.id = n
        n += 1
        return book
    })  
}


function getBookHtml(book) {
    return `<div class="my-book">
        <div class="my-book-cover">${book.title}</div>
        <div class="my-book-spine"></div>
        <div class="my-book-footer"></div>
    </div>`
}

function displayLibrary(books){
    let sampleBook = books[0]
    console.log(sampleBook)
    document.body.innerHTML = `
    <div class="my-library">
        ${books.map(getBookHtml).join('')}
    </div>`
    
}


getBooks().then(displayLibrary).catch(error => 
    console.log(error))