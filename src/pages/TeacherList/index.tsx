import React from 'react';
import './styles.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';


function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponiveis">
                <form id="search-teachers">
                  <div className="input-block">
                      <label htmlFor="subject">Matéria</label>
                      <input type="text" id="subject"/>
                  </div>
                  <div className="input-block">
                      <label htmlFor="week-day">Dias da semana</label>
                      <input type="text" id="week-day"/>
                  </div>
                  <div className="input-block">
                      <label htmlFor="time">Hora</label>
                      <input type="text" id="time"/>
                  </div>
                </form>
            </PageHeader>

            <main>
               <TeacherItem />
               <TeacherItem /> 
               <TeacherItem /> 
               <TeacherItem />  
            </main>
        </div>
    )
}

export default TeacherList;