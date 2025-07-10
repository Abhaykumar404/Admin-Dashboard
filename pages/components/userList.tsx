import { DataListing } from '@/lib/mockDB';
import { useState } from 'react';
import EditPopup from './popUp';

export async function getServerSideProps() {
  const res = await fetch(`${'http://localhost:3000'}/api/listings`);
  const listings = await res.json();

  return {
    props: {
      listings,
    },
  };
}

export default function UserList({ listings }: { listings: DataListing[] }) {
  const safeListings = Array.isArray(listings) ? listings : [];
  const [currentPage, setCurrentPage] = useState(1);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<DataListing | null>(null);
  const [updatedListings, setUpdatedListings] = useState<DataListing[]>(safeListings);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(updatedListings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = updatedListings.slice(startIndex, startIndex + itemsPerPage);

  const handleEditClick = (listing: DataListing) => {
    setSelectedListing(listing);
    setEditModalOpen(true);
  };

  const handleSave = (updated: DataListing) => {
    const newData = updatedListings.map(item =>
      item.id === updated.id ? updated : item
    );
    setUpdatedListings(newData);
    setEditModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-6 relative">
      <div className="p-4 border-b font-bold text-purple-700">Customer List</div>

      <table className="w-full text-left text-gray-600">
        <thead className="bg-purple-50">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Car Model</th>
            <th className="p-4">Date</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Status</th>
            <th className="p-4">Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id} className="border-t">
              <td className="p-4">{item.name || '-'}</td>
              <td className="p-4">{item.title || '-'}</td>
              <td className="p-4">{item.date || '-'}</td>
              <td className="p-4">{item.contact || '-'}</td>
              <td
                className="p-4 font-bold capitalize"
                style={{
                  color:
                    item.status === 'approved'
                      ? 'green'
                      : item.status === 'pending'
                      ? '#eab308'
                      : 'red',
                }}
              >
                {item.status || '-'}
              </td>
              <td>
                <button className="cursor-pointer" onClick={() => handleEditClick(item)}>
                  <img
                    className="w-5 h-5"
                    src="https://www.svgrepo.com/show/513824/edit.svg"
                    alt="Edit"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 text-black border-t-[1px] py-6">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page ? 'bg-gray-600 text-white' : 'bg-gray-400'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}

      {editModalOpen && selectedListing && (
        <EditPopup
          data={selectedListing}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
