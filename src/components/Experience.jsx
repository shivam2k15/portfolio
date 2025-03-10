import React from "react";

const Experience = () => {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Software Developer Engineer II",
      company: "Byteridge",
      description: `Worked on creating a Passport application for the Y-axis company in nodejs, 
        react, mongoDb with CI/CD via Jenkins and deployed on AWS.
Worked on IOT based product Device Thread, designed REST apis and database
 schemas for an organization feature in NodeJs and postgresql. 
 Improved api response time through efficient api caching and queuing 
 via redis and implemented cron jobs for important events in App.
Refactored code, onboarded other team members, gave KT and gave demos 
on product features to clients. Implemented realtime chat feature with 
the help of socket.io and express, mongodb in a company product, 
worked on multiple products for adding UI features in react.`,
      technologies: [
        "NodeJs",
        "Mongodb",
        "Reactjs",
        "Nextjs",
        "Redis",
        "Postgres",
        "Docker",
        "AWS",
      ],
    },
    {
      year: "2021 - 2022",
      role: "Software Developer Engineer",
      company: "Catosoft",
      description: `Improved api response time by 60%  through efficient api caching and queuing via redis.
Completed 2 products within 6 months in NodeJs Framework and gave multiple demos to clients, investors and customers.
Refactored the code base and reduced the number of lines by 15 % and practiced TDD and CI/CD.
Worked with socket, and implemented replica set on database in mongodb.
Implemented SSR in EJS for best SEO.`,
      technologies: ["NodeJs", "Mongodb", "Redis", "Nginx", "Docker", "AWS"],
    },
    {
      year: "2019 - 2021",
      role: "Software Engineer",
      company: "Gizbel",
      description: `Worked as a project lead on a project management web app (SP Polytechnic) for Gizbel’s and delivered the backend before time in NodeJs framework express and mysql.
Attended client meetings for products and worked on an IP based project (SabicIP).`,
      technologies: ["NodeJs", "Mysql", "Angular", "Express"],
    },
  ];
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-stone-500 text-sm">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="bg-stone-900 text-stone-300
                   text-sm px-2 py-1 rounded mr-2 mt-2"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-stone-400">{"2015 - 2019"}</p>
          </div>

          <div className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              {"Indian Institute of Information Technology Vadodara"}
            </h3>
            <p className="mb-4 text-stone-400">
              {"Bachelor of technology, Computer Science and Engineering"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
