const mainReview = document.querySelector('.review')
const btnSiguiente = document.querySelector('#btnNext')
const btnAnterior = document.querySelector('#btnBack')



let rev = 0;

const carousel  = (review)=> {
    let reviews = document.getElementsByClassName("userReview");

    if(review >= reviews.length){
        review = 0;
        rev = 0;
    }
    if(review < 0){
        review = reviews.length-1;
        rev = reviews.length-1;
    }
    for (let i = 0; i < reviews.length; i++) {
      reviews[i].style.display = "none";
    }
    
    reviews[review].style.display = "block";
    


}
carousel(rev);

btnSiguiente.addEventListener('click', ()=>{
   
    rev++;
    carousel(rev);
    
})

btnAnterior.addEventListener('click', ()=>{
   
    rev--;
    carousel(rev);
    
})