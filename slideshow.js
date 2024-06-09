
let slide_Index = 1;

show_Slides(slide_Index);

function add_Slides(slides_To_Add) {
  slide_Index += slides_To_Add;
  show_Slides(slide_Index);
}

function set_Slide(slide_Num){
  slide_Index = slide_Num;
  show_Slides(slide_Index);
}

function show_Slides(slide_To_Show){
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if(slide_To_Show > slides.length) {slide_Index = 1}
  if(slide_To_Show < 0) {slide_Index = slides.length}
}

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
