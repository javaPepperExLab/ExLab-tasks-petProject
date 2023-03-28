import NotFound from '../../pages/not-found/not-found';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import Header from '../../components/header/header';
import '../../scss/app.scss';
// import RecoveryFormSuccess from '../recovery-form/recovery-form-success';
// import InviteForm from '../invite-form/invite-form';
// import ChangePassword from '../change-password/change-password';
// import ChangePasswordSuccess from '../change-password/change-pass-success';
// import RegistrationForm from '../../components/registration-form/registration-form';
import RecoveryForm from '../recovery-form/recovery-form';
// import LoginForm from '../../components/login-form/login-form';

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
      {/* <RecoveryFormSuccess /> */}
      {/* <InviteForm /> */}
      {/* <ChangePasswordSuccess /> */}
      {/* <ChangePassword /> */}
      <RecoveryForm />
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
