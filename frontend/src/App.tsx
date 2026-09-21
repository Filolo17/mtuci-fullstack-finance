// шапка сайта и адреса, которые отвечают за старницы
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AppShell, Group, Text, NavLink } from "@mantine/core";
import DashboardPage from "./pages/DashboardPage";
import OperationsPage from "./pages/OperationsPage";
import ReportsPage from "./pages/ReportsPage";

// список ссылок для шапки
const navItems = [
  { path: "/", label: "Дашборд" },
  { path: "/operations", label: "Операции" },
  { path: "/reports", label: "Отчёты" },
];

function NavItem(props: { path: string; label: string; active: boolean }) {
  return (
    <NavLink
      component={Link}
      to={props.path}
      label={props.label}
      active={props.active}
      style={{ width: "auto" }}
    />
  );
}
// отдельная функция рисует всю шапку: слева логотип, справа ссылки.
function Header(props: { currentPath: string }) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Text fw={700} size="lg">Финучёт</Text>
        <Group>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              path={item.path}
              label={item.label}
              active={props.currentPath === item.path}
            />
          ))}
        </Group>
      </Group>
    </AppShell.Header>
  );
}

export default function App() {
  const location = useLocation(); // useLocation подсказывает текущий адрес в браузере

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Header currentPath={location.pathname} />
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/operations" element={<OperationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}