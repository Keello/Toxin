let elem = document.querySelector(".search__filters-button");
if(elem){
  elem.onclick = ()=>{
    document.querySelector(".search__filters").classList.toggle('active');
  }
}

