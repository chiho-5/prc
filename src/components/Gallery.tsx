import Image from 'next/image';

const images = [
  { src: '/gallery.jpeg', alt: 'Image 1', description: 'Description for Image 1' },
  { src: '/gallery2.jpeg', alt: 'Image 2', description: 'Description for Image 2' },
  { src: '/gallery3.jpeg', alt: 'Image 3', description: 'Description for Image 3' },
  { src: '/gallery4.jpeg', alt: 'Image 4', description: 'Description for Image 4' },
  { src: '/gallery5.jpeg', alt: 'Image 5', description: 'Description for Image 5' },
  { src: '/gallery6.jpeg', alt: 'Image 6', description: 'Description for Image 6' },
  { src: '/gallery7.jpeg', alt: 'Image 7', description: 'Description for Image 7' },
  { src: '/gallery8.jpeg', alt: 'Image 8', description: 'Uk/ Kenya Business submit Kenya' },
  { src: '/gallery9.jpeg', alt: 'Image 9', description: 'UK - Kenya Trade mission 2024' },
  { src: '/gallery0.jpeg', alt: 'Image 10', description: 'UK - Kenya Trade mission 2024' },
  { src: '/gallery14.jpeg', alt: 'Image 11', description: 'Description for Image 11' },
  { src: '/gallery15.jpeg', alt: 'Image 12', description: 'Description for Image 12' },
  { src: "/gallery16.jpeg", alt: "Image 13", description: "Meeting with the vice president in Sierra Leone 🇸🇱" },
  { src: "/gallery17.jpeg", alt: "Image 14", description: "London Business summit 2023" },
  { src: "/gallery18.jpeg", alt: "Image 15", description: "Precious Global Consortium and British African Business Alliance meeting" },
  { src: "/gallery19.jpeg", alt: "Image 15", description: "The Uk/ Caribbean Dinner host London" },

];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center p-2">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
