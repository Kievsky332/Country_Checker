# Country_Checker

Веб-приложение для автоматического определения географического местоположения пользователя и отображения соответствующего флага страны.

![Static Badge](https://img.shields.io/badge/Kievsky332-Country_Checker-cyan)
![GitHub top language](https://img.shields.io/github/languages/top/Kievsky332/Country_Checker)
![GitHub](https://img.shields.io/github/license/Kievsky332/Country_Checker)
![GitHub Repo stars](https://img.shields.io/github/stars/Kievsky332/Country_Checker)

---

## Описание проекта

Приложение использует API сервиса 2ip для определения местоположения пользователя на основе IP-адреса. После получения данных о стране, скрипт запрашивает соответствующий флаг через API и динамически обновляет содержимое страницы.

> [!WARNING]
>  В настоящее время неофициальный API Tenor, использовавшийся для получения изображений флагов, недоступен. Из-за этого функция отображения флага временно не работает корректно и может показывать значение по умолчанию (флаг России). Проект оставлен в репозитории как демонстрация работы с асинхронными запросами (Fetch API) и геолокацией по IP.

---

## Стек технологий

- **HTML5** — базовая структура страницы
- **CSS3** — стилизация интерфейса и адаптивная верстка
- **JavaScript (ES6+)** — логика взаимодействия с внешними API (2ip, Tenor) и манипуляции с DOM

---

## Запуск локально

Проект является полностью статическим и не требует установки зависимостей.

1. Склонируйте репозиторий:
  ```bash
  git clone https://github.com/Kievsky332/Country_Checker.git
  ```
2. Перейдите в проект
   ```bash
   cd Country_Checker
   ```
3. Откройте файл index.html двойным кликом в любом современном браузере.
---
# Структура
```text
Country_Checker/
 ├── index.html       # Основная разметка страницы
 ├── style.css        # Файл стилей
 ├── script.js        # Логика запросов к API и обновления DOM
 └── LICENSE          # Лицензия проекта (MIT)
```
---

## Ссылки

- **Демо-версия (Live):** [kievsky332.github.io/Country_Checker](https://kievsky332.github.io/Country_Checker/)
- **Исходный код:** [github.com/Kievsky332/Country_Checker](https://github.com/Kievsky332/Country_Checker)

---

## Поддержка и обратная связь

Если у вас есть идеи, или вы нашли баг, создайте [Issue](https://github.com/Kievsky332/Country_Checker/issues/new) в этом репозитории или свяжитесь со мной:
- **Telegram:** [@imyrj](https://t.me/imyrj)
- **Email:** admin@sorav.ru

---

<p align="center">
  <sub>© 2026 kievsky332.<br> Сделано с любовью</sub>
</p>
