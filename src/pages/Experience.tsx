import React, { useState } from "react";

import wealthsimpleLogoImgUrl from "../assets/images/companies/wealthsimple_logo.png";
import zendeskLogoImgUrl from "../assets/images/companies/zendesk_logo.svg";
import momentiveLogoImgUrl from "../assets/images/companies/SurveyMonkey_Logo.png";
import twitchLogoImgUrl from "../assets/images/companies/twitch_logo.jpeg";
import georgeBrownLogoImgUrl from "../assets/images/about/george_brown_logo.png";
import mcmasterLogoImgUrl from "../assets/images/about/mcmaster_logo.jpeg";
import innovfinLogoImgUrl from "../assets/images/companies/innovfin_logo.png";
function Experience() {
  const [filterYear, setFilterYear] = useState<string | null>(null);

  return (
    <div className="p-4 md:p-8 w-full max-w-5xl flex flex-col items-center md:items-start space-y-4 md:space-y-6 px-4 md:px-0">
      {/* Education */}
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <EducationEntry
        institution="McMaster University"
        location="Hamilton, Ontario"
        degree="Bachelor of Technology in Software Engineering Technology"
        date="Sep. 2021 – Apr. 2024"
        imageUrl={mcmasterLogoImgUrl}
      />
      <EducationEntry
        institution="George Brown College"
        location="Toronto, Ontario"
        degree="Advanced Diploma in Computer Programmer Analyst"
        date="Sep. 2018 – May 2021"
        imageUrl={georgeBrownLogoImgUrl}
      />

      {/* Professional Experience */}
      <h2 className="text-xl font-semibold mt-8 mb-4">
        Professional Experience
      </h2>

      {/* Dropdown Filter */}
      <div className="mb-4">
        <label htmlFor="yearFilter" className="mr-2">
          Filter by Year:
        </label>
        <select
          id="yearFilter"
          onChange={(e) => setFilterYear(e.target.value)}
          value={filterYear || ""}
        >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

      {/* Experience Entries */}
      {(!filterYear || filterYear === "2023") && (
        <ExperienceEntry
          title="Software Engineer Intern - iOS"
          company="Twitch - Amazon"
          location="San Francisco, California"
          date="May. 2023 – Aug. 2023"
          responsibilities={[
            "Launched <b>Multi-Language Selector</b> for iOS, allowing users to filter live streams by broadcast languages, fulfilling a highly-requested feature.",
            "Developed <b>Smarter Mobile Following Sorting</b> for iOS through a new <b>GraphQL</b> endpoint, enabling sorting by Views or user-specific recommendations.",
            "Ensured comprehensive edge case coverage through UI tests, enhancing overall product stability.",
            "Presented and peer-reviewed technical specifications, solidifying technical approach for new features.",
          ]}
          imageUrl={twitchLogoImgUrl}
        />
      )}
      {(!filterYear || filterYear === "2023") && (
        <ExperienceEntry
          title="Software Engineer Intern"
          company="Wealthsimple"
          location="Toronto, Ontario"
          date="January. 2023 – May. 2023"
          responsibilities={[
            "Collaborated in the development and scoping of a first-party <b>WS Work - HRIS Integration</b>, providing a competitive edge for potential Canadian RRSP launches. Employed <b>Python</b>, <b>Ruby</b>, and <b>Apache Airflow DAGs</b>.",
            "Deprecated and tested feature flags, ensuring proper user interactions and improved user experience.",
            "Enhanced troubleshooting skills by resolving On-Call tickets, using in-house tools to identify and rectify app-breaking errors, reducing downtime by 15%.",
          ]}
          imageUrl={wealthsimpleLogoImgUrl}
        />
      )}
      {(!filterYear || filterYear === "2022") && (
        <ExperienceEntry
          title="Software Engineer Intern"
          company="Zendesk"
          location="Montreal, Quebec"
          date="Sep. 2022 – Dec. 2022"
          responsibilities={[
            "Created a migration script to delete apps attached to deleted Zendesk accounts and filtered through 1.03 million accounts, including 59.2k ”ghost accounts” stored within <b>SunCo</b>",
            "Documented methods for aggregating data through <b>Tableau</b> and <b>Google Data Studio</b>, ensuring data from the past 3 months could be accessed and no data was lost",
            "Improved the storage and retrieval of over 1,000+ archived reports from <b>S3</b>, enabling sales and analytics to access past reports properly by year",
          ]}
          imageUrl={zendeskLogoImgUrl}
        />
      )}
      {(!filterYear || filterYear === "2022") && (
        <ExperienceEntry
          title="Software Engineer Intern (Pipeline)"
          company="Momentive (Formerly SurveyMonkey)"
          location="Ottawa, Ontario"
          date="May 2022 – Aug. 2022"
          responsibilities={[
            "Replaced 41 legacy <b>Jenkin</b> jobs with <b>GitHub Actions</b> workflows and reduced production cost by 23%",
            "Established connectivity between <b>GitHub Action</b> runners and <b>Selenoid</b> grid by building and deploying a new region test node using <b>Ansible</b>, <b>TerraForm</b> and custom cloud provisioning tools",
            "Automated test suites to run in parallel and generate <b>Allure Reports</b>, reducing run time by about 45%",
          ]}
          imageUrl={momentiveLogoImgUrl}
        />
      )}
      {(!filterYear || filterYear === "2021") && (
        <ExperienceEntry
          title="Junior Developer Intern"
          company="InnovFin Consulting Inc."
          location="Peterborough, Ontario"
          date="Sep. 2021 – May 2022"
          responsibilities={[
            "Orchestrated a new platform and content management system to maintain web content and blog data accessed by over 1000+ monthly readers utilizing a custom scalable back-end (<b>Amazon EC2</b>, <b>Node.js</b>, <b>JavaScript</b>, <b>GraphQL</b>) deployed on public cloud infrastructure (<b>Amazon Amplify</b>) and administrative dashboards (<b>React</b>)",
            "Assisted in the development of a blockchain marketplace with a cross-platform mobile application (<b>JavaScript</b>, <b>React Native</b>) and a cryptocurrency reward system (<b>Moralis Web3</b>, <b>Solidity</b>, <b>React</b>)",
            "Refactored 32 <b>React</b> components by creating generic services & components improving performance & maintainability by approx. 26%",
          ]}
          imageUrl={innovfinLogoImgUrl}
        />
      )}
    </div>
  );
}

const EducationEntry: React.FC<{
  institution: string;
  location: string;
  degree: string;
  date: string;
  imageUrl: string;
}> = ({ institution, location, degree, date, imageUrl }) => (
  <div className="mb-4 flex space-x-4">
    <img src={imageUrl} alt={institution} className="w-20 h-20 rounded" />
    <div>
      <h3 className="font-bold">{institution}</h3>
      <p>{degree}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-500">{date}</p>
    </div>
  </div>
);

const ExperienceEntry: React.FC<{
  title: string;
  company: string;
  location: string;
  date: string;
  responsibilities: string[];
  imageUrl: string;
}> = ({ title, company, location, date, responsibilities, imageUrl }) => (
  <div className="mb-6 flex space-x-4">
    <img src={imageUrl} alt={company} className="w-20 h-20 rounded" />
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-700">{company}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-500 mb-2">{date}</p>
      <ul className="list-disc pl-5">
        {responsibilities.map((responsibility, idx) => (
          <li
            key={idx}
            dangerouslySetInnerHTML={{ __html: responsibility }}
          ></li>
        ))}
      </ul>
    </div>
  </div>
);

export default Experience;
