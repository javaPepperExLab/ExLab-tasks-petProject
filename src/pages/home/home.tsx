import React from 'react';
import { useState } from 'react';
import InviteForm from '../../components/invite-form/invite-form';
import Main from '../../components/main/main';
import Sidebar from '../../components/sidebar/sidebar';

function Home() {

  const [ inviteFormActive, setInviteFormActive ] = useState<boolean>(false);

  // ЗАКРЫВАЕМ И ОТКРЫВАЕМ ФОРМУ
  const setInviteFormHandle = () => {
    setInviteFormActive(!inviteFormActive);
  };

  return (
    <div className="home">
      <Sidebar
        setInviteFormHandle={setInviteFormHandle}
      />
      <Main />
      {inviteFormActive ?
        <InviteForm /> :
        null}
    </div>
  );
}

export default Home;
