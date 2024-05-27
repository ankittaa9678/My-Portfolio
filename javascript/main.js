const slides=document.querySelectorAll(".slide");
const slide2=document.querySelectorAll(".slide2");
const length1=slides.length;
const length2=slide2.length;
var counter=0;
var count=0;
console.log(slides);

slide2.forEach(
    (slide2,index)=>{
 slide2.style.left=`${index*100}%`
}
)

const goNew=()=>{
    if(count<length2-1){
    count++;
    slide2Image();
    }
}

const goPrev=()=>{
    if(count!=0){
    count--;
    slide2Image();
}
}

const slide2Image=()=>{
    slide2.forEach(
        (slide2)=>{
        slide2.style.transform=`translateX(-${count*100}%)`
        }
    )
}

slide2Image()








slides.forEach(
    (slide,index)=>{
 slide.style.left=`${index*100}%`
}
)
const goNext=()=>{
    if(counter<length1-1){
    counter++;
    slideImage();
    }
}

const goPrevious=()=>{
    if(counter!=0){
    counter--;
    slideImage();
}
}

const slideImage=()=>{
    slides.forEach(
        (slides)=>{
        slides.style.transform=`translateX(-${counter*100}%)`
        }
    )
}
slideImage();
