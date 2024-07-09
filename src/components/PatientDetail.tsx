import { Patient } from "../types"
import PatientDetailItem from "./PatientDetaiItem"
import { usePatientStore } from "../store"
import { toast } from "react-toastify"

type PatientDetailprops = {
    patient:Patient
}

export default function PatientDetail({patient}:PatientDetailprops) {
    const deletePatient = usePatientStore(store => store.deletePatient)
    const getPatientById = usePatientStore(store => store.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado')
    }

    return (
        <div className="md:mx-5 mx-2 md:my-10 my-5 md:px-5 px-3 pd:my-10 py-5 bg-white shadow-lg rounded-xl ">
            <PatientDetailItem
            label="ID"
            data={patient.id}
            />
            <PatientDetailItem
            label="Name"
            data={patient.name}
            /> 
            <PatientDetailItem
            label="Propietario"
            data={patient.caretaker}
            /> 
            <PatientDetailItem
            label="Email"
            data={patient.email}
            /> 
            <PatientDetailItem
            label="Fecha Alta"
            data={patient.date.toString()}
            />
            <PatientDetailItem
            label="Sintomas"
            data={patient.symptoms}
            />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10 ">
                <button
                type="button"
                className="md:py-2 py-1 md:px-10 px-5 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-lg"
                onClick={() => getPatientById(patient.id)}
                >Editar
                </button>

                <button
                type="button"
                className="md:py-2 py-1 md:px-10 px-5 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                onClick={handleClick}
                >Eliminar
                </button>

            </div>

        </div>
    )
}
