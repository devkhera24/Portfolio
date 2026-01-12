const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const papers = document.querySelectorAll(".paper");

let currentLocation = 1;
let numOfPapers = papers.length;
let maxLocation = numOfPapers + 1;

function goNextPage() {
    if(currentLocation < maxLocation) {
        if(currentLocation === 1) {
            book.style.transform = "translateX(50%)";
        }
        
        const currentPaper = papers[currentLocation - 1];
        currentPaper.classList.add("flipped");
        currentPaper.style.zIndex = currentLocation;
        
        if(currentLocation === numOfPapers) {
             book.style.transform = "translateX(100%)";
        }
        
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        if(currentLocation === 2) {
             book.style.transform = "translateX(0%)";
        }
        
        const prevPaper = papers[currentLocation - 2];
        prevPaper.classList.remove("flipped");
        prevPaper.style.zIndex = numOfPapers - (currentLocation - 2);
        
        if(currentLocation === maxLocation) {
             book.style.transform = "translateX(50%)";
        }
        
        currentLocation--;
    }
}

// Event Listeners
nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);

// Initial Z-Index setup
function setupZIndex() {
    papers.forEach((paper, index) => {
        paper.style.zIndex = numOfPapers - index;
    });
}

setupZIndex();
