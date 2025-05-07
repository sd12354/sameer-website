import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    image: '/images/portfolio.png',
    description: 'A personal portfolio to showcase my work, built with React and Tailwind.',
    link: 'https://yourportfolio.com',
  },
  {
    title: 'Weather App',
    image: '/images/weather-app.png',
    description: 'Weather app using OpenWeatherMap API and React Hooks.',
    link: 'https://yourweatherapp.com',
  },
  {
    title: 'AI Chatbot',
    image: '/images/chatbot.png',
    description: 'Custom AI chatbot built using GPT-3 and Node.js.',
    link: 'https://yourchatbot.com',
  },
  {
    title: 'Task Tracker',
    image: '/images/task-tracker.png',
    description: 'Kanban-style task tracker with drag and drop functionality.',
    link: 'https://yourtasktracker.com',
  },
  {
    title: 'E-commerce Site',
    image: '/images/ecommerce.png',
    description: 'Full-stack e-commerce site with Stripe payments.',
    link: 'https://yourecommerce.com',
  },
  {
    title: 'Resume Scanner',
    image: '/images/resume-scanner.png',
    description: 'AI-powered resume scanner and job matcher app.',
    link: 'https://yourresumescanner.com',
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="projects-section" style={{ padding: '2rem', backgroundColor: '#1e1e2f' }}>
      <h2 style={{ color: 'white', marginBottom: '1rem' }}>My Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="project-card"
            style={{
              padding: '1rem',
              backgroundColor: '#2c2d55',
              borderRadius: '12px',
              textAlign: 'center',
              margin: '0 0.5rem',
              height: '100%',
              color: 'white',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
            />
            <h3>{project.title}</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#f06292',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
