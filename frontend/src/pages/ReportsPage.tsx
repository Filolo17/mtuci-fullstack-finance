// страница отчётов
import { Title, Card, Progress, Stack, Text } from "@mantine/core";

const reportData = [
  { name: "Еда", percent: 60, amount: 1100 },
  { name: "Транспорт", percent: 25, amount: 450 },
  { name: "Развлечения", percent: 15, amount: 300 },
];

function ReportRow(props: { name: string; percent: number; amount: number }) {
  return (
    <div>
      <Text size="sm">
        {props.name} — {props.amount} руб ({props.percent}%)
      </Text>
      <Progress value={props.percent} color="orange" />
    </div>
  );
}
export default function ReportsPage() {
  return (
    <Stack>
      <Title order={2}> отчёты</Title>

      <Card withBorder padding="lg" radius="md">
        <Text fw={600} mb="md"> расходы по категориям</Text>

        <Stack>
          {reportData.map((item) => (
            <ReportRow
              key={item.name}
              name={item.name}
              percent={item.percent}
              amount={item.amount}
            />
          ))}
        </Stack>
      </Card>
    </Stack>
  );
}