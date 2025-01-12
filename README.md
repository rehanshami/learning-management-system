# Full-Stack Learning Management System (LMS)

**[View Live Project](https://learning-management-system-beta-one.vercel.app/)**

## Overview

This is a scalable, enterprise-grade Learning Management System leveraging modern web development technologies and cloud-native solutions.

### Features

- **Dynamic and Responsive UI:** Built using Next.js, React, Redux Toolkit, Tailwind CSS, and TypeScript.
- **Backend architecture:** Powered by Node.js, Express.js, and AWS services (Lambda, API Gateway, DynamoDB, S3, CloudFront).
- **DevOps:** Includes containerization with Docker and deployment via AWS CloudFront.

---

## Project Structure

```
root/
├── client/    # Frontend code (React, Next.js, Tailwind CSS)
├── server/    # Backend code (Node.js, Express.js, AWS Lambda)
```

---

## Prerequisites

- **Node.js** (v16 or above)
- **Docker** (optional for containerization)
- **AWS CLI** (for deployment)

---

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:rehanshami/learning-management-system.git
cd learning-management-system
```

### Frontend Setup (Client)

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start development server
   ```bash
   npm run dev
   ```

### Backend Setup (Server)

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start development server
   ```bash
   npm start
   ```
