"use client";
import {
  IconEye,
  IconCloudDownload,
  IconTrash,
  IconEdit,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const Schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
});

// Delete Dialog Component
function DeleteDialog({ 
  itemName, 
  onDelete 
}: { 
  itemName: string; 
  onDelete: () => void; 
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="text-red-600 hover:text-red-800">
          <IconTrash size={26} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete "{itemName}" 
            and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function CollegeDataTable({
  data,
  onDelete,
}: {
  data: z.infer<typeof Schema>[];
  onDelete?: (id: number) => void;
}) {
  // Handle delete function
  const handleDelete = (id: number, name: string) => {
    console.log(`Deleting item with ID: ${id} and name: ${name}`);
    // Call the onDelete prop if provided
    if (onDelete) {
      onDelete(id);
    }
    // You can also make API call here to delete from server
    // Example: await deleteItem(id);
  };

  const columns: ColumnDef<z.infer<typeof Schema>>[] = [
    {
      accessorKey: "header",
      header: "Name",
    },
    {
      accessorKey: "type",
      header: "Tag",
      cell: ({ row }) => (
        <div className="w-32">
          <Badge variant="outline" className="text-muted-foreground px-1.5">
            {row.original.type}
          </Badge>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Sub Name",
      cell: ({ row }) => (
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: "target",
      header: "Target",
      cell: ({ row }) => {
        const formatDate = (dateString: string) => {
          const date = new Date(dateString);
          return isNaN(date.getTime())
            ? dateString
            : date.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              });
        };
        return <div>{formatDate(row.original.target)}</div>;
      },
    },
    {
      accessorKey: "limit",
      header: "Website",
      cell: ({ row }) => (
        <Link to={row.original.limit} className="text-blue-600 hover:text-blue-800">
          <IconEye size={26} />
        </Link>
      ),
    },
    {
      accessorKey: "reviewer",
      header: "Prospectus",
      cell: ({ row }) => (
        <Link to={row.original.reviewer} className="text-green-600 hover:text-green-800">
          <IconCloudDownload size={26} />
        </Link>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Link to={`/edit/${row.original.id}`} className="text-blue-600 hover:text-blue-800">
            <IconEdit size={26} />
          </Link>
          <DeleteDialog
            itemName={row.original.header}
            onDelete={() => handleDelete(row.original.id, row.original.header)}
          />
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}