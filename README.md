# healthcare-cyber-support-revamp
revamp of the network health monitoring platform 
# Healthcare Cyber Support Dashboard

## Overview
The **Healthcare Cyber Support Dashboard** is a real-time web application designed to monitor, manage, and display cyber threat intelligence for healthcare environments. The platform provides an intuitive and responsive interface for users to track and analyze security threats, incidents, and reports, ensuring a proactive approach to cybersecurity.

---

## Key Features
- **Real-Time Threat Monitoring**: 
  - Utilizes WebSocket connections to provide live updates on potential cybersecurity threats.
  - Displays the top 5 recent threats with severity indicators (Low, Medium, High).

- **Interactive UI**: 
  - Built with **React** and **Next.js** for a modern, dynamic user experience.
  - Styled with **Tailwind CSS** for a clean, responsive, and consistent interface.

- **Threat Severity Highlighting**: 
  - Clear visual indicators for threat severity using color-coded tags (e.g., green for Low, yellow for Medium, red for High).

- **Modular Architecture**: 
  - Components like `ThreatIntelligence` and reusable utilities (e.g., `useWebSocket` hook) ensure scalability and maintainability.

---

## Technologies Used

### **Language**
- **TypeScript**: Provides type safety and better developer experience.

### **Framework**
- **Next.js**: Handles server-side rendering and optimized static builds for improved performance and SEO.

### **Styling**
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive design.

### **Real-Time Communication**
- **WebSocket API**: Enables live updates for dynamic threat monitoring.

### **UI Components**
- **ShadCN/UI**: Used for accessible and customizable interface components, such as alerts.

---

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/healthcare-cyber-support.git
   cd healthcare-cyber-support

