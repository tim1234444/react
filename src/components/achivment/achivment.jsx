export default function Achivment(){
    return(
        <section className="achivment">
                <div className="container achivment__container">
                    <h2 className ="achivment__title">
                        <b>Robo School </b>– учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования
                    </h2>
                    <div className="achivment__grid-list">
                        <div className="achivment__item">
                            <h1 className = "achivment__amount">10</h1>
                            <p className="description">УМК по различным направлениям по робототехнике</p>
                        </div>
                        <div className="achivment__item">
                            <h1 className = "achivment__amount">20</h1>
                            <p className="description">Школ, в которых запущена робототехника</p>
                        </div>
                        <div className="achivment__item">
                            <h1 className = "achivment__amount">100</h1>
                            <p className="description">Педагогов прошедших курсы повышения квалификации</p>
                        </div>
                        <div className="achivment__item">
                            <h1 className = "achivment__amount">10 000</h1>
                            <p className="description">Обученных детей на базе собственных центров</p>
                        </div>
                    </div>
                </div>
                
            </section>
    )
}