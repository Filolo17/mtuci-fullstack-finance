// главная страница
import { Card, SimpleGrid, Stack, Text, Title } from "@mantine/core";

const summary = {
  income: 5000,
  expense: 1850,
};

function calculateBalance(income: number, expense: number): number {
  return income - expense;
}

function SummaryCard(props: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text c="dimmed" size="sm">{props.label}</Text>
      <Text fw={700} size="xl" c={props.color}>
        {props.value} руб
      </Text>
    </Card>
  );
}
export default function DashboardPage() {
  const balance = calculateBalance(summary.income, summary.expense); // принимаем доходы и расходы и возвращаем разницу

  return (
    <Stack>
      <Title order={2}> дашборд</Title>

      <SimpleGrid cols={{ base: 1, sm: 3 }}>
        <SummaryCard label="Доходы за месяц" value={summary.income} color="green" />
        <SummaryCard label="Расходы за месяц" value={summary.expense} color="red" />
        <SummaryCard label="Баланс" value={balance} />
      </SimpleGrid>
    </Stack>
  );
}