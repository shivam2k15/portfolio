import React from "react";
import profilePic from "../assets/ShivamProfileImg.png";

const Bio = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/3 lg:pr-8">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Shivam Kumar"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 lg:pl-8">
          <div className="flex flex-col lg:items-startmt-10 lg:p-8">
            <h2 className="text-4xl pb-2 tracking-tighter lg:text-8xl">
              Shivam Kumar
            </h2>
            <span className="bg-gradiant-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-light text-left">
              Software developer Engineer II
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {`I am a Software Engineer with 5 years of experience in building web applications 
              of monolithic and microservices in MERN stack frameworks like Express, React, 
              NextJs in Typescript and JavaScript. Experienced in improving and optimizing 
              performance of backend services and creating Rest APIs and graphql.
              Strong understanding and knowledge of coding practices, data structures and algorithms, 
            OOPs concepts, Design Patterns and System design principles.
            Hands-on experience with relational (Mysql, Postgresql) and non-relational databases 
            (MongoDb) and Caches (Redis), Docker and AWS services.
            Worked with frontend frameworks for SSR in React, StencilJs, Angular and Ejs.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
