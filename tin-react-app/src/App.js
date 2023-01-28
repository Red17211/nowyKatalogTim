import Header from './components/fragments/Header';
import Navigation from './components/fragments/Navigation';
import MainContent from './components/other/MainContent';
import Footer from './components/fragments/Footer';
import {Routes, Route } from 'react-router-dom';
import ExamList from './components/egzamin/ExamList';
import PersonList from './components/osoba/PersonList';
import QuestionExamList from './components/Pytanie_egzamin/QuestionExamList';
import QuestionList from './components/pytanie/QuestionList';
function App() {

  return (
  <>
     <Header />
     <Navigation />
     <Routes>


         <Route path="/" element={<MainContent />}/>
         <Route path="persons">
              <Route index={true} element={<PersonList />} />
         </Route>
         <Route path="exams">
               <Route index={true} element={<ExamList />} />
         </Route>
         <Route path="questionExam">
                <Route index={true} element={<QuestionExamList />} />
         </Route>
         <Route path="question">
               <Route index={true} element={<QuestionList />} />
         </Route>
</Routes>
    <Footer />
  </>
  );
}


export default App;
