import React from "react";

function Konten() {
  return (
    <div className="w-full h-full p-6 bg-gray-500 bg-opacity-25 rounded-xl my-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Data Admin</h1>
        <div className="text-sm text-gray-600">
          <span>117 total data</span>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                No
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                Nama
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                Jabatan
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 text-sm">1</td>
              <td className="p-4 text-sm">Nugrah</td>
              <td className="p-4 text-sm">nugrah@unjani</td>
              <td className="p-4 text-sm">Apoteker</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Konten;
