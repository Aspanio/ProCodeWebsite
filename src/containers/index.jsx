import React from 'react';

import Header from '../components/Header';
import Topbar from '../components/Topbar';
import Features from '../components/Features';
import Secrets from '../components/Secrets';
import PostForm from '../components/PostForm';
import PriceBoard from '../components/PriceBoard';
import Place from '../components/Place';
import Companies from '../components/Companies';
import SpecialOffer from '../components/SpecialOffer';
import Education from '../components/Education';

const educationPlan = [
  {
    header: 'Science & Tools',
    items: [
      'Client-server model',
      'Base Unix Console',
      'Git, Jira, SCRUM',
    ],
  },
  {
    header: 'Frontend',
    items: [
      '12 практических тем по основам JS',
      'ES6, Babel',
      'WebPack',
      '7 практических тем React/Redux',
      'Тестирование Mocha, Jest',
    ],
  },
  {
    header: 'Backend',
    items: [
      'Окружение серверного JS',
      'Модульность, глобальные объекты',
      'Паралельное выполнение, Event loop',
      'Кластеризация',
      'Работа с файлами, стрим данных',
      'HTTP(S) сервер, TCP',
      'Express.js (7 тем)',
      'WebSockets, нативный ws',
      'Socket.io (5 тем)',
      'Микросервисы',
      'Основы облачных систем',
      'Нейросети и теория графов (6 тем)',
    ],
  },
  {
    header: 'Базы Данных',
    items: [
      'Введение в базы данных, категоризация баз данных',
      'SQL основные операции, MySQL',
      'индексация, углубленно',
      'join и внешние ключи',
      'MongoDB основные операции',
      'углубленно MongoDB',
      'Mongoose, работа со схемами, углубленно',
    ],
  },
  {
    header: 'English Speaking Club',
    items: [
      'Суботние занятия, основной упор в разговорную практику, native speaker',
    ],
  },
];

const Container = () => (
  <div>
    <Topbar />
    <Header />
    <Features />
    <Secrets />
    <Education obj={educationPlan} />
    <PostForm />
    <PriceBoard />
    <SpecialOffer />
    <Place />
    <Companies />
    <PostForm header="остались вопросы?" />
  </div>
);


export default Container;
