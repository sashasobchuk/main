#!/usr/bin/env node

module.exports = {
  apps:[
    {
      name: 'front',
      script: 'yarn',
      args: 'workspace @root/front run dev2',
      // cwd: '/mnt/c/Users/Lenovo/Desktop/програмування і все з тим звязане/prog/main/nest',  // Шлях до вашої робочої директорії

      // interpreter: 'bash', // або 'sh', в залежності від налаштувань



      // name: 'front',
      // script: '/home/sasha/.nvm/versions/node/v20.18.2/bin/yarn', // ???? ?? ?????????? yarn
      // args: 'workspace @root/front run dev2',
      // merge_logs: true, // Об'єднання логів
      // interpreter: 'sh', // або 'sh', залежно від операційної системи

      // interpreter: 'cmd.exe', // Вказуємо cmd.exe для Windows
      // interpreter_args: '/c ', // Параметр для запуску команд через cmd
      // watch: true,
      // windowsHide: true, // Приховуємо вікно
      // max_restarts:1,
      // instances: 1, // Запускаем один экземпляр
      // exec_mode: 'fork', // Режим выполнения
    },
    {
      name: 'api',

      script: 'yarn', // ???? ?? ?????????? yarn
      args: 'workspace @root/api start:dev',
      // interpreter: 'cmd.exe', // Вказуємо cmd.exe для Windows
      // interpreter_args: '/c ', // Параметр для запуску команд через cmd
      // watch: true,
      // windowsHide: true, // Приховуємо вікно
      // max_restarts:1,
      // instances: 1, // Запускаем один экземпляр
      // exec_mode: 'fork', // Режим выполнения
    },
    {

      name:'dto',
      script: 'yarn',
      args:'workspace @root/dto dev'
    },



  ]
}
