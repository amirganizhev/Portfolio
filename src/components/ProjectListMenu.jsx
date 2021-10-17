import React from 'react';
import classes from './styles/ProjectListMenu.module.css';

import Anchor from './UI/anchor/Anchor';
import Heading1 from './UI/headlines/Heading1';

const ProjectListMenu = (props) => {

  return (
    <div className={classes.projectListMenu}>
      <div className={classes.projectListHeader}>
        <Heading1>Список всех проектов</Heading1>
      </div>
      <div className={classes.linksProjects}>
        <a><Anchor>Описание портфолио</Anchor></a>
        <a><Anchor>Банковское приложение</Anchor></a>
        <a><Anchor>Paint-онлайн</Anchor></a>
      </div>
    </div>
  )

}

export default ProjectListMenu;
