### Для запуску проекту нам потрібно завантажити:

- [Node.js v16](https://github.com/nvm-sh/nvm)
- [yarn >=1.22](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)


>### Встановлення залежностей:
> - <p>Відкриваємо термінал в руті проекту</p>
> - cd ./api # <em>перехід в директорію з сервером</em>
> - yarn install # <em>інсталяція node_modules</em>
> - додати дані в .env файл

>### Запуск сервера в dev режимі: 
> - yarn run:dev

>### <p>Запуск бази даних</p>
> - docker compose build # <em>один раз</em>  
> - docker compose up # <em>кожен раз при запуску</em>
> - docker compose down # <em>зупинити</em>


### Вирішення проблем
> - якщо підтягується база даних з комп'ютора а не з docker на windows 
https://www.commandprompt.com/education/how-to-start-stop-or-restart-the-postgresql-server/
