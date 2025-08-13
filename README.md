Nutikas: AI-Powered Special Education Learning Platform
========================================================

**Website:** [nutikas.vercel.app](https://nutikas.vercel.app/)\
**Quiz Interface:** [nutikas.vercel.app/quiz](https://nutikas.vercel.app/quiz)

Overview
--------

Nutikas is an AI-powered educational tool designed to support special education through adaptive mathematics problem generation and evaluation. The platform provides interactive quizzes tailored to the learner's needs and includes features for educators to manage classes, track progress, and curate problem sets. This project is structured as a full-stack application with a Next.js frontend and an Express.js backend, powered by a Prisma-managed relational database.


Technology Stack
----------------

### Frontend

-   Next.js -- Server-rendered React framework (Vercel deployment)

-   JavaScript/TypeScript support

### Backend

-   Express.js -- Node.js web framework

-   Prisma ORM -- Database access and migrations

-   [PostgreSQL](https://www.postgresql.org/) (or configured DB via `.env`)


Getting Started
---------------

### Prerequisites

-   Node.js (v18 or newer recommended)

-   npm or yarn

-   PostgreSQL database instance (local or cloud-hosted)

### Installation

1.  **Clone the repository:**

    `git clone https://github.com/fegaeze/ai_special_education_thesis.git`\
    `cd ai_special_education_thesis`

2.  **Install dependencies:**

    `npm run install:all`

3.  **Configure environment variables:**

    -   Copy `.env.example` to `.env` in the `server` directory.
    -   Update database credentials, server ports, and any API keys as required.

4.  **Run database migrations:**

    `npm run prisma:migrate`

5.  **Start development environment:**

    `npm run dev`
