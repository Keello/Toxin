class Dropdown{
  constructor(elem){
    this.$el = elem;
    this.setup();
  }

  clickHandler(){
    const {type} = event.target.dataset;

    if(type === 'backdrop'){
      this.confirm();
      this.close();
    }

    if(type === 'input'){
      this.toggle();
    }

    if(type === 'counter-minus'){
      let counter = event.target.nextElementSibling;
      counter.value--;
      if(counter.value == 0){
        event.target.setAttribute('disabled', 'disabled');
      }
    }

    if(type === 'counter-plus'){
      let counter = event.target.previousElementSibling;
      let btnMinus = counter.previousElementSibling;
      counter.value++;
      if(counter.value > 0 && btnMinus.hasAttribute('disabled')){
        btnMinus.removeAttribute('disabled');
      }
    }

    if(type === 'clear'){
      this.clear();
    }
    if(type === 'confirm'){
      this.confirm();
    }
  }

  setup(){
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
  }

  close(){
    this.$el.classList.remove('open');
  }

  confirm(){
    event.preventDefault();
    let sum = 0;
    let numbers = this.$el.querySelectorAll('.dropdown__number');
    numbers.forEach(number => sum+= +number.value);
    this.$el.querySelector('.dropdown__input').value = "Сумма счетчиков: " + sum;
  }

  clear(){
    event.preventDefault();
    let numbers = this.$el.querySelectorAll('.dropdown__number');
    numbers.forEach(number => {
      number.value = 0;
      number.previousElementSibling.setAttribute('disabled', 'disabled');
    });
    this.$el.querySelector('.dropdown__input').value = "";
  }

  toggle(){
    this.$el.classList.toggle('open');
  }

}

let elems = document.querySelectorAll('.dropdown');
elems.forEach(elem => new Dropdown(elem));