"use client";

import React, { useState, useEffect } from "react";

export default function DataTable() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const mockData = [
          { firstName: "Jill", lastName: "Smith", points: 50 },
          { firstName: "Eve", lastName: "Jackson", points: 94 },
          { firstName: "Adam", lastName: "Johnson", points: 67 }
        ];
        setTableData(mockData);
      } catch (error) {
        console.error("Lỗi lấy dữ liệu:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 lg:p-8">
      <hr className="my-8 border-gray-300" />
      <div className="text-center mb-6">
        <h2 className="text-3xl font-normal mb-4">Tables (Fetched with async/await)</h2>
        <p className="text-lg">Don't worry. Tailwind CSS takes care of your tables.</p>
      </div>
      <div className="overflow-x-auto shadow-md">
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-4 font-normal">First Name</th>
              <th className="p-4 font-normal">Last Name</th>
              <th className="p-4 font-normal">Points</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="3" className="text-center p-8 border-b border-gray-300">
                  <i className="fa fa-spinner fa-spin text-4xl mb-4"></i>
                  <p>Loading data...</p>
                </td>
              </tr>
            ) : (
              tableData.map((row, index) => (
                <tr key={index} className={`border-b border-gray-300 ${index % 2 === 1 ? "bg-white" : "bg-[#f1f1f1]"}`}>
                  <td className="p-4">{row.firstName}</td>
                  <td className="p-4">{row.lastName}</td>
                  <td className="p-4">{row.points}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
