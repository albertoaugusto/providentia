// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//styles
import './briefs.sass'

// import images clients
import acerti from '../../../../assets/clients/acerti-consultoria.png'
import central from '../../../../assets/clients/central-do-frango.png'
import doce from '../../../../assets/clients/doce-anjo.png'
import ipower from '../../../../assets/clients/ipower.png'
import nobre from '../../../../assets/clients/nobre-burger.png'
import rock from '../../../../assets/clients/rock-trends.png'
import techminas from '../../../../assets/clients/techminas.png'
import wd from '../../../../assets/clients/wd-games.png'


const Briefs = () => {

  return (
    <section className='briefs section container' id='about'>
        <h3 className="briefs-title">
            Clientes            
        </h3>
         <h3 className="briefs-subtitle">
            Alguns de nossos clientes
        </h3>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={'4'}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
      {/*card1*/}    
      <SwiperSlide className="swiper-card">
        <img src={acerti} alt="acerti consultoria" />
      </SwiperSlide>
      {/*card 2*/}
      <SwiperSlide className="swiper-card">
        <img src={central} alt="central do frango" />
      </SwiperSlide>
      {/*card 3*/}
      <SwiperSlide className="swiper-card">
        <img src={doce} alt="doce anjo" />
      </SwiperSlide>
      {/*card 4*/}
      <SwiperSlide className="swiper-card">
        <img src={ipower} alt="iPower" />
      </SwiperSlide>
      {/*card 5*/}
      <SwiperSlide className="swiper-card">
        <img src={nobre} alt="nobre burger" />
      </SwiperSlide>
      {/*card 6*/}
      <SwiperSlide className="swiper-card">
        <img src={rock} alt="rock trends" />
      </SwiperSlide>
      {/*card 7*/}
      <SwiperSlide className="swiper-card">
        <img src={techminas} alt="techminas store" />
      </SwiperSlide>
      {/*card 8*/}
      <SwiperSlide className="swiper-card">
        <img src={wd} alt="wd games" />
      </SwiperSlide>
    </Swiper>
    </section>  
  )
}

export default Briefs