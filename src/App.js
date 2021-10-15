import React from 'react';
import './App.css';

import AddButton from './components/UI/buttons/AddButton';
import DeleteButton from './components/UI/buttons/DeleteButton';

import Heading1 from './components/UI/headlines/Heading1';
import Heading2 from './components/UI/headlines/Heading2';
import Heading3 from './components/UI/headlines/Heading3';
import Heading4 from './components/UI/headlines/Heading4';
import Heading5 from './components/UI/headlines/Heading5';
import Heading6 from './components/UI/headlines/Heading6';

import NormalText from './components/UI/texts/NormalText';
import ItalicText from './components/UI/texts/ItalicText';
import BoldText from './components/UI/texts/BoldText';

import Anchor from './components/UI/anchor/Anchor';

function App() {
  return (
    <div>
      <AddButton>Добавить</AddButton>
      <DeleteButton>Удалить</DeleteButton>
      <Heading1>Заголовок 1</Heading1>
      <Heading2>Заголовок 2</Heading2>
      <Heading3>Заголовок 3</Heading3>
      <Heading4>Заголовок 4</Heading4>
      <Heading5>Заголовок 5</Heading5>
      <Heading6>Заголовок 6</Heading6>
      <NormalText>Один из самых вкусных и любимых десертов
      в моей семье - торт "Наполеон". Его приготовление не
      назовешь простым и быстрым, но результат, безусловно,
      стоит этих усилий. Торт получается изумительно вкусным,
      с тонкими коржами и нежнейшим</NormalText>
      <ItalicText>Один из самых вкусных и любимых десертов
      в моей семье - торт "Наполеон". Его приготовление не
      назовешь простым и быстрым, но результат, безусловно,
      стоит этих усилий. Торт получается изумительно вкусным,
      с тонкими коржами и нежнейшим</ItalicText>
      <BoldText>Один из самых вкусных и любимых десертов
      в моей семье - торт "Наполеон". Его приготовление не
      назовешь простым и быстрым, но результат, безусловно,
      стоит этих усилий. Торт получается изумительно вкусным,
      с тонкими коржами и нежнейшим</BoldText>
      <Anchor>Ссылка</Anchor>
    </div>
  );
}

export default App;
