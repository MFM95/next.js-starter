"use client";
import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Enable smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
      <div>
        <Head>
          <title>Tourism Company</title>
          <meta name="description" content="Welcome to our tourism website" />
        </Head>

        <header>
          <nav >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section id="home">
          <h1>Welcome to Our Tourism Company</h1>
          <p>Your gateway to exploring the world.</p>
        </section>

        <section id="about" >
          <h2>About Us</h2>
          <p>We specialize in providing exceptional travel experiences.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <p>We offer guided tours, travel packages, and personalized experiences.</p>
        </section>

        <section id="contact" >
          <h2>Contact Us</h2>
          <p>Email us at: <a href="mailto:info@tourismcompany.com">info@tourismcompany.com</a></p>
        </section>

        <footer>
          <p>&copy; 2024 Tourism Company</p>
        </footer>
      </div>
  );
}