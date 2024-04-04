export default function Report(){
    return( <section className="report">
    <div className="container report__container">
        <div className="report__left">
              <h2 className="report__title">Запишитесь на курс <br/> со скидкой 10%</h2>
              <p className="description description--white">Акция действительна до 10 марта 2022 года</p>
          </div>
          <form  className="form ">
              <input type="text" className="form__input " placeholder="Имя"/>
              <input type="tel" className="form__input" placeholder="Телефон"/>
              <input type="email" className="form__input" placeholder="E-mail"/>
              <button className="form__button " type="submit"> Оформить заявку</button>
          </form>
    </div>
  </section>)
}