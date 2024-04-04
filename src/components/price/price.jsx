export default function Price(){
    return(
    <section className="price">
            <div className="container price__container">
                <h1 className="title">Выберите нужный пакет</h1>
                <div className="price__grid-list">
                    <div className="price__item">
                        <h1 className="price__course-name">— PRO —</h1>
                        <div className="price__content">
                            <h1 className="title">20.000 ₽</h1>
                            <p className="description description--black">УМК по робототетхнике<br /> и программированию</p>
                        </div>
                        <button className="btn-click price_btn-click ">Оставить заявку</button>
                    </div>
                    <div className="price__item">
                        <h1 className="price__course-name">— PRO —</h1>
                        <div className="price__content">
                            <h1 className="title">15.000 ₽</h1>
                            <p className="description description--black">УМК по робототехнике</p>
                        </div>
                        <button className="btn-click price_btn-click">Оставить заявку</button>
                    </div>
                    <div className="price__item">
                        <h1 className="price__course-name">— PRO —</h1>
                        <div className="price__content">
                            <h1 className="title">10.000 ₽</h1>
                            <p className="description description--black">УМК программированию</p>
                        </div>
                        <button className="btn-click price_btn-click">Оставить заявку</button>
                    </div>
                </div>
            </div>
            </section>
       )
}