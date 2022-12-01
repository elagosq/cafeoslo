function navegacionScroll(){
  const elementoNavegacion = document.querySelector('.topnav');
  const navegacionAltura   = elementoNavegacion.clientHeight;
  const elementoReferencia = document.querySelector('.topheader');
   
 function revisarPosicion(){
  	
  	const posicionY = elementoReferencia.getBoundingClientRect().bottom;

    if(posicionY - navegacionAltura < 0){
       elementoNavegacion.classList.add('scroll');
  	}else{
       elementoNavegacion.classList.remove('scroll');
  	} 
  }

  window.addEventListener('scroll',revisarPosicion);
}

navegacionScroll();