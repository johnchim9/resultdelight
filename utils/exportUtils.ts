// src/utils/exportUtils.ts

export function exportToCSV(data: any[], filename: string = "export.csv") {
  if (!data.length) return;

  const csvHeaders = Object.keys(data[0]).join(",");
  const csvRows = data.map(row =>
    Object.values(row).map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")
  );

  const csvContent = [csvHeaders, ...csvRows].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}