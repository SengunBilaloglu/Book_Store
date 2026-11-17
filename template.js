function getBooksTemplate(index) {
    return `    

        <div class="card text-white bg-info" >
            <h2 class="card-header" id="card-header-${index}">${books[index].name}</h2>
            <div class="card-body img-body">
                <img src="./assets/icons/book.png">
            </div>
            <div class="card-body">
                <div class="price-and-likes">
                    <h5 class="book-price" id="book-price-${index}">${books[index].price}</h5>
                    <div class="likes">
                        <h6 id="number-of-likes-${index}">${books[index].likes}</h6>
                        <button id="heart-btn-${index}" class="heart-btn" aria-label="Like" onclick="liked(${index})">
                            <span class="heart">&#9829;</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-body">
                <p id="authors-name">${books[index].author}</p>
                <p id="published-jahr">${books[index].publishedYear}</p>
                <p id="genre">${books[index].genre}</p>
            </div>
            <hr>
            <div id="comments-body-${index}" class="card-body overflow-auto" style="max-height: 200px;">
                <h6>Kommentare:</h6>                
            </div>
            <hr>

            <div class="card-body" style="padding-bottom: 0;">
                <div class="input-group input-group-sm mb-3" style="gap:5px">
                    <input id="new-comment-${index}" type="text" class="form-control" placeholder="Schreibe dein Kommentar..."
                        aria-describedby="inputGroup-sizing-sm">
                    <button  class="send-btn" onclick="sendComment(${index})">
                       <img src="./assets/icons/send-button-white.svg">
                    </button>
                </div>
            </div>
    `
}

function renderBookInfo(index) {
    //book info 1
        let headerRef = document.getElementById(`card-header-${index}`);
        headerRef.innerHTML = books[index].name;

        let priceRef = document.getElementById(`book-price-${index}`);
        priceRef.innerHTML = books[index].price + "€";

        let likesRef = document.getElementById(`number-of-likes-${index}`);
        likesRef.innerHTML = books[index].likes;

        let authorRef = document.getElementById("authors-name");
        authorRef.innerHTML = books[index].author;

        let publishedYearRef = document.getElementById("published-jahr");
        publishedYearRef.innerHTML = books[index].publishedYear;

        let genreRef = document.getElementById("genre");
        genreRef.innerHTML = books[index].genre;
}

function renderComments(index) {
     //info 2
        let commentsRef = document.getElementById(`comments-body-${index}`);
        commentsRef.innerHTML = "<h6>Kommentare:</h6>";

        for (let i = books[index].comments.length - 1; i >= 0; i--) {
            const elementName = books[index].comments[i].name;
            const elementComment = books[index].comments[i].comment;
            commentsRef.innerHTML += `<p class="card-text"><b>${elementName}: </b>${elementComment}</p>`;
        }

}

function renderLikeButton(index) {
     //book info 3
        let heartBtn = document.getElementById(`heart-btn-${index}`);
        heartBtn.classList.toggle("liked", books[index].liked);
}