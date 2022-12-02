function connector(json) {
    let sldeOne = document.querySelectorAll(`div`)[1];//<-AQUIRING DATA FOR SLIDES
 
    for (let i = 0; i < json.length; i++) {
        let div = document.createElement(`float`);
        div.classList = `content`;
        div.innerHTML = `<div class="details">
        <h2>`+(json[i].album)+`</h2>
        <a href="`+(json[i].url)+`">`+(json[i].artist)+`</a></div>
        <img class="details" src="`+(json[i].cover_image.path)+
        `" width="`+(json[i].cover_image.width)+`"height="`+(json[i].cover_image.height)+
        `"alt="`+(json[i].cover_image.alt_content)+`"><p class="middlecred"> credit: <a href ="${json[i].cover_image.url}">${json[i].artist}</a></p>
        <p class= "paragraph">`+(json[i].review.content)+`</p>
        <p>—<a href="`+(json[i].review.url)+`">`
        +(json[i].review.source)+`</a></p>`;
 
         sldeOne.append(div);
    }
}
 
window.onload = () => {
    //GATHERING BUTTONS
    let LB = document.getElementsByTagName(`a`)[0];
    let RB = document.getElementsByTagName(`a`)[1];
    console.log(LB,RB)
    //ADDING BUTTON CLASSES 2 HTML
    LB.classList.add(`hidden`,`LB`);
    RB.classList.add(`RB`);
    ////////////////////////
    let sldemove = document.querySelectorAll(`div`)[1];
    sldemove.classList.add(`action`);//<--TRANSITION
    let htmlb = document.querySelector(`body`);
    let script = document.createElement(`script`);
    script.setAttribute(`src`,`json/data.json`);
    htmlb.append(script); //<--LINKS DATA JSON
    let cSlides = document.getElementsByClassName(`carousel-slides`)[0];
    console.log(parent);
    /////////////////////
    let width = 0;
    let index = 0;
 
    // VERIFY SLIDE POSITION 4 BUTTONS
     let buttonCheck = () =>
    {
        if (index > 1 ) {
                LB.classList.remove(`hidden`);
        } else
                LB.classList.add(`hidden`);
        if (index < 2 ) {
                RB.classList.remove(`hidden`);
        } else
        {
                RB.classList.add(`hidden`);
        }
    };
    // the below functions enable user interaction
    RB.addEventListener(`click`, () => {
        buttonCheck();
        width -= 690;
        cSlides.style.transform = `translate(`+width+`px)`;
        index += 1;
    });
 
    LB.addEventListener(`click`, () => {
        buttonCheck();
        width += 690;
        cSlides.style.transform = `translate(`+width+`px)`;      
        index -= 1;
    });
 
    document.addEventListener(`keydown`, (e) => {
        if (e.key === `ArrowRight` && !RB.classList.contains(`hidden`)) {
            RB.click();
        } else if (e.key === `ArrowLeft` && !LB.classList.contains(`hidden`)) {
            LB.click();
        }
    });
 
};
