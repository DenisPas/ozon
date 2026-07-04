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
  shared/             переиспользуемое, ни от чего не зависит
```


## Реестр npm

В проекте лежит локальный `.npmrc` с публичным реестром `registry.npmjs.org`
(перекрывает глобальный корпоративный). При проблемах с общим кешем используй
локальный: `npm install --cache ./.npm-cache`.
