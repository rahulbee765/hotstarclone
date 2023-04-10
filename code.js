let movies = [
{
    Name: "loki",
    Des: "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
    image: "images/slider 1.png"
},
{
    Name: "falcon and the winter solider",
    Des: "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
    image: "images/slider 2.png"
},
{
    Name: "wanda vision",
    Des: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
    image: "images/slider 3.png"
},
{
    Name: "Raya and the Last Dragon",
    Des: "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.",
    image: "images/slider 4.png"
},
{
    Name: "luca",
    Des: "Luca, a sea monster, befriends Alberto, another one of his kind who takes him on a land adventure. He experiences an exciting summer while keeping his parents in the dark.",
    image: "images/slider 5.png"
}
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0; // track the current slide

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //create DOM Elements
    let slide= document.createElement("div");
    var imgElement= document.createElement("img");
    let content= document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].Name));
    p.appendChild(document.createTextNode(movies[slideIndex].Des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up img
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    // setting element classnames
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length -2)
        }px)`;
    }
};

for(let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);


//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) =>{
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders 

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click',() => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth + 200;
    });
});