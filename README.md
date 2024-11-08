# Full-stack E-commerce Platform

This is a comprehensive e-commerce platform with a Node.js, Express, and MongoDB backend and an Angular 18 frontend featuring standalone components. The application includes secure user authentication, authorization, and detailed product management, along with seamless order processing, payment integration, and shipping management. Users can track order history, and the frontend offers a responsive, intuitive interface with custom toast notifications to enhance the shopping experience. The project follows a well-structured, modular approach with clearly defined layers for models, services, controllers, and routes, ensuring scalability and maintainability across the stack.

## Backend Features

- **User Authentication & Authorization**: JWT-based authentication for secure access.
- **Product Management**: CRUD operations for products.
- **Order Processing**: Handle order creation, updates, and tracking.
- **Order History**: Maintain a log of order status changes.
- **Payment Processing**: Record payment details and status.
- **Shipping Management**: Store and update shipping details.

## Getting Started (Backend)

### 1. Install Dependencies

### Run the Server

    ```bash
            npm start

### Environment Variables

    ```bash
        PORT=8000
        MONGO_URI=your_mongodb_uri
        JWT_SECRET=your_jwt_secret
        NODE_ENV='development'

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

## Features

- **User Management**: User registration, login, and authentication.
- **Product Management**: CRUD functionality for products, including image uploads.
- **Order Processing**: Create and manage orders with status updates.
- **Order History**: Logs order status changes and updates over time.
- **Payment Processing**: Tracks payment transactions for each order.
- **Shipping Management**: Handles shipping details and updates shipping statuses.
- **Real-time Updates**: Uses Socket.IO for real-time updates.

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **MongoDB** (local or Atlas)
- **Postman** (for testing APIs)
