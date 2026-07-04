# ozon

Каркас React-приложения на Vite + TypeScript.

## Стек

- **React 18** + **React Router 6**
- **TypeScript** (strict), alias `@/*` → `src/*`
- **Vite** — dev-сервер и сборка
- **CSS Modules** на **PCSS** (`*.module.pcss`) + PostCSS (пресет Mantine, вложенность, autoprefixer)
- **Mantine 7** — готовые UI-компоненты (построены на CSS Modules)
- **ESLint** — линтинг TS/React
- **Stylelint** — линтинг CSS/PCSS
- **Vitest** + **Testing Library** — тесты

## Скрипты

```bash
npm run dev        # dev-сервер (http://localhost:5173)
npm run build      # прод-сборка в dist/
npm run preview    # предпросмотр прод-сборки
npm run lint       # ESLint
npm run lint:css   # Stylelint
npm run typecheck  # проверка типов
npm run test       # тесты (однократно)
npm run test:watch # тесты в watch-режиме
```

## Структура

Прагматичные слои. Правило зависимостей — строго сверху вниз:
`app → pages → features → shared`. Обратные импорты запрещены, `shared` ни о ком не знает.

```
src/
  main.tsx            точка входа: монтирует <AppProviders><App/></AppProviders>
  index.pcss          глобальные стили
  vite-env.d.ts       типы для CSS Modules и env-переменных
  setup-tests.ts      настройка Testing Library + моки для Mantine
  test-utils.tsx      renderWithProviders — рендер с провайдерами в тестах
  app/                каркас приложения
    app.tsx           корневой компонент: навигация + роуты
    providers.tsx     все глобальные провайдеры (Mantine, Router, ...)
  pages/              страницы-роуты (тонкие: собирают из features/shared)
    home/  about/     компонент + .module.pcss (+ тест) рядом
  shared/             переиспользуемое, ни от чего не зависит
    api/              шов к бэкенду
      client.ts       единственная обёртка над fetch (baseURL, авторизация, ошибки)
      types.ts        ApiError, Paginated<T> и пр.
      endpoints/      типизированные функции запросов по доменам (сервисный слой)
    lib/              утилиты и хуки (напр. useAsync)
    config/           env.ts, routes.ts — константы и настройки
    ui/               общие презентационные компоненты (напр. ErrorState)
```

`features/` появляется, когда возникнет первая самодостаточная фича — по тому же
правилу зависимостей; вводить заранее не нужно.

## Как добавлять

- **Страница:** папка в `src/pages/*` (компонент + `*.module.pcss` рядом), путь в
  `@/shared/config/routes.ts`, роут в `src/app/app.tsx`.
- **Запрос к API:** тип + функцию в `src/shared/api/endpoints/*` поверх `client`;
  компоненты зовут эти функции, а не `fetch` напрямую. Данные тянутся через
  `useAsync` (позже — через серверный стейт-менеджер без правок client).
- **Общий UI:** компонент в `src/shared/ui/*`, экспорт из `@/shared/ui`.
- **UI Mantine:** импортируй из `@mantine/core`. Кастомные стили — в PCSS-модулях.
- **Тесты:** используй `renderWithProviders` из `@/test-utils` вместо `render`,
  иначе Mantine-компоненты не получат провайдер.

## PCSS

Файлы `*.module.pcss` обрабатываются PostCSS с пресетом Mantine: доступна вложенность (`&`),
миксины `light-dark`, функции `rem()`/`em()` и брейкпоинты `$mantine-breakpoint-*`.

## Реестр npm

В проекте лежит локальный `.npmrc` с публичным реестром `registry.npmjs.org`
(перекрывает глобальный корпоративный). При проблемах с общим кешем используй
локальный: `npm install --cache ./.npm-cache`.
