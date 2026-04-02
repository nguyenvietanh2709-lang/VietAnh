import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const PHOTOS = [
  { id: 1, src: "https://www.w3schools.com/w3images/mountains.jpg", title: "Lorem Ipsum", text: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", category: "design" },
  { id: 2, src: "https://www.w3schools.com/w3images/lights.jpg", title: "Lorem Ipsum", text: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", category: "photo" },
  { id: 3, src: "https://www.w3schools.com/w3images/nature.jpg", title: "Lorem Ipsum", text: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", category: "design" },
  { id: 4, src: "https://www.w3schools.com/w3images/p1.jpg", title: "Lorem Ipsum", text: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", category: "photo" },
  { id: 5, src: "https://www.w3schools.com/w3images/p2.jpg", title: "Lorem Ipsum", text: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", category: "design" },
  { id: 6, src: "https://www.w3schools.com/w3images/p3.jpg", title: "Lorem Ipsum", text: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", category: "photo" }
];

const ITEMS_PER_PAGE = 3;

export default function PhotoGrid({ activeFilter = 'ALL' }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filteredPhotos = activeFilter === 'ALL' 
      ? PHOTOS 
      : PHOTOS.filter(photo => photo.category === activeFilter);

  const totalPages = Math.ceil(filteredPhotos.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPhotos = filteredPhotos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (!paginatedPhotos.length) {
    return <div className="p-4 lg:p-8 pt-0"><p>No items found.</p></div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 p-4 lg:p-8 pt-0">
        {paginatedPhotos.map((item) => (
          <div key={item.id} className="bg-white">
            <img src={item.src} alt={item.title} className="w-full hover:opacity-60 transition-opacity cursor-pointer block" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold">{item.title}</p>
                <span className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded uppercase tracking-wider">{item.category}</span>
              </div>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={safeCurrentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      )}
    </>
  );
}
