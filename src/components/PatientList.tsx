import { usePatientStore } from "../store"
import PatientDetail from "./PatientDetail"

export default function PatientList() {
  const patients = usePatientStore(state => state.patients)
  return (
    <div className="md:w-1/2 lg:3/5 h-screen overflow-y-scroll">
      {patients.length ? (
        <>
        <h2 className="font-black md:text-3xl text-xl text-center">Listado de Pacientes</h2>
          <p className="md:text-xl text-base md:mt-5 mt-3 md:mb-10 mb-5 text-center"> Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
            {patients.map(patient => (
              <PatientDetail
              key={patient.id}
              patient={patient}
              />
            )
            )}
        </>
    ): (
    <>
      <h2 className="font-black md:text-3xl text-xl text-center">No hay Pacientes</h2>
      <p className="md:text-xl text-base md:mt-5 mt-3 md:mb-10 mb-5 text-center">Comienza agregando pacientes {''}
        <span className="text-indigo-600 font-bold">y apareceran en este apartado</span>
      </p>
    </>
    )}
    </div>
  )
}
