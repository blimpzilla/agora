import type { AgoraEvent } from "@/types/AgoraEvent";
import type { ColumnDef } from "@tanstack/react-table";
import { useTable, tableFeatures, FlexRender } from "@tanstack/react-table";
import "./EventsTable.css";

type EventsTableProps = {
  eventList: AgoraEvent[];
  onEventClick: (id: number) => void;
};

const features = tableFeatures({});

const columns: ColumnDef<typeof features, AgoraEvent>[] = [
  {
    id: "name",
    accessorFn: (row) => row.eventName,
    header: "Event",
    cell: (info) => info.getValue<string>(),
  },
  {
    id: "date",
    accessorFn: (row) => row.startDate,
    header: "Date",
    cell: (info) => info.getValue<string>(),
  },
  {
    id: "location",
    accessorFn: (row) => row.eventLocation,
    header: "Location",
    cell: (info) => info.getValue<string>(),
  },
];

function EventsTable({ eventList, onEventClick }: EventsTableProps) {
  const table = useTable({
    features,
    columns,
    data: eventList,
  });

  const rows = table.getRowModel().rows;

  return (
    <>
      <div className="events-table">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    <FlexRender header={header} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id} onClick={() => onEventClick(row.original.id)}>
                {row.getAllCells().map((cell) => (
                  <td key={cell.id}>
                    <FlexRender cell={cell}></FlexRender>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EventsTable;
