import React from 'react';
import './projects.css';
import portfolioImage from '../assets/profile.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const galleryImages = [
  require('../assets/porfolio.png'),
  require('../assets/profile.jpg'),
  require('../assets/porfolio.png'),
  // Add more if needed
];

const projectList = [
  {
    title: 'IV Bag Monitoring System',
    description: 'A real-time IV fluid monitoring web app using Flask and Arduino.',
    technologies: ['Flask', 'MySQL', 'Socket.IO', 'Arduino'],
    github: 'https://github.com/yourusername/iv-monitor',
    demo: 'https://yourdemo.com/iv-monitor',
    image: portfolioImage,
  },
  {
    title: 'Food Donation Platform',
    description: 'A Django-based platform to connect donors with NGOs.',
    technologies: ['Django', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/yourusername/food-donation',
    demo: '',
    image: 'https://via.placeholder.com/300x180?text=Food+Donation',
  },
  {
    title: 'Portfolio Website',
    description: 'This very site built using React and styled with Tailwind/CSS.',
    technologies: ['ReactJS', 'Tailwind', 'FontAwesome'],
    github: 'https://github.com/yourusername/portfolio',
    demo: '',
    image: 'https://via.placeholder.com/300x180?text=Portfolio',
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      {/* ✅ Project Cards Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        className="projects-container"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projectList.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {/* {project.github && <a href={project.github} target="_blank">GitHub</a>}
                  {project.demo && <a href={project.demo} target="_blank">Live Demo</a>} */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Gallery Section Slider */}
      <h3 className="gallery-title">Project Gallery</h3>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        className="gallery-container"
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {galleryImages.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Gallery ${i + 1}`} className="gallery-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
