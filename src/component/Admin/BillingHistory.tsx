import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { billingData } from "@/src/constant";

const BillingHistory = () => {
  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items
  const [markAll, setMarkAll] = useState(false); // Track "Mark All" checkbox state

  // Calculate the indexes for slicing the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Sliced data for the current page
  const currentData = billingData.slice(startIndex, endIndex);

  // Total number of pages
  const totalPages = Math.ceil(billingData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleMarkAllChange = () => {
    const allItemIds = currentData.map((item) => item.invoice); // Use `invoice` as a unique identifier
    if (markAll) {
      // Unselect all items
      setSelectedItems((prev) => prev.filter((id) => !allItemIds.includes(id)));
    } else {
      // Select all items for the current page
      setSelectedItems((prev) => [...new Set([...prev, ...allItemIds])]);
    }
    setMarkAll(!markAll);
  };

  const handleRowCheckboxChange = (invoice) => {
    if (selectedItems.includes(invoice)) {
      setSelectedItems((prev) => prev.filter((id) => id !== invoice));
    } else {
      setSelectedItems((prev) => [...prev, invoice]);
    }
  };

  return (
    <div className="p-5">
      <div className="p-5 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-lg font-semibold">Billing History</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
              <i className="ri-download-2-line"></i> Export
            </button>
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              <i className="ri-download-cloud-line"></i> Download
            </button>
          </div>
        </div>
        <table className="w-full mt-4 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={markAll}
                  onChange={handleMarkAllChange}
                />
              </th>
              <th className="px-4 py-3">Invoice</th>
              <th className="px-4 py-3">Billing Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedItems.includes(item.invoice)}
                    onChange={() => handleRowCheckboxChange(item.invoice)}
                  />
                </td>
                <td className="px-4 py-3">{item.invoice}</td>
                <td className="px-4 py-3">{item.billingDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      item.status === "Paid"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.event}</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            Showing {startIndex + 1}-{Math.min(endIndex, billingData.length)} of{" "}
            {billingData.length} Total
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
