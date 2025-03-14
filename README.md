# My Portfolio Website

This is a React-based portfolio website built using **Vite** to showcase my projects and skills. It includes several components like **About Me**, **Projects**, **Skills**, **Resume**, and **Contact**.

## 🚀 Features

- **Responsive Design:** Fully responsive, works across various devices.
- **Project Display:** Showcases multiple projects with descriptions and links.
- **Contact Form:** Allows users to send messages directly.
- **Testing:** Unit tests for critical components using **Jest** and **React Testing Library**.
- **CSS Modules:** CSS files are scoped to their respective components for better styling isolation.

## 📦 Installation

1. Clone the repository:

```bash
https://github.com/your-username/my-portfolio.git
```

2. Navigate to the project directory:

```bash
cd my-portfolio
```

3. Install dependencies:

```bash
npm install
```

## 🔨 Usage

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Serve the production build:

```bash
npm run preview
```

## ✅ Running Tests

To run tests using Jest:

```bash
npm test
```

## 📄 Testing Configuration

- Jest is configured to use `jsdom` as the test environment.
- Style files are mocked using `jest-css-modules` or `identity-obj-proxy`.

## 🔧 Dependencies

- React
- Vite
- Jest
- React Testing Library
- Babel
- jest-css-modules / identity-obj-proxy

## 📌 Issues Faced & Solutions

- CSS files causing errors during tests - Solved by using **`jest-css-modules`**.
- Ensuring Jest recognizes JSX syntax - Configured **`babel.config.cjs`** properly.

## 📬 Contact

Created by **Lauren Menezes**. Feel free to reach out!

