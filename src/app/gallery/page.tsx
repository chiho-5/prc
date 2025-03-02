// app/gallery/page.js
import Gallery from '@/components/Gallery';


const GalleryPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20 pb-6">
      <h1 className="text-3xl text-white font-bold text-center mb-8">Image Gallery</h1>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
