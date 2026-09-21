// вход в приложение и запуск React

import React from "react"; // инструменты
import ReactDOM from "react-dom/client"; //react
import { BrowserRouter } from "react-router-dom"; // мост между react и браузером
import { MantineProvider } from "@mantine/core"; // роутер - для адреса в браузере и открытие нужной страницы
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("не найден элемент root в index.html")
}

ReactDOM.createRoot(rootElement).render(  // показать что внутри
  <React.StrictMode> // для нахождения ошибок
    <MantineProvider defaultColorScheme="light"> 
      <BrowserRouter> // ссылки
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);