// import React from "react";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// export default function Navbar() {
//     return (
//         <AuthenticatedLayout>
//             <div className="p-6">
//                 <h1 className="text-2xl font-semibold mb-6">
//                     Website Navigation Bar Settings
//                 </h1>

//                 <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl">
//                     <form method="post" encType="multipart/form-data">

//                         {/* Logo */}
//                         <div className="mb-5">
//                             <label className="block text-sm font-medium mb-1">
//                                 Website Logo
//                             </label>
//                             <input
//                                 type="file"
//                                 name="logo"
//                                 className="w-full border border-gray-300 rounded px-3 py-2"
//                             />
//                         </div>

//                         {/* Company Name */}
//                         <div className="mb-5">
//                             <label className="block text-sm font-medium mb-1">
//                                 Company Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="company_name"
//                                 className="w-full border border-gray-300 rounded px-3 py-2"
//                                 placeholder="Enter company name"
//                             />
//                         </div>

//                         {/* Navigation Labels */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                             <div>
//                                 <label className="block text-sm font-medium mb-1">
//                                     Home Label
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="home_label"
//                                     className="w-full border border-gray-300 rounded px-3 py-2"
//                                     placeholder="Home"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium mb-1">
//                                     About Us Label
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="about_label"
//                                     className="w-full border border-gray-300 rounded px-3 py-2"
//                                     placeholder="About Us"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium mb-1">
//                                     Services Label
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="services_label"
//                                     className="w-full border border-gray-300 rounded px-3 py-2"
//                                     placeholder="Services"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium mb-1">
//                                     Solutions Label
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="solutions_label"
//                                     className="w-full border border-gray-300 rounded px-3 py-2"
//                                     placeholder="Solutions"
//                                 />
//                             </div>

//                             <div className="md:col-span-2">
//                                 <label className="block text-sm font-medium mb-1">
//                                     Contact Us Label
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="contact_label"
//                                     className="w-full border border-gray-300 rounded px-3 py-2"
//                                     placeholder="Contact Us"
//                                 />
//                             </div>
//                         </div>

//                         {/* Submit */}
//                         <div className="mt-6">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//                             >
//                                 Save Navigation Bar
//                             </button>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }
