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

```
src/
  main.tsx            точка входа: React + MantineProvider + Router
  App.tsx             корневой компонент с роутами и навигацией
  index.pcss          глобальные стили
  vite-env.d.ts       типы для CSS Modules (.pcss/.css) и env
  setup-tests.ts      настройка Testing Library + моки для Mantine
  test-utils.tsx      renderWithProviders — рендер с провайдерами в тестах
  pages/
    home/             страница Home (компонент + .module.pcss + тест)
    about/            страница About
```

## Как добавлять

- **Страница:** по образцу `src/pages/home` — компонент, `*.module.pcss` рядом, роут в `App.tsx`.
- **UI:** импортируй компоненты из `@mantine/core` (`Button`, `Group`, ...). Кастомные стили — в PCSS-модулях.
- **Тесты:** используй `renderWithProviders` из `@/test-utils` вместо `render`, иначе Mantine-компоненты не получат провайдер.

## PCSS

Файлы `*.module.pcss` обрабатываются PostCSS с пресетом Mantine: доступна вложенность (`&`),
миксины `light-dark`, функции `rem()`/`em()` и брейкпоинты `$mantine-breakpoint-*`.

## Реестр npm

В проекте лежит локальный `.npmrc` с публичным реестром `registry.npmjs.org`
(перекрывает глобальный корпоративный). При проблемах с общим кешем используй
локальный: `npm install --cache ./.npm-cache`.
