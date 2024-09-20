import From from "./components/From"
import Display from "./components/Display"

function App() {

  const mainContainer = {
    container : "w-screen h-screen flex justify-center items-center bg-yellow-200",
    innerContainer : "h-[500px]"
  }

  return (
    <>
      <div className={mainContainer.container}>
        {/* Form container */}
        <div className={`${mainContainer.innerContainer} w-[30%]`}>
          <From/>
        </div>
        
        {/* Display container - hidden on small screens (mobile) */}
        <div className={`${mainContainer.innerContainer} w-[40%] none md:block`}>
          <Display/>
        </div>
      </div>
    </>
  )
}

export default App
