import './scss/main.scss'

import '../node_modules/jquery-ui/ui/widgets/slider'

import '~blocks/calendar/datepicker'
import '~blocks/menu/menu'
import '~blocks/dropdown/dropdown'
import '~blocks/expandable-list/expandable-list'
import '~blocks/pagination/pagination'
import '~blocks/carousel/carousel'
import '~blocks/range-slider/range-slider'
import '~blocks/burger/burger'
import '~blocks/diagram/diagram'
import './js/search-room'


function ibg(){
  let ibg=document.querySelectorAll(".ibg");
  ibg.forEach(elem => {
    if(elem.querySelector('img')){
      let src = (elem.querySelector('img').getAttribute('src')).slice(2);
      elem.style.backgroundImage = 'url('+src+')';
    }
  });
}
ibg();

