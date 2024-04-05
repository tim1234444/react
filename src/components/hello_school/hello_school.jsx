export default function HelloSchool(){
    return(
        <section className="first-section" >
        <div className="first-section__container container">
                <div className="first-section__text ">
                    <article className="first-section__text-article">
                        <h1 className="first-section__name-school">ROBO SCHOOL</h1>
                        <p className = "paragrath">Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
                        <button className = "first-section__btn-click btn-click">Записаться на курс</button>
                    </article>
                    
                </div>
                <div>
                <img className="first-section__image" src="img/log.png" alt="" />
                </div>
            </div>
            </section>
    )
}