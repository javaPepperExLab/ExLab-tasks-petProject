import NotFound from '../../pages/not-found/not-found';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import Header from '../../components/header/header';
import '../../scss/app.scss';
import RegistrationForm from '../../components/registration-form/registration-form';
// import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <RegistrationForm />
      {/* <LoginForm />  */}
    </div>
  );
}

export default App;
