import '../node_modules/jquery-ui/ui/widgets/slider'

import '~fonts/material-icons/material-icons.css'
import '~blocks/calendar/datepicker.css'
import './main.scss'

import '~blocks/calendar/datepicker'
import '~blocks/menu/menu'
import '~blocks/dropdown/dropdown'
import '~blocks/expandable-list/expandable-list'
import '~blocks/pagination/pagination'
import '~blocks/carousel/carousel'
import '~blocks/range-slider/range-slider'
import '~blocks/burger/burger'


function ibg(){
  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      let src = (ibg[i].querySelector('img').getAttribute('src')).slice(2);
      ibg[i].style.backgroundImage = 'url('+src+')';
    }
  }
}
ibg();