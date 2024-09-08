"use client";
import React from "react";
import Navigation from "../Navigation/page";
import Image from "next/image";
import pic from "../public/pic.jpeg";
import github from "../public/th.jpeg";
import linkdin from "../public/Linkdin.jpeg";
import gmail from "../public/download.png";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-10">
        <section
          id="home"
          className="relative flex flex-col items-center text-center py-16 bg-cover bg-center bg-[url('/path-to-background-image.jpg')]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-60"></div>

          <div className="relative z-10">
            <div className="relative w-36 h-36 overflow-hidden rounded-full border-4 border-gray-300 shadow-lg mb-6">
              <Image
                className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                src={pic}
                layout="fill"
                alt="Profile Picture"
              />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-100 mb-4 transition-transform duration-300 hover:translate-x-2 hover:text-blue-400">
              Hello, I'm Shubham Sharma
            </h1>
            <p className="text-lg text-gray-200 transition-transform duration-300 hover:translate-x-2 hover:text-blue-300">
              I'm a MERN stack developer
            </p>
          </div>
        </section>

        <section id="projects" className="mt-12 py-16 bg-gray-50">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Projects
          </h2>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  FETCH API DATA IN REACT
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Create a React Component:</strong> Use React's
                  useState to manage the state for your data, loading status,
                  and any potential errors. Use useEffect to trigger the fetch
                  request when the component mounts.
                  <br />
                  <br />
                  <strong>Fetch Data:</strong> Use the native fetch function to
                  make a GET request to your API endpoint. Handle the response
                  by converting it to JSON and updating your component's state.
                  <br />
                  <br />
                  <strong>Handle Loading and Errors:</strong> Display a loading
                  message while the data is being fetched. Show an error message
                  if the fetch fails.
                  <br />
                  <br />
                  <strong>Display Data:</strong> Render the fetched data once
                  it's successfully retrieved.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  TODO APP (MERN Stack)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Overview:</strong> A To-Do app typically allows users
                  to create, read, update, and delete (CRUD) tasks. The MERN
                  stack provides a robust set of technologies to handle both the
                  front-end and back-end of the application.
                  <br />
                  <br />
                  <strong>Architecture:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      <strong>Front-End (React):</strong> Build React components
                      for adding, listing, editing, and deleting tasks. Use
                      React’s useState and useEffect hooks to manage and display
                      task data. Make HTTP requests to the Express backend to
                      perform CRUD operations.
                    </li>
                    <li>
                      <strong>Back-End (Node.js + Express.js):</strong> Create
                      RESTful API endpoints for tasks (e.g., GET, POST, PUT,
                      DELETE). Use Mongoose to interact with MongoDB for storing
                      and retrieving tasks. Handle requests, interact with the
                      database, and send responses.
                    </li>
                    <li>
                      <strong>Database (MongoDB):</strong> Define a schema for
                      tasks (e.g., title, description, status). Implement
                      operations to create, read, update, and delete tasks.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <strong>Implementation Steps:</strong> Set Up MongoDB locally
                  or use a cloud service like MongoDB Atlas. Define a schema for
                  tasks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  ECOMMERCE WEBSITE
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This project is an eCommerce website built with the MERN
                  stack, incorporating MongoDB, Express.js, React, and Node.js.
                  It offers a comprehensive online shopping experience with
                  various features:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 2.7L19.74 19H4.28L12 4.7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Frontend:</h4>
                      <p className="text-gray-600">
                        Developed with React for a dynamic and responsive user
                        interface. Users can browse products, view details, and
                        manage their shopping cart seamlessly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Backend:</h4>
                      <p className="text-gray-600">
                        Utilizes Node.js and Express.js to handle server-side
                        logic, including product management, order processing,
                        and user authentication.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">Database:</h4>
                      <p className="text-gray-600">
                        MongoDB is used for data storage, managing product
                        information, user details, and order history.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Payment Gateway:
                      </h4>
                      <p className="text-gray-600">
                        Stripe is integrated to facilitate secure online
                        payments, handling transactions and payment processing
                        efficiently.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Authentication:
                      </h4>
                      <p className="text-gray-600">
                        JWT (JSON Web Tokens) is implemented for secure user
                        authentication, ensuring that only authorized users can
                        access certain features and manage their accounts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-12 py-16 bg-gray-50">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Skills
          </h2>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
              {/* Skill Item 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 2.7L19.74 19H4.28L12 4.7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  JavaScript
                </h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-blue-500">
                    70%
                  </div>
                </div>
              </div>

              {/* Skill Item 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  HTML
                </h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-500 h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-purple-500">
                    90%
                  </div>
                </div>
              </div>

              {/* Skill Item 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  CSS
                </h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-orange-500 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-orange-500">
                    75%
                  </div>
                </div>
              </div>

              {/* Skill Item 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  React
                </h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-green-500">
                    75%
                  </div>
                </div>
              </div>

              {/* Skill Item 5 */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Node.js
                </h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-yellow-500 h-2.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-yellow-500">
                    60%
                  </div>
                </div>
              </div>

              {/* Skill Item 6 */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  MongoDB
                </h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-500 h-2.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-red-500">
                    75%
                  </div>
                </div>
              </div>

              {/* Skill Item 7 */}
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 2.7L19.72 19H4.28L12 4.7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Express.js
                </h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-teal-500 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-teal-500">
                    70%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              Contact Me
            </h2>
            <p className="text-gray-700 text-lg mb-6 text-center">
              📞 858-082-0152
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Shubham2001sharma"
                className="inline-flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex items-center justify-center bg-white shadow-sm">
                  <Image
                    src={github}
                    width={32}
                    height={32}
                    alt="GitHub Icon"
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-semibold">Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-sharma-346734214"
                className="inline-flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex items-center justify-center bg-white shadow-sm">
                  <Image
                    src={linkdin}
                    width={32}
                    height={32}
                    alt="LinkedIn Icon"
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-semibold">LinkedIn</span>
              </a>

              <a
                href="mailto:sharmashubu4600@gmail.com"
                className="inline-flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex items-center justify-center bg-white shadow-sm">
                  <Image
                    src={gmail}
                    width={32}
                    height={32}
                    alt="Gmail Icon"
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-semibold">Gmail</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
