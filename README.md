# Full-stack E-commerce Platform

This is a comprehensive e-commerce platform with a Node.js, Express, and MongoDB backend and an Angular 18 frontend featuring standalone components. The application includes secure user authentication, authorization, and detailed product management, along with seamless order processing, payment integration, and shipping management. Users can track order history, and the frontend offers a responsive, intuitive interface with custom toast notifications to enhance the shopping experience. The project follows a well-structured, modular approach with clearly defined layers for models, services, controllers, and routes, ensuring scalability and maintainability across the stack.

---

## Table of Contents

- [Full-stack E-commerce Platform](#full-stack-e-commerce-platform)
  - [Table of Contents](#table-of-contents)
  - [Backend Features](#backend-features)
  - [Frontend Features](#frontend-features)
  - [Getting Started (Backend)](#getting-started-backend)
    - [1. Install Dependencies](#1-install-dependencies)
    - [Run the Server](#run-the-server)
    - [Environment Variables](#environment-variables)
  - [Project Structure for Backend](#project-structure-for-backend)
  - [Getting Started (Frontend)](#getting-started-frontend)
  - [Project Structure for Frontend](#project-structure-for-frontend)
  - [Tech Stack](#tech-stack)
  - [Future Improvements](#future-improvements)

---

## Backend Features

- **User Authentication & Authorization**: JWT-based authentication for secure access.
- **Product Management**: CRUD operations for products.
- **Order Processing**: Handle order creation, updates, and tracking.
- **Order History**: Maintain a log of order status changes.
- **Payment Processing**: Record payment details and status.
- **Shipping Management**: Store and update shipping details.

---

## Frontend Features

- **Responsive Design**: A seamless user experience across devices.
- **Custom Toast Notifications**: Feedback on actions like adding to cart or checkout success.
- **Standalone Components**: Angular 18 components for modularity and reusability.
- **Order Tracking**: View and monitor order status in real-time.
- **Product Details**: Detailed product pages with image galleries, pricing, and descriptions.
- **Cart Management**: Add, update, and remove items with ease.
- **Secure Checkout**: Integration with backend for secure payment handling.

---

## Getting Started (Backend)

### 1. Install Dependencies

### Run the Server

    ```bash
            npm start
    ```

### Environment Variables

    ```bash
        PORT=8000
        MONGO_URI=your_mongodb_uri
        JWT_SECRET=your_jwt_secret
        NODE_ENV='development'
    ```

## Project Structure for Backend

    📂 project-root
    ├── 📂 server
    │   ├── 📂 src
    │   │   ├── 📂 controllers
    │   │   │   ├── auth.controller.js
    │   │   │   ├── order.controller.js
    │   │   │   ├── product.controller.js
    │   │   │   ├── orderHistory.controller.js
    │   │   │   ├── payment.controller.js
    │   │   │   └── shipping.controller.js
    │   │   ├── 📂 models
    │   │   │   ├── user.model.js
    │   │   │   ├── product.model.js
    │   │   │   ├── order.model.js
    │   │   │   ├── orderHistory.model.js
    │   │   │   ├── payment.model.js
    │   │   │   └── shipping.model.js
    │   │   ├── 📂 routes
    │   │   │   ├── auth.route.js
    │   │   │   ├── order.route.js
    │   │   │   ├── product.route.js
    │   │   │   ├── orderHistory.route.js
    │   │   │   ├── payment.route.js
    │   │   │   └── shipping.route.js
    │   │   ├── 📂 services
    │   │   │   ├── auth.service.js
    │   │   │   ├── order.service.js
    │   │   │   ├── product.service.js
    │   │   │   ├── orderHistory.service.js
    │   │   │   ├── payment.service.js
    │   │   │   └── shipping.service.js
    │   │   ├── app.js
    │   │   ├── config.js
    │   │   └── server.js
    ├── .env
    ├── package.json
    └── README.md

---

## Getting Started (Frontend)

1. **Install Dependencies**

        ```
            npm install
        ```

2. **Environment Variables**

    Configure the frontend environment in `src/environments/environment.ts`:
        ```
            export const environment = {
            production: false,
            apiUrl: 'http://localhost:8000/api'
            };
        ```

3. **Run the Development Server**
        ```
            ng serve
        ```

4. **Navigate to the Application**

     Open your browser at [http://localhost:4200](http://localhost:4200) to view the application.

---

## Project Structure for Frontend

    📂 client
    ├── 📂 src
    │   ├── 📂 app
    │   │   ├── 📂 components
    │   │   │   ├── 📂 header
    │   │   │   │   ├── header.component.ts
    │   │   │   │   ├── header.component.html
    │   │   │   │   └── header.component.scss
    │   │   │   ├── 📂 footer
    │   │   │   │   ├── footer.component.ts
    │   │   │   │   ├── footer.component.html
    │   │   │   │   └── footer.component.scss
    │   │   │   ├── 📂 product-card
    │   │   │   │   ├── product-card.component.ts
    │   │   │   │   ├── product-card.component.html
    │   │   │   │   └── product-card.component.scss
    │   │   │   └── 📂 toast
    │   │   │       ├── toast.component.ts
    │   │   │       ├── toast.component.html
    │   │   │       └── toast.component.scss
    │   │   ├── 📂 pages
    │   │   │   ├── 📂 home
    │   │   │   │   ├── home.component.ts
    │   │   │   │   ├── home.component.html
    │   │   │   │   └── home.component.scss
    │   │   │   ├── 📂 product-details
    │   │   │   │   ├── product-details.component.ts
    │   │   │   │   ├── product-details.component.html
    │   │   │   │   └── product-details.component.scss
    │   │   │   ├── 📂 cart
    │   │   │   │   ├── cart.component.ts
    │   │   │   │   ├── cart.component.html
    │   │   │   │   └── cart.component.scss
    │   │   │   ├── 📂 checkout
    │   │   │   │   ├── checkout.component.ts
    │   │   │   │   ├── checkout.component.html
    │   │   │   │   └── checkout.component.scss
    │   │   │   └── 📂 orders
    │   │   │       ├── orders.component.ts
    │   │   │       ├── orders.component.html
    │   │   │       └── orders.component.scss
    │   │   ├── 📂 services
    │   │   │   ├── product.service.ts
    │   │   │   ├── auth.service.ts
    │   │   │   ├── cart.service.ts
    │   │   │   ├── order.service.ts
    │   │   │   └── toast.service.ts
    │   │   ├── 📂 pipes
    │   │   │   └── currency-format.pipe.ts
    │   │   ├── 📂 guards
    │   │   │   └── auth.guard.ts
    │   │   ├── 📂 models
    │   │   │   ├── product.model.ts
    │   │   │   ├── user.model.ts
    │   │   │   └── order.model.ts
    │   │   ├── 📂 styles
    │   │   │   ├── variables.scss
    │   │   │   ├── main.scss
    │   │   │   └── mixins.scss
    │   │   ├── app.component.ts
    │   │   ├── app.component.html
    │   │   ├── app.component.scss
    │   │   └── app.config.ts
    ├── 📂 assets
    ├── 📂 environments
    │   ├── environment.ts
    │   └── environment.prod.ts
    ├── main.ts
    ├── index.html
    └── styles.scss
---

## Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose, Socket.IO, JWT
- Frontend: Angular 18, TypeScript, SCSS, Angular Material, Angular Router
- dditional: Socket.IO for real-time updates, and secure RESTful API for frontend-backend communication.
  
---

## Future Improvements

- Future Improvements
- Enhanced Search and Filtering: Implement advanced search options for product listings.
- User Roles & Permissions: Expand roles to support multiple admin levels.
- Wishlist Feature: Allow users to save products to a wishlist.
- Product Reviews and Ratings: Enable user-generated reviews and ratings for products.
- Discounts and Promotions: Add support for promotional codes and discounts.
- Notifications: Implement email or SMS notifications for order updates.
- Improved Order Analytics: Include analytics for better business insights.
  