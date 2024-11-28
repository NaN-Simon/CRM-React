import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ThemeSwitcher = () => {
  // Получаем сохранённую тему из localStorage, если она есть, или используем дефолтную
  const [isDark, setIsDark] = useState(() => {
    // Проверяем localStorage при первой загрузке
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Если нет сохранённой темы, используем предпочитаемую тему из системных настроек
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Эффект для применения темы при монтировании компонента
  useEffect(() => {
    // Если тема тёмная, добавляем класс 'dark' к корневому элементу
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Сохраняем выбранную тему в localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);  // Зависимость от isDark, чтобы применить тему при её изменении

  // Функция для переключения темы
  const toggleTheme = () => {
    setIsDark(prevState => !prevState);  // Меняем состояние на противоположное
  };

  return (
    <>
      <Button className="p-2 text-foreground rounded-xl" onClick={toggleTheme}>
        <span className="material-icons material-symbols-outlined">
          dark_mode
        </span>
      </Button>
    </>
  );
};

export default ThemeSwitcher;
