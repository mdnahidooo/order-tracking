# 📦 Order Tracking Screen

A modern, responsive **Order Tracking Screen** built with Next.js. The application provides customers with a clear view of their order status, delivery progress, estimated arrival, product information, and the next action they can take.

The interface is designed with a **mobile-first approach** and supports different delivery situations, including normal delivery, delayed orders, delivered-but-not-received orders, and orders where tracking information is not available yet.

---

## 🌐 Live Demo

**Live URL:**  
https://order-tracking-mauve-six.vercel.app/

## 📂 GitHub Repository

**GitHub URL:**  
https://github.com/mdnahidooo/order-tracking

> Replace the URLs above with your actual deployed URL and GitHub repository URL before submission.

---

## ✨ Features

### 🔎 Order Search

- Search an order using an Order ID
- Case-insensitive Order ID matching
- Press **Enter** to search
- Shows an error message for an invalid Order ID
- Provides an example Order ID for quick testing

### 📦 Current Order Status

The tracking screen clearly displays:

- Current order status
- Status message
- Order ID
- Estimated delivery information

The status section changes according to the order's current situation.

### 🚚 Delivery Progress

A visual timeline shows the complete delivery journey.

Depending on the order, it can include:

- Order Placed
- Order Confirmed
- Processing & Packed
- Shipped
- In Transit
- Out for Delivery
- Delivered

Completed, current, and upcoming stages have different visual states.

### ⚠️ Delayed Order

Delayed orders clearly communicate:

- Delivery delay status
- Reason for the delay
- Original delivery date
- Updated delivery date
- Available support action

This helps the customer understand what happened and what they can do next.

### 📬 Delivered but Not Received

For orders marked as delivered but reported as missing, customers can:

- See the delivery dispute status
- Report a delivery issue
- Select the type of issue
- Submit the report
- Contact support

A confirmation message is shown after submitting a report.

### 🕐 Tracking Not Available Yet

For orders that have not been shipped yet:

- The current preparation status is displayed
- The reason tracking is unavailable is explained
- The estimated delivery period is shown
- Upcoming delivery stages remain visible
- Customers can contact support if needed

The application avoids showing an empty or broken tracking screen.

### 💬 Contact Support

A dedicated support modal provides available support options such as:

- Live Chat
- Call Support

### 🚨 Report Delivery Issue

Customers can report different delivery problems:

- Package was not received
- Package was left in the wrong place
- Package arrived damaged

After submitting an issue, a success confirmation is displayed.

### ⏳ Loading State

A dedicated loading screen is shown while the order data is being loaded.

### ❌ Error State

A clear error screen is displayed if the order data cannot be loaded.

### 📱 Responsive Design

The interface is designed primarily for mobile devices and works well across common mobile widths:

- 360px
- 375px
- 390px
- 414px
- 430px

The layout also adapts to larger screens.

---

## 🎯 UX Approach

The main information hierarchy follows:

> **What's happening → When can I expect it → What can I do next**

The design focuses on making the most important delivery information immediately understandable.

### Main Priorities

- Clear delivery status
- Estimated arrival
- Visual progress
- Product information
- Delivery details
- Clear next action
- Simple navigation
- Helpful loading and error states

---

## 🧪 Test Order IDs

The project includes mock order data for testing different delivery scenarios.

| Order ID | Scenario | Status |
|---|---|---|
| `ORD-94821` | Normal delivery | In Transit |
| `ORD-88231` | Delayed order | Delivery Delayed |
| `ORD-71204` | Delivered but not received | Marked as Delivered |
| `ORD-55412` | Tracking unavailable | Preparing Order |

### Invalid Order

You can also test an invalid Order ID:

ORD-12345

---

## 🛠️ Technologies

- **Next.js**
- **JavaScript**
- **HeroUI**
- **React Icons**

---

## 📁 Project Structure

order-tracking/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   ├── order/
│   │   ├── OrderSearch.jsx
│   │   ├── OrderTracking.jsx
│   │   ├── StatusHero.jsx
│   │   ├── DeliveryTimeline.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── DeliveryDetails.jsx
│   │   └── NextStep.jsx
│   │
│   └── ui/
│       ├── LoadingState.jsx
│       ├── ErrorState.jsx
│       ├── SupportModal.jsx
│       ├── ReportIssueModal.jsx
│       └── SuccessMessage.jsx
│
├── public/
│   └── orders.json
│
├── package.json
├── next.config.mjs
├── jsconfig.json
└── README.md

---

## 🚀 Installation
- 1. Clone the Repository
> https://github.com/mdnahidooo/order-tracking

- 2. Go to the Project Folder
> cd order-tracking

- 3. Install Dependencies
> npm install

- 4. Start the Development Server
> npm run dev

>Open: http://localhost:3000

---

## 🏗️ Production

Build the project:
-npm run build

Start the production server:
-npm start

### 🌍 Deployment

- The project can be deployed using Vercel:
- Push the project to GitHub.
- Import the repository into Vercel.
- Deploy the project.
- Add the deployed URL to the README.


## 👨‍💻 Author

Md. Nahidul Islam Nahid
Full Stack Developer

---