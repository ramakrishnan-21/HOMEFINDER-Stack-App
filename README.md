<h1> HOMELANDER </h1>
<p>This project implements a real estate management system using ReactJs, Prisma ORM with MongoDB, NodeJs, Socket IO and Zustand for state Management.The system supports user management, post management, chat functionality, and saved posts for users.</p>

# Project Setup

To set up and run the project, follow these steps:

1. Clone the repository.
2. Navigate to each of the following folders and install the dependencies:

   ```sh
   cd client
   npm install

   cd ../api
   npm install

   cd ../socket
   npm install
3. Open three separate terminals and run the following commands:
   ```sh
   cd client
   npm run dev

   cd ../api
   npm start

   cd ../socket
   npm start


<h2>Data Model</h2>
The schema includes models for User, Post, PostDetail, SavedPost, Chat, and Message, each with specific fields to capture relevant data. The User model maintains user information, the Post model holds property listings, and the PostDetail model provides additional details about each post. The SavedPost model allows users to save their favorite posts, while the Chat and Message models enable real-time communication between users. The ER diagram is as follows

![image](https://github.com/user-attachments/assets/4cc994ec-d27f-4e65-bdd2-f9c20d68327e)

<h2>Design Patterns Followed</h2>

The project employs several design patterns to ensure clean, maintainable code:
<li><b>Singleton Pattern</b>: Manages a single Prisma client instance to ensure efficient database connections.</li>
<li><b>Builder Pattern:</b> Splits complex object creation processes, such as Post and PostDetail, into simpler, more manageable parts. This separation allows for more flexible and maintainable code by constructing Post objects and their detailed descriptions (PostDetail) independently.</li>

<h2>High Level Architecture</h2>

<img width="466" alt="Screenshot 2024-07-26 at 8 39 32 PM" src="https://github.com/user-attachments/assets/0ae35404-e2e9-40c6-b6d8-9d982c11019a">


The application architecture is built with a React frontend and an Express backend. The React app interacts with the Express API, where middleware manages authentication and authorization, ensuring that only logged-in users can access protected routes. The Express API handles data requests, interacts with the MongoDB database via Prisma ORM, and returns the appropriate responses. In the React app, routes are categorized into protected and unprotected types: protected routes include profile updates, user updates, and post creation, while unprotected routes include the home page, listing page, login, and registration. This structure ensures a secure and efficient flow of data and user interactions across the system.We also have socket IO server to allow real time chat updates to both the participants and we use state management library called Zustand to display notificaion on unread messages in navbar (currently notification is not real time we have to refresh it but in future we can make it real time).


<h2>Features</h2>

The Real Estate Management System offers a comprehensive set of features to enhance user experience and streamline property management:

<ul>
  <li><strong>User Management:</strong> Users can register, log in, and manage their profiles, including updating avatars and other personal details.</li>
  <li><strong>Property Listings:</strong> Users can create, update, and delete property listings. Each listing includes details such as title, price, images, address, city, bedroom count, bathroom count, type, property type, and location coordinates.</li>
  <li><strong>Detailed Property Information:</strong> Each property listing can have additional details captured in the PostDetail model, including descriptions, utilities, pet policies, income requirements, and proximity to schools, buses, and restaurants.</li>
  <li><strong>Saved Posts:</strong> Users can save their favorite property listings for quick access later, providing a convenient way to bookmark potential properties of interest.</li>
  <li><strong>Chat Functionality:</strong> Real-time chat allows users to communicate directly with each other, enhancing interaction and negotiation capabilities. The chat system supports multiple users and maintains a history of messages.Also we display notifications to user using state management library</li>
  <li><strong>Search and Filter:</strong> Users can search and filter property listings based on various criteria, such as city, type, property type, bedroom count, and price range, making it easy to find the perfect property.</li>
  <li><strong>Secure Authentication:</strong> JWT based authentication ensures that only authorized users can access and manage their information, enhancing security and data privacy.</li>
  <li><strong>Responsive Design:</strong> The application is designed to be responsive, ensuring a seamless experience across different devices, including desktops, tablets, and mobile phones.</li>
  <li><strong>Map Integration:</strong> Users can view property locations and detailed information on the react leafleft map, providing a visual representation of property listings and their proximity to amenities.</li>
</ul>

<h2>Future Enhancements</h2>
<ul>
  <li><strong>Ratings and Reviews:</strong> Implement a system for users to rate and review properties and agents, enhancing credibility and providing valuable feedback.</li>
  <li><strong>Advanced Search Filters:</strong> Introduce more granular search filters, such as property age, amenities, and neighborhood ratings, to help users find exactly what they’re looking for.</li>
  <li><strong>Agent Profiles:</strong> Create a dedicated profile type for real estate agents, allowing them to showcase their listings, credentials, and client testimonials.</li>
  <li><strong>Interactive Property Maps:</strong> Enhance property maps with interactive features like nearby schools, hospitals, and shopping centers, offering users more contextual information.</li>
</ul>

<h2>Scalability</h2>
To ensure the system can handle growing user demands and an increasing number of property listings, it is designed with scalability in mind. By leveraging a modular architecture and employing efficient database indexing in the future, the system can accommodate a higher volume of transactions and data. Additionally, using cloud-based solutions and microservices will allow for dynamic scaling of resources as needed. This approach ensures that performance remains optimal even as the user base and data complexity expand.

<h2>Author</h2>

Ramakrishnan Varadharajan












