// страница со списком всех операций
import { Table, Title, Badge } from "@mantine/core";

const operations = [
  { id: 1, date: "2026-09-10", category: "Стипендия", type: "income", amount: 5000 },
  { id: 2, date: "2026-09-11", category: "Еда", type: "expense", amount: 350 },
  { id: 3, date: "2026-09-12", category: "Транспорт", type: "expense", amount: 100 },
];

// возвращает true, если операция — доход.
function isIncome(type: string): boolean {
  return type === "income";
}
// рисует одну строку таблицы. Принимает один объект операции.
function OperationRow(props: {
  date: string;
  category: string;
  type: string;
  amount: number;
}) {
  const income = isIncome(props.type);

  return (
    <Table.Tr>
      <Table.Td>{props.date}</Table.Td>
      <Table.Td>{props.category}</Table.Td>
      <Table.Td>
        <Badge color={income ? "green" : "red"}>
          {income ? "Доход" : "Расход"}
        </Badge>
      </Table.Td>
      <Table.Td c={income ? "green" : "red"} fw={600}>
        {income ? "+" : "-"}{props.amount} руб
      </Table.Td>
    </Table.Tr>
  );
}
export default function OperationsPage() {
  return (
    <>
      <Title order={2} mb="md"> операции</Title>

      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th> дата</Table.Th>
            <Table.Th> категория</Table.Th>
            <Table.Th> тип</Table.Th>
            <Table.Th> сумма</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {operations.map((op) => (
            <OperationRow
              key={op.id}
              date={op.date}
              category={op.category}
              type={op.type}
              amount={op.amount}
            />
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}