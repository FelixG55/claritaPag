import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ContenidoQuienSoy from './ContenidoQuienSoy'
import ContenidoPlanTrabajo from './PlanTrabajo/ContenidoPlanTrabajo'
import ObjetivoGeneral from './ObjetivoGeneral/ObjetivoGeneral'
import ContenidoNosotros from './Nosotros/ContenidoNosotros'
import BannerSocials from './BannerSocials'

const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(()=> {

    var inconElement1 = document.getElementById("icon1");
    var inconElement2 = document.getElementById("icon2");
    var inconElement3 = document.getElementById("icon3");
    var inconElement4 = document.getElementById("icon4");

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    if (scrollPosition > 13.67 && scrollPosition < 1357.39 ) {
      inconElement1.style.color = "#003956";
    }else{
      inconElement1.style.color = "";
    }

    if (scrollPosition > 37.85 && scrollPosition < 1384.09) {
      inconElement2.style.color = "#003956";
    }else{
      inconElement2.style.color = "";
    }

    if (scrollPosition > 55.6 && scrollPosition < 1405.84) {
      inconElement3.style.color = "#003956";
    }else{
      inconElement3.style.color = "";
    }

    if (scrollPosition > 82.14 && scrollPosition < 1434.05) {
      inconElement4.style.color = "#003956";
    }else{
      inconElement4.style.color = "";
    }

    // Agrega un listener de evento de desplazamiento cuando el componente está montado
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[scrollPosition])
  console.log(scrollPosition);
  
  return (
    <React.Fragment>
        <BannerSocials/>
        <Header/>
        <ContenidoQuienSoy/>
        <ContenidoPlanTrabajo/>
        <ObjetivoGeneral/>
        <ContenidoNosotros/>
        <Footer/>
    </React.Fragment>
      
  )
}

export default Home