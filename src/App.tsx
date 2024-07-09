import {ToastContainer} from 'react-toastify'
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import 'react-toastify/ReactToastify.css'

function App() {
 
  return (
    <>
      <div className=" container mx-auto md:mt-20 mt-10">
        <h1 className="font-black md:text-5xl text-3xl md:w-2/3 mx-auto text-center">
          Pacientes {''}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="md:mt-12 mt-7 md:flex">
          <PatientForm/>
          <PatientList/>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
