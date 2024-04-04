import Header from "./header/header.jsx"
import HelloSchool from "./hello_school/hello_school.jsx"
import Achivment from "./achivment/achivment.jsx"
import End_course from "./end_course/end_course.jsx"
import Teachers from "./teachers/teachers"
import Price from "./price/price.jsx"
import Report from "./report/report.jsx"
import Footer from "./footer/footer.jsx"
// swiper



function App() {
  
    
  return (
      <>
      
        <Header/>
         <main>
            <HelloSchool/>
            <Achivment/>
            <End_course/>
            <Teachers/>
            <Price/>
            <Report/>
            <Footer/>
          </main>
      </>
  )
}

export default App