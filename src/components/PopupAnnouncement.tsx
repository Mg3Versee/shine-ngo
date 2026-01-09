"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type PopupAnnouncementProps = {
  title: string;
  message: string;
  imageUrl: string;
};

const PopupAnnouncement: React.FC<PopupAnnouncementProps> = ({
  title,
  message,
  imageUrl,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("popupShown");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupShown", "true");
      }, 5000); 

      return () => clearInterval(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white max-w-md w-[90%] rounded-xl shadow-xl p-5 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Dynamic Image */}
        {imageUrl && (
          <div className="w-full h-44 relative mb-4 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Dynamic Content */}
        <h2 className="text-xl font-bold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{message}</p>

        <button
          onClick={() => setShow(false)}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          OK, Got it
        </button>
      </div>
    </div>
  );
};

export default PopupAnnouncement;




// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// type PopupProps = {
//   title: string;
//   message: string;
//   imageUrl: string;
// };

// const PopupAnnouncement: React.FC<PopupProps> = ({ title, message, imageUrl }) => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     // Interval to show popup every 2 seconds
//     const interval = setInterval(() => {
//       setShow(true);
//     }, 30000); // 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Close popup manually
//   const handleClose = () => setShow(false);

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="bg-white max-w-md w-[90%] rounded-xl shadow-xl p-5 relative animate-fadeIn">

//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         {/* Dynamic Image */}
//         {imageUrl && (
//           <div className="w-full h-44 relative mb-4 rounded-lg overflow-hidden">
//             <Image src={imageUrl} alt={title} fill className="object-cover" />
//           </div>
//         )}

//         <h2 className="text-xl font-bold text-green-600 mb-2">{title}</h2>
//         <p className="text-gray-700 text-sm mb-4">{message}</p>

//         <button
//           onClick={handleClose}
//           className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//         >
//           OK
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PopupAnnouncement;

