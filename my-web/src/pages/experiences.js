import React from 'react';
import "./pages.css";
import { fadeIn } from "react-animations";
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const timelineData = [
  {
    text: 'AI Strategy Consultant Intern @ Deloitte (Omnia AI)',
    date: 'May 2023 -  Aug 2023',
    category: {
        tag: 'Professional',
        color: '#7851A9'
    },
    link: {
        url:
            'https://www2.deloitte.com/ca/en/pages/deloitte-analytics/articles/omnia-artificial-intelligence.html',
        text: 'Learn more about Omnia AI'
    }
},
  {
      text: 'Product Management Intern @ Shoplogix -  A Constellation Software Inc. Company',
      date: 'Sept 2022 -  Dec 2022',
      category: {
          tag: 'Professional',
          color: '#7851A9'
      },
      link: {
          url:
              'https://shoplogix.com/',
          text: 'Learn more about Shoplogix'
      }
  },
  {
      text: 'Director of Product @ WAT.Ai',
      date: 'Aug 2022 -  Present',
      category: {
          tag: 'Extracurricular',
          color: '#4A3269'
      },
      link: {
          url:
              'https://linktr.ee/wat.ai',
          text: 'Check us out :)'
      }
  },
  {
    text: 'Engineering Ambassador @ The University of Waterloo',
    date: 'May 2022 - Present',
    category: {
        tag: 'Extracurricular',
        color: '#4A3269'
    },
    link: {
        url:
            'https://uwaterloo.ca/engineering-student-ambassadors/',
        text: 'Check us out :)'
    }
  },
  {
    text: 'Connected Software Team Lead @ WATOLINK',
    date: 'May 2022 -  Nov 2022',
    category: {
        tag: 'Extracurricular',
        color: '#4A3269'
    },
    link: {
        url:
            'https://www.watolink.ca/',
        text: 'Check us out :)'
    }
  },
  {
    text: 'Acapella Singer @ The Waterboys and The Acabellas',
    date: 'May 2022 -  Aug 2022',
    category: {
        tag: 'Extracurricular',
        color: '#4A3269'
    },
    link: {
        url:
            'https://linktr.ee/uwacc',
        text: 'Check out acapella @ UW :)'
    }
  },
  {
    text: 'Associate Product Manager @ Loblaw Digital (PC Optimum)',
    date: 'Jan 2022 -  Apr 2022',
    category: {
        tag: 'Professional',
        color: '#7851A9'
    },
    link: {
        url:
            'https://www.pcoptimum.ca/',
        text: 'Learn more about PC Optimum'
    }
  },
  {
    text: 'Project Manager (Data Science Team) @ SYDE 26 Class Profile',
    date: 'Jan 2022 -  Apr 2022',
    category: {
        tag: 'Extracurricular',
        color: '#4A3269'
    },
    link: {
        url:
            'https://syde26.life/',
        text: 'Check us out :)'
    }
  },
  {
    text: 'Systems Design Engineering @ The University of Waterloo',
    date: 'Jan 2022 -  Apr 2026',
    category: {
        tag: 'Education',
        color: '#2E233D'
    },
    link: {
        url:
            'https://uwaterloo.ca/future-students/programs/systems-design-engineering',
        text: 'Learn more about SYDE!'
    }
  },
  {
    text: 'Biomedical Engineering @ The University of Waterloo',
    date: 'Sept 2021 -  Dec 2021',
    category: {
        tag: 'Education',
        color: '#2E233D'
    },
    link: {
        url:
            'https://uwaterloo.ca/future-students/programs/biomedical-engineering',
        text: 'Learn more about BME!'
    }
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
      <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
              <a
                  href={data.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {data.link.text}
              </a>
          )}
          <span className="circle" />
      </div>
  </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

const Experiences = () => {
  return (
    <div>
      <FadeDiv>
        <h1 style={{textAlign:"center", padding:"5px"}}> What am I up to? </h1>
        <p style ={{textAlign:"center", padding: "10px"}}> Curious to see what I've been doing? Check out my experiences below! </p>
        <Timeline />
      </FadeDiv>
      
    </div>
  );
};
  
export default Experiences;