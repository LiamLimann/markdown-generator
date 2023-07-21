'use strict';

const create = require('./lib/create.js');

{
  const datas = [
    [
      'Node.js Введение в технологию',
      'https://youtu.be/WBcHgaoHh1k',
      '02:53 Основные идеи Node.js',
      '13:09 Приемущества/Недостатки JavaScript',
      '16:58 Что такое Node.js',
      '20:52 Начало работы с Node.js',
      '25:00 Встроенный API',
      '33:55 Менеджер пакетов NPM',
      '40:45 Структура проектов',
      '44:35 Файлы package.json, package-lock.json',
      '52:03 Репозиторий NPM',
      '59:50 Однопоточность и многопоточность',
      '1:05:30 Межпроцессовое взаимодействие',
      '1:06:08 Асинхронный ввод/вывод',
      '1:11:11 Производительность',
      '1:13:02 Память',
      '1:16:21 Отладка и профилирование',
      '1:21:27 Ошибки',
      '1:26:42 Обновление кода и перезапуск',
      '1:28:43 Ассинхронное программирование',
      '1:30:00 Примеры внедрения, интеракт. TV',
      '1:31:00 Сферы применения Node.js',
      '1:36:44 Полезные материалы',
    ],
    [
      'Node.js в 2019 году (состояние и перспективы)',
      'https://youtu.be/CUU49jjHloM',
      '00:45 Node.js уже 10 лет',
      '05:39 Обзор новых возможностей Node.js',
      '18:14 Возможности для параллельного программирования на Node.js',
      '20:08 Как работают thread и process в Node.js',
      '20:47 Обзор последствий отсутствия изоляции в Node.js',
      '20:33 Проблемы отсутствия изоляции в Node.js',
      '38:27 Способы изоляции Node.js кода',
      '48:24 Изоляция и кластеризация с threads в Node.js v12',
      '56:59 Области применения Node.js: Локальные приложения',
      '1:02:02 Области применения Node.js: Сервера',
      '1:05:49 Области применения Node.js: Клиенты',
      '1:08:58 Области применения Node.js: Hardware',
      '1:09:28 Редкие области применения Node.js',
      '1:11:55 Не подходящие области применения Node.js',
      '1:13:53 Deno как экспериментальная альтернатива Node.js',
      '1:21:02 Обзор ссылок по теме',
      '1:23:06 Ответы на вопросы'
    ]
  ];

  create('./multiple.md', datas);
}

{
  const data = [
    'Node.js Введение в технологию',
    'https://youtu.be/WBcHgaoHh1k',
    '02:53 Основные идеи Node.js',
    '13:09 Приемущества/Недостатки JavaScript',
    '16:58 Что такое Node.js',
    '20:52 Начало работы с Node.js',
    '25:00 Встроенный API',
    '33:55 Менеджер пакетов NPM',
    '40:45 Структура проектов',
    '44:35 Файлы package.json, package-lock.json',
    '52:03 Репозиторий NPM',
    '59:50 Однопоточность и многопоточность',
    '1:05:30 Межпроцессовое взаимодействие',
    '1:06:08 Асинхронный ввод/вывод',
    '1:11:11 Производительность',
    '1:13:02 Память',
    '1:16:21 Отладка и профилирование',
    '1:21:27 Ошибки',
    '1:26:42 Обновление кода и перезапуск',
    '1:28:43 Ассинхронное программирование',
    '1:30:00 Примеры внедрения, интеракт. TV',
    '1:31:00 Сферы применения Node.js',
    '1:36:44 Полезные материалы',
  ];

  create('./single.md', data);
}
