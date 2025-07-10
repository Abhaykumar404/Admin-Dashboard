import React from 'react';
import { DataListing } from '@/lib/mockDB';

type Props = {
  data: DataListing;
  onClose: () => void;
  onSave: (updated: DataListing) => void;
};

const EditPopup = ({ data, onClose, onSave }: Props) => {
  const [status, setStatus] = React.useState(data.status);

  const handleSave = () => {
    onSave({ ...data, status });
  };

  return (
    <div className="fixed inset-0 text-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-[350px]">
        <h2 className="text-lg font-bold mb-4">Edit Status</h2>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1">{data.name}</div>
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Car Model</label>
          <div className="mt-1">{data.title}</div>
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
