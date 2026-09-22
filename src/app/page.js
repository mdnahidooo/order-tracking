// "use client";

// import { useEffect, useState } from "react";
// import {
//   FiArrowLeft,
//   FiArrowRight,
//   FiPackage,
//   FiSearch,
//   FiShield,
//   FiTruck,
// } from "react-icons/fi";

// export default function Home() {
//   const [orders, setOrders] = useState([]);
//   const [orderId, setOrderId] = useState("");
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadOrders = async () => {
//       try {
//         const response = await fetch("/orders.json");

//         if (!response.ok) {
//           throw new Error("Failed to load orders");
//         }

//         const data = await response.json();
//         setOrders(data.orders);
//       } catch (error) {
//         setError("Something went wrong. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadOrders();
//   }, []);

//   const handleTrackOrder = () => {
//     const enteredId = orderId.trim().toUpperCase();

//     if (!enteredId) {
//       setError("Please enter your order ID.");
//       return;
//     }

//     const foundOrder = orders.find(
//       (order) => order.id.toUpperCase() === enteredId
//     );

//     if (!foundOrder) {
//       setSelectedOrder(null);
//       setError("We couldn't find an order with that ID.");
//       return;
//     }

//     setError("");
//     setSelectedOrder(foundOrder);
//   };

//   const handleBack = () => {
//     setSelectedOrder(null);
//     setOrderId("");
//     setError("");
//   };

//   if (loading) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#f5f7f9]">
//         <div className="text-center">
//           <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
//             <FiPackage size={22} />
//           </div>

//           <p className="mt-4 text-sm font-medium text-gray-600">
//             Loading orders...
//           </p>
//         </div>
//       </main>
//     );
//   }

//   if (selectedOrder) {
//     return (
//       <main className="min-h-screen bg-[#f5f7f9]">
//         <div className="mx-auto max-w-md px-4 py-5">
//           <button
//             onClick={handleBack}
//             className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-gray-900"
//           >
//             <FiArrowLeft size={18} />
//             Search another order
//           </button>

//           <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
//                 <FiTruck size={22} />
//               </div>

//               <div>
//                 <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
//                   Order
//                 </p>

//                 <h1 className="text-lg font-bold text-gray-900">
//                   {selectedOrder.id}
//                 </h1>
//               </div>
//             </div>

//             <div className="mt-8">
//               <p className="text-sm font-medium text-gray-500">
//                 Current Status
//               </p>

//               <h2 className="mt-1 text-3xl font-bold text-gray-950">
//                 {selectedOrder.statusLabel}
//               </h2>

//               <p className="mt-3 text-sm leading-6 text-gray-500">
//                 {selectedOrder.statusMessage}
//               </p>
//             </div>

//             <div className="mt-6 rounded-2xl bg-gray-50 p-4">
//               <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
//                 Estimated Delivery
//               </p>

//               <p className="mt-2 font-semibold text-gray-900">
//                 {selectedOrder.estimatedDelivery.date}
//               </p>

//               {selectedOrder.estimatedDelivery.time && (
//                 <p className="mt-1 text-sm text-gray-500">
//                   {selectedOrder.estimatedDelivery.time}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f5f7f9]">
//       <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-6">
//         {/* Header */}
//         <header className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
//               <FiPackage size={20} />
//             </div>

//             <div>
//               <p className="text-sm font-semibold text-gray-950">
//                 Trackly
//               </p>

//               <p className="text-xs text-gray-500">
//                 Order tracking
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200">
//             <FiShield size={14} />
//             Secure
//           </div>
//         </header>

//         {/* Hero */}
//         <section className="flex flex-1 flex-col justify-center py-12">
//           <div className="mb-7">
//             <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-lg">
//               <FiTruck size={27} />
//             </div>

//             <p className="mb-2 text-sm font-semibold text-gray-500">
//               DELIVERY TRACKING
//             </p>

//             <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-950">
//               Where is your
//               <br />
//               order?
//             </h1>

//             <p className="mt-4 text-sm leading-6 text-gray-500">
//               Enter your order ID and get the latest delivery status,
//               estimated arrival, and tracking details.
//             </p>
//           </div>

//           {/* Search */}
//           <div className="rounded-3xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ring-1 ring-gray-100">
//             <label
//               htmlFor="orderId"
//               className="mb-2 block text-sm font-semibold text-gray-800"
//             >
//               Order ID
//             </label>

//             <div className="relative">
//               <FiSearch
//                 size={19}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 id="orderId"
//                 type="text"
//                 value={orderId}
//                 onChange={(e) => {
//                   setOrderId(e.target.value);
//                   setError("");
//                 }}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     handleTrackOrder();
//                   }
//                 }}
//                 placeholder="e.g. ORD-94821"
//                 className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-sm font-medium text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
//               />
//             </div>

//             {/* Error */}
//             {error && (
//               <p className="mt-3 rounded-xl bg-red-50 px-3 py-2.5 text-sm text-red-600">
//                 {error}
//               </p>
//             )}

//             {/* Button */}
//             <button
//               onClick={handleTrackOrder}
//               disabled={!orderId.trim()}
//               className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-black text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
//             >
//               Track Order
//               <FiArrowRight size={18} />
//             </button>

//             {/* Example */}
//             <p className="mt-3 text-center text-xs text-gray-400">
//               Example:{" "}
//               <button
//                 onClick={() => {
//                   setOrderId("ORD-94821");
//                   setError("");
//                 }}
//                 className="font-semibold text-gray-600 hover:text-gray-900"
//               >
//                 ORD-94821
//               </button>
//             </p>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }







"use client";

import { useEffect, useState } from "react";

import OrderSearch from "@/components/order/OrderSearch";
import OrderTracking from "@/components/order/OrderTracking";
import LoadingState from "@/components/ui/LoadingState";
import ErrorState from "@/components/ui/ErrorState";

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const response = await fetch("/orders.json");

        if (!response.ok) {
          throw new Error("Failed to load orders");
        }

        const data = await response.json();

        setOrders(data.orders);
      } catch (error) {
        setError("Something went wrong while loading orders.");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const handleTrackOrder = (orderId) => {
    const enteredId = orderId.trim().toUpperCase();

    const foundOrder = orders.find(
      (order) => order.id.toUpperCase() === enteredId
    );

    if (!foundOrder) {
      return null;
    }

    setSelectedOrder(foundOrder);

    return foundOrder;
  };

  const handleBack = () => {
    setSelectedOrder(null);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (selectedOrder) {
    return (
      <OrderTracking
        order={selectedOrder}
        onBack={handleBack}
      />
    );
  }

  return (
    <OrderSearch
      orders={orders}
      onTrackOrder={handleTrackOrder}
    />
  );
}