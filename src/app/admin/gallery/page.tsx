'use client';

import { useState } from 'react';
import Link from 'next/link';

// Initial gallery images - same as gallery page
const initialImages = [
  { id: 2, src: '/images/the-bella-downtown-bonita-springs-fl-gourmet-kitchen.jpg', alt: 'Gourmet kitchen', category: 'interiors' },
  { id: 3, src: '/images/the-bella-downtown-bonita-springs-fl-2br-2ba---kitchen.jpg', alt: 'Kitchen with modern finishes', category: 'interiors' },
  { id: 8, src: '/images/the-bella-downtown-bonita-springs-fl-modern-design.jpg', alt: 'Modern design details', category: 'interiors' },
  { id: 13, src: '/images/bath1.png', alt: 'Luxurious bathroom with modern fixtures', category: 'interiors' },
  { id: 14, src: '/images/br1.png', alt: 'Spacious bedroom with natural light', category: 'interiors' },
  { id: 15, src: '/images/br2.png', alt: 'Elegant bedroom suite', category: 'interiors' },
  { id: 16, src: '/images/lr1.png', alt: 'Open-concept living room', category: 'interiors' },
  { id: 17, src: '/images/patio1.jpg', alt: 'Private balcony', category: 'interiors' },
  { id: 18, src: '/images/DSC01972.jpg', alt: 'Bella interior details', category: 'interiors' },
  { id: 19, src: '/images/DSC02179.jpg', alt: 'Bella residence', category: 'interiors' },
  { id: 20, src: '/images/DSC02181.jpg', alt: 'Bella residence details', category: 'interiors' },
  { id: 21, src: '/images/DSC02218.jpg', alt: 'Bella living space', category: 'interiors' },
  { id: 22, src: '/images/living1.jpg', alt: 'Living room with modern furnishings', category: 'interiors' },
  { id: 23, src: '/images/DSC02132.jpg', alt: 'Bella interior', category: 'interiors' },
  { id: 24, src: '/images/DSC02157.jpg', alt: 'Bella residence view', category: 'interiors' },
  { id: 25, src: '/images/surfaces2.jpg', alt: 'Seamless kitchen surfaces', category: 'interiors' },
  { id: 26, src: '/images/bathroom1.jpg', alt: 'Modern bathroom', category: 'interiors' },
  { id: 27, src: '/images/DSC02081.jpg', alt: 'Bella apartment details', category: 'interiors' },
  { id: 28, src: '/images/kitcehn2.jpg', alt: 'Kitchen with island', category: 'interiors' },
  { id: 29, src: '/images/kitchen1.jpg', alt: 'Gourmet kitchen design', category: 'interiors' },
  { id: 30, src: '/images/living2.jpg', alt: 'Living area with natural light', category: 'interiors' },
  { id: 31, src: '/images/DSC02373.jpg', alt: 'Bella residence', category: 'interiors' },
  { id: 32, src: '/images/DSC02292.jpg', alt: 'Bella interior', category: 'interiors' },
  { id: 33, src: '/images/DSC02362.jpg', alt: 'Bella living space', category: 'interiors' },
  { id: 34, src: '/images/DSC02312.jpg', alt: 'Bella apartment', category: 'interiors' },
  { id: 35, src: '/images/DSC02336.jpg', alt: 'Bella residence details', category: 'interiors' },
  { id: 36, src: '/images/DSC02242.jpg', alt: 'Bella interior design', category: 'interiors' },
  { id: 37, src: '/images/DSC02226.jpg', alt: 'Bella apartment view', category: 'interiors' },
  { id: 38, src: '/images/DSC02253.jpg', alt: 'Bella living area', category: 'interiors' },
  { id: 39, src: '/images/DJI_0029.jpg', alt: 'Bella aerial view', category: 'exterior' },
  { id: 40, src: '/images/DJI_0034.jpg', alt: 'Bella exterior aerial', category: 'exterior' },
];

type Category = 'interiors' | 'amenities' | 'exterior';

export default function GalleryAdmin() {
  const [images, setImages] = useState(initialImages);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');
  const [editCategory, setEditCategory] = useState<Category>('interiors');
  const [copied, setCopied] = useState(false);

  const startEdit = (id: number, currentAlt: string, currentCategory: Category) => {
    setEditingId(id);
    setEditValue(currentAlt);
    setEditCategory(currentCategory);
  };

  const saveEdit = (id: number) => {
    setImages(images.map(img => 
      img.id === id ? { ...img, alt: editValue, category: editCategory } : img
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const exportCode = () => {
    const code = `const images = [
${images.map(img => `  { id: ${img.id}, src: '${img.src}', alt: '${img.alt}', category: '${img.category}' },`).join('\n')}
];`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Gallery Caption Editor</h1>
            <p className="text-slate-600 mt-1">Edit captions and categories for gallery images</p>
          </div>
          <div className="flex gap-3">
            <Link 
              href="/gallery" 
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              View Gallery
            </Link>
            <button
              onClick={exportCode}
              className="px-4 py-2 text-sm font-medium text-white bg-[#5b7a99] rounded-lg hover:bg-[#4a6580]"
            >
              {copied ? '✓ Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-slate-200">
            {images.map((image) => (
              <div key={image.id} className="p-4 flex gap-4 items-start hover:bg-slate-50">
                {/* Thumbnail */}
                <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {editingId === image.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5b7a99] focus:border-transparent"
                        placeholder="Enter caption..."
                        autoFocus
                      />
                      <div className="flex items-center gap-4">
                        <select
                          value={editCategory}
                          onChange={(e) => setEditCategory(e.target.value as Category)}
                          className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#5b7a99]"
                        >
                          <option value="interiors">Interiors</option>
                          <option value="amenities">Amenities</option>
                          <option value="exterior">Exterior</option>
                        </select>
                        <div className="flex gap-2">
                          <button
                            onClick={() => saveEdit(image.id)}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-200 rounded-lg hover:bg-slate-300"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-medium text-slate-900">{image.alt}</p>
                      <p className="text-xs text-slate-500 mt-1 truncate">{image.src}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                          image.category === 'interiors' ? 'bg-blue-100 text-blue-700' :
                          image.category === 'amenities' ? 'bg-green-100 text-green-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {image.category}
                        </span>
                        <span className="text-xs text-slate-400">ID: {image.id}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Edit Button */}
                {editingId !== image.id && (
                  <button
                    onClick={() => startEdit(image.id, image.alt, image.category as Category)}
                    className="px-3 py-1.5 text-xs font-medium text-[#5b7a99] bg-[#5b7a99]/10 rounded-lg hover:bg-[#5b7a99]/20"
                  >
                    Edit
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> Changes made here are temporary. Click "Copy Code" to get the updated code, 
            then replace the <code className="bg-amber-100 px-1 rounded">images</code> array in{' '}
            <code className="bg-amber-100 px-1 rounded">src/app/gallery/page.tsx</code> to make changes permanent.
          </p>
        </div>
      </div>
    </div>
  );
}
