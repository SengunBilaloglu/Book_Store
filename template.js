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
                        <button id="heart-btn-${index}" class="heart-btn" aria-label="Like" onclick="toggleLiked(${index})">
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