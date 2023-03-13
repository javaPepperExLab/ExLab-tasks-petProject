import React from 'react';

type SidebarProps = {
  setInviteFormHandle: () => void;
}
function Sidebar({ setInviteFormHandle }: SidebarProps) {

  return (
    <div className="sidebar">
      <button className="sidebar__create--btn">+ создать</button>
      <div className="sidebar__buttons">
        <button>Главная</button>
        <button>Уведомления</button>
        <ul>
          Рабочие пространства
          <li className="active">ExLab</li>
          <li className="active">Ad.INC</li>
          <li className="active">Healthy life</li>
        </ul>
        <ul>
          Избранное
          <li className="active">Доска 1</li>
          <li className="active">Доска 2</li>
          <li className="active">Доска 3</li>
        </ul>
        <button>Шаблоны</button>
        <button>Помощь</button>
      </div>
      <button className="sidebar__invite--btn"
        onClick={setInviteFormHandle}
      >
          Пригласить +
      </button>
    </div>
  );
}

export default Sidebar;
