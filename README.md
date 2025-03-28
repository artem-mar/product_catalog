# Product Catalog

Каталог товаров с возможностью поиска, фильтрации и добавления в корзину.

## Технологии

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Zustand
- Axios

## Функциональность

- Просмотр списка товаров
- Поиск товаров
- Фильтрация по категориям
- Добавление товаров в корзину
- Управление количеством товаров в корзине
- Адаптивный дизайн

## Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/yourusername/product-catalog.git
cd product-catalog
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение в режиме разработки:

```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Деплой

Приложение настроено для автоматического деплоя через Vercel:

1. Создайте аккаунт на [Vercel](https://vercel.com)
2. Подключите ваш GitHub репозиторий
3. Vercel автоматически определит Next.js приложение и настроит сборку
4. При каждом пуше в main ветку будет происходить автоматический деплой

### Переменные окружения

В Vercel настроены следующие переменные окружения:

- `NEXT_PUBLIC_API_URL` - URL API для получения данных о товарах

## Структура проекта

```
src/
  ├── app/              # Страницы приложения
  ├── components/       # React компоненты
  ├── store/           # Zustand store
  ├── api/             # API функции
  └── types/           # TypeScript типы
```

## Лицензия

MIT
