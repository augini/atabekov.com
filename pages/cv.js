import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';

const ListItem = ({
  title,
  time,
  accomplishments,
  isTitleLink = false,
  titleLink,
  linkTag
}) => {
  return (
    <div className="text-gray-800 dark:text-white">
      <div className="flex flex-row justify-between text-md mt-6 mb-4">
        {title && isTitleLink ? (
          <a
            className={
              'font-bold text-blue-700 hover:text-blue-800 visited:text-black-800'
            }
            href={titleLink}
          >
            {title}
          </a>
        ) : (
          <p className={'font-semibold'}>{title}</p>
        )}
        {time && <p className={'font-light italic'}>{time}</p>}
      </div>

      {accomplishments && (
        <ul className={'ml-4 list-disc space-y-2'}>
          {accomplishments.map((task, index) => (
            <li key={index}>
              {task}
              {linkTag && (
                <a
                  className={
                    'text-blue-700 hover:text-blue-800 visited:text-black-800 underline'
                  }
                  href={linkTag?.href}
                >
                  {linkTag?.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function About() {
  return (
    <Container title="Resume - Farrukh Atabekov">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-gray-800 dark:text-white">
          Résumé
        </h1>

        <h2 className="font-semibold text-2xl text-gray-800 dark:text-white mb-2 mt-6">
          Work Experience
        </h2>
        <hr className="text-gray-800 w-full" />

        <div className="mb-8 leading-6 max-w-2xl text-gray-800 w-full prose-p:text-blue-400">
          <ListItem
            isTitleLink={true}
            titleLink={'https://www.toptal.com/resume/farrukh-atabekov'}
            title={'Full-Stack Engineer, Toptal'}
            time={'February, 2020 ~ Present'}
          />

          <hr className="text-gray-800 w-full mt-10" />

          <ListItem
            title={'Full-Stack Engineer, WCoding'}
            time={'December, 2020 ~ May, 2022'}
            accomplishments={[
              `Developed a cross-platform app enabling users order a customized
            video from Korean celebrities, including authentication, remote
            notifications, Google Analytics, payment gateways. Primary
            technologies: React Native, Node.js, Docker, PostgreSQL.`,
              `Optimized the deployment pipeline of the backend infrastructure
            that resulted in faster iterations.`,
              `Developed the backend API for the university candidate tracking
            system. Technologies: Java, Spring Boot, SQLite.`
            ]}
          />

          <hr className="text-gray-800 w-full mt-10" />

          <ListItem
            title={'Full-Stack Engineer, Coconut Silo'}
            time={'July, 2020 ~ December, 2020'}
            accomplishments={[
              `Developed a medical mobile application that finds the list of
              close urology clinics including features such as
              reservation , community discussions , clinic reviews and ratings.`,
              `Managed the application deployment to Play Store / App Stores,
              consulted with the reviewers to make the required updates to
              provide smooth UX.`,
              `Optimized the database queries written in MariaDB that improved
              the API response time by roughly 30%.`,
              `Collaborated with backend engineers to develop the backend API,
              deploy to AWS services, create documentation using Open API /
              Swagger.`
            ]}
          />

          <hr className="text-gray-800 w-full mt-10" />

          <ListItem
            title={'Backend Engineer, Rental Roo'}
            time={'January, 2020 ~ May, 2020'}
            accomplishments={[
              `Developed the company ERP system. RentalRoo did not have prior
              resource planning and all the tracking of rental equipment was
              being made through Excel sheets. Primary technologies: Python,
              Django, PostgreSQL, Linux, JavaScript.`,
              `Deployed the backend API to AWS services with EC2, created CI / CD
              pipelines with Docker, Jenkins.`,
              `Led the development of a mobile application with a freelancing
              team. Integrated third party auth services, payment gateways and
              launched the application written in React Native in 3 months.`
            ]}
          />
        </div>

        <h2 className="font-semibold text-2xl text-gray-800 dark:text-white mb-2 mt-6">
          Education
        </h2>
        <hr className="text-gray-800 w-full mt-4" />

        <div className="flex flex-row justify-between text-md mt-6 mb-4 w-full text-gray-800 dark:text-white ">
          <p className={'font-bold'}>Sejong University</p>
          <p className={'font-light italic'}>
            Computer Science and Engineering, 2015 ~ 2020
          </p>
        </div>

        <div className="flex flex-row justify-between text-md mt-6 mb-4 w-full text-gray-800 dark:text-white ">
          <p className={'font-bold'}>Sejong University</p>
          <p className={'font-light italic'}>
            Business Administration, 2015 ~ 2020
          </p>
        </div>

        <h2 className="font-semibold text-2xl text-gray-800 dark:text-white mb-2 mt-6">
          Coding Challenges
        </h2>
        <hr className="text-gray-800 w-full mt-4" />

        <ListItem
          title={'Speed Coding Challenge'}
          time={'By Toptal, October 2021'}
          isTitleLink={true}
          titleLink={
            'https://speedcoding.toptal.com/leaderboard?ch=toptal-js-2021&country=UZ'
          }
          accomplishments={[
            `Ranked 1st among Uzbek developers in a challenge to 
             submit solutions to coding challenges in shortest time possible 
             by all sorts of creative methods`
          ]}
        />

        <ListItem
          title={'Advent Of Code'}
          time={'December, 2021'}
          isTitleLink={true}
          titleLink={'https://adventofcode.com/2021'}
          accomplishments={[
            `This platform provides algorithmic adventurous coding challenges from December 1st until December 25th of the year.
            We participated in 2021 with our team at WCoding. You can checkout out my solutions `
          ]}
          linkTag={{
            href: 'https://github.com/augini/advent-of-code',
            text: 'here in Python'
          }}
        />
      </div>
    </Container>
  );
}
