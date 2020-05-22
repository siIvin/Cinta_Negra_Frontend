import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {StudentCard} from '../components'


const StudentList = () =>{
    const {axiosInstance} = useContext(AuthContext);
    const [students, setStudent] = useState ([])
    const [text, setText]= useState('Cargando estudiantes')
    const getStudents = () => axiosInstance.get('/api/v1/students');

    useEffect (()=>{
        getStudents()
        .then((response)=>{
            const students = response.data;
            setStudent (students);
            setText (`Hay ${students.length} inscritos a la biblioteca`)
        })
        .catch(()=>setText('No hay estudiantes inscritos'))
    }, [])

    return(
        <React.Fragment>
            {students.map((student)=>{
                return(  
                <StudentCard
                key ={student._id}
                first_name= {student.first_name}
                last_name ={student.last_name}
                dateOfBirth = {student.dateOfBirth}/>
            )})}
        </React.Fragment>
    );

}

export default StudentList