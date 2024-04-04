import ToolTipComponent from "../ToolTipComponent/ToolTipComponent.jsx"
import ButtonComponent from "../button/ButtonComponent.jsx"
export default function End_course(){
return(<section className="end-course" >
                <div className="container end-course__container">
                    <h1 className="title">
                        Что вы получите после курса
                    </h1>
                    <div className="end-course__grid-list">
                        <div className="end-course__item">
                            <h2 className = "subtitle">Удостоверение</h2>
                            <p className="description">Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
                        </div>
                        <div className="end-course__item">
                            <h2 className = "subtitle">Знания</h2>
                            <p className="description">По основам разработки учебно-методических комплексов
                                по робототехнике и программированию</p>
                        </div>
                        <div className="end-course__item">
                            <div className="end-course__tooltip">
                                <h2 className = "subtitle">Практику</h2>
                                
                                <ToolTipComponent text={'При наличии свободных мест'} >
                                    <ButtonComponent />
                                </ToolTipComponent>
                                
                            </div>
                            <p className="description">Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)

                            </p>
                            

                        </div>
                    </div>
                </div>
            </section>)
}