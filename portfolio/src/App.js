import React, { useState, useEffect } from 'react';
import './App.css';

const javaLogo = (
  <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40Z" fill="#007396"/>
      <path d="M24 12C19.0294 12 15 16.0294 15 21C15 25.9706 19.0294 30 24 30C28.9706 30 33 25.9706 33 21C33 16.0294 28.9706 12 24 12ZM24 27C20.6863 27 18 24.3137 18 21C18 17.6863 20.6863 15 24 15C27.3137 15 30 17.6863 30 21C30 24.3137 27.3137 27 24 27Z" fill="#EA2D2E"/>
    </g>
  </svg>
);

function AnimatedBackground({ mode }) {
  // Simple animated background using CSS gradients and keyframes
  return (
    <div className={`animated-bg ${mode}`}></div>
  );
}

function App() {
  const [mode, setMode] = useState(() => {
    // Try to use system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark');

  return (
    <div className="App">
      <AnimatedBackground mode={mode} />
      <header className="App-header">
        <div className="mode-toggle">
          <button onClick={toggleMode} aria-label="Toggle dark/light mode">
            {mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <div className="logo-animated">{javaLogo}</div>
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <h2>Java Developer</h2>
        <p className="desc">I build robust, scalable, and maintainable Java applications.<br/>Welcome to my portfolio!</p>
        <div className="socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>
      <main className="App-main">
        <section className="about">
          <h3>About Me</h3>
          <p>
            Passionate Java developer with experience in Spring Boot, REST APIs, and cloud-native solutions. I love solving complex problems and delivering high-quality code.
          </p>
        </section>
        <section className="projects">
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>Project One</strong>: Java RESTful API for e-commerce (Spring Boot, MySQL)
            </li>
            <li>
              <strong>Project Two</strong>: Real-time chat app (Java, WebSocket, Redis)
            </li>
            <li>
              <strong>Project Three</strong>: Cloud microservices (Spring Cloud, Docker, Kubernetes)
            </li>
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
