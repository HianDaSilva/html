import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im1 from '../../images/Banner_ESFCEX.jpeg'
import im2 from '../../images/Banner_Intranet_OM.jpeg'
import im3 from '../../images/morcego.jpeg'


const Banner = () => {
  const settings = {
    dots: true, // Adiciona os pontos de navegação
    infinite: true, // Faz o carrossel rodar infinitamente
    speed: 500, // Velocidade da transição em ms
    slidesToShow: 1, // Quantidade de slides visíveis por vez
    slidesToScroll: 1, // Quantidade de slides a rolar por vez
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Intervalo de tempo entre slides no autoplay
  };

  return (
    <div class="banner" style={{ width: '80%', margin: 'auto' }}>
      <Slider {...settings}>
        <div>
          <img src={im1} alt="Banner 1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={im2} alt="Banner 2" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={im3} alt="Banner 3" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
