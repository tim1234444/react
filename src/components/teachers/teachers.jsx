
import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
// Import Swiper styles



export default function Teachers(){
    window.onload = function() {
        // Ваш скриптconst 
        swiper = new Swiper('#teacher', {
        modules: [Navigation, Scrollbar],
        loop: true,
        slidesPerView: 3,
        spaceBetween: 40,
        breakpoints: {
          319: {
            spaceBetween: 24,
            slidesPerView: 1.4
          },
          576: {
            spaceBetween: 30,
            slidesPerView: 2
          },
          1024: {
            spaceBetween: 40,
            slidesPerView: 3
          }
        },
        navigation: {
          prevEl: '.prev',
          nextEl: '.next'
        },
        scrollbar: {
            el: '.swiper__scrollbar'
          }
    })
     };
    
    
    return(
    <section className="teacher"  id='coachers'>
    <div className="container teacher_container">
        <h1 className="title">
            Профессиональные тренеры
        </h1>
        <div className='teacher__content'>
        <div className="swiper" id='teacher'>
            <div className="swiper-wrapper">
                    <div className="teacher__item swiper-slide">
                        <img src="img/people1.jpg"/>
                        <h2 className="subtitle">
                            Ирина Лайм
                        </h2>
                        <p className="description">Преподователь по робототехнике</p>
                        <p className="description teacher__description">Подробнее</p>
                    </div>
                    <div className="teacher__item swiper-slide">
                        <img src="/img/people2.jpg"/>
                        <h2 className="subtitle">
                            Марина Орлова
                        </h2>
                        <p className="description">Преподователь по робототехнике</p>
                        <p className="description teacher__description">Подробнее</p>
                    </div>
                    <div className="teacher__item swiper-slide">
                        <img src="/img/people3.jpg"/>
                        <h2 className="subtitle">
                            Марина Орлова
                        </h2>
                        <p className="description">Преподователь по робототехнике</p>
                        <p className=" description teacher__description">Подробнее</p></div>
                    <div className="teacher__item swiper-slide">
                        <img src="/img/people4.jpg"/>
                        <h2 className="subtitle">
                            Марина Орлова
                        </h2>
                        <p className="description">Преподователь по робототехнике</p>
                        <p className="description teacher__description">Подробнее</p></div>
                    <div className="teacher__item swiper-slide">
                        <img src="/img/people5.jpg"/>
                        <h2 className="subtitle">
                            Марина Орлова
                        </h2>
                        <p className="description">Преподователь по робототехнике</p>
                        <p className="description teacher__description">Подробнее</p></div>

            </div>
            <div className="swiper__navigation">
                
                <div className="swiper__scrollbar">

                </div>
                <div className="actions">
                
                <div className="prev"></div>
                <div className="next"></div>

                </div>
            </div>
            </div>
        </div>
    </div>
</section>)
}