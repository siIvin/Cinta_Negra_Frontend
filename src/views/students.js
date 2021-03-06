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
            console.log('students')
            console.log(students)
            setStudent (students);
            setText (`Hay ${students.length} inscritos a la biblioteca`)
        })
        .catch(()=>setText('No hay estudiantes inscritos'))
    }, [])

    return(
        <React.Fragment>
            <div className="dashboard">
            <div className="title">Estudiantes</div>
                {students.map((student)=>{
                    return(  
                    <StudentCard
                    key ={student._id}
                    _id={student._id}
                    first_name= {student.first_name}
                    last_name ={student.last_name}
                    dateOfBirth = {student.dateOfBirth}
                    readBooks = {student.readBooks}/>
                )})}
            </div>
        </React.Fragment>
    );

}

export default StudentList