import From from "./components/From"
import Display from "./components/Display"
function App() {

  const mainContainer = {
    container : "w-screen h-screen flex justify-center items-center bg-yellow-200",
    innerContainer : " h-[500px]"
  }
   

  return (
   <>
  <div className= {mainContainer.container}>
    <div className={`${mainContainer.innerContainer} w-[30%]`}>
    <From/>
    </div>
    <div className={`${mainContainer.innerContainer} w-[40%]`}>
        <Display/>
    </div>
  </div>
   </>
  )
}

export default App

//formicc for form henadal and yup for file 