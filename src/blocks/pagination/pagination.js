export class Pagingation {
  constructor(elem){
    this.$el = elem;
    this.init({
      pages: 15,
      curPageNumber: 1,
      pagesRange: 2,
      itemsOnPage: 12,
      item: '.pagination__item',
      prev: '.pagination__item_prev',
      next: '.pagination__item_next',
    })
  }

  init(options){
    this.pages = options.pages,
    this.curPageNumber = options.curPageNumber,
    this.pagesRange = options.pagesRange,
    this.itemsOnPage = options.itemsOnPage,
    this.item = options.item,
    this.prev = this.$el.querySelector(options.prev),
    this.next = this.$el.querySelector(options.next),
    this.curPage = this.findPage(this.curPageNumber),

    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);

    if(this.curPageNumber > 1) this.showElem(this.prev);
    if(this.curPageNumber === this.pages) this.hideElem(this.next);
    this.findPage(this.curPageNumber).classList.add('pagination__item_active');

    this.drawPages();
  }

  drawPages(){
    let items = this.$el.querySelectorAll('li[data-page]');
    items.forEach(item => this.showElem(item));
    items.forEach((item, index) =>{
      let min = this.curPageNumber - this.pagesRange - 1;
      let max = this.curPageNumber + this.pagesRange - 1;
      if((index >= min)&&(index <= max)){

      }
      else if(index === 0 || index === this.pages-1){

      }
      else this.hideElem(item);
    });
  }

  clickHandler(){
    const {type} = event.target.dataset
    if(type === 'prev'){
      this.prevPage();
    }
    if(type === 'next'){
      this.nextPage();
    }
    if(type === 'page'){
      this.curPageToggle(+event.target.dataset.page);
    }
  }

  prevPage(){
    if(this.curPageNumber > 1){
      this.curPage.classList.remove('pagination__item_active');
      this.curPage = this.findPage(+this.curPageNumber-1);
      this.curPage.classList.add('pagination__item_active');
      this.curPageNumber--;
    }
    if(this.curPageNumber === 1){
      this.hideElem(this.prev);
    }
    if(this.curPageNumber < this.pages){
      this.showElem(this.next);
    }
    this.drawPages();
  }

  nextPage(){
    if(this.curPageNumber < this.pages){
      this.curPage.classList.remove('pagination__item_active');
      this.curPage = this.findPage(+this.curPageNumber+1);
      this.curPage.classList.add('pagination__item_active');
      this.curPageNumber++;
    }
    if(this.curPageNumber === this.pages){
      this.next.classList.add('pagination__item_hide');
    }
    if(this.curPageNumber>1){
      this.showElem(this.prev);
    }
    this.drawPages();
  }

  curPageToggle(number){
    this.curPage.classList.remove('pagination__item_active');
    this.curPage = this.findPage(number);
    this.curPage.classList.add('pagination__item_active');
    this.curPageNumber = number;
    if(number === 1){
      this.hideElem(this.prev);
    }else if(number === this.pages){
      this.hideElem(this.next);
    }
    else{
      this.showElem(this.prev);
      this.showElem(this.next);
    }
    this.drawPages();
  }

  findPage(number){
    let elem = this.$el.querySelector(`li[data-page='${number}']`)
    return elem;
  }

  hideElem(elem){
    elem.classList.add('pagination__item_hide');
  }

  showElem(elem){
    elem.classList.remove('pagination__item_hide');
  }
}

let elems = document.querySelectorAll('.pagination');
elems.forEach(elem => new Pagingation(elem));