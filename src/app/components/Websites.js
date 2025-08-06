// src/app/components/Websites.js
'use client';
import { useState, useEffect } from 'react';
import styles from './Websites.module.css';
import Image from 'next/image';

// --- DATA ---
const websites = [
  {
    name: "Acceling Software",
    description: "A software solutions provider specializing in automation and data engineering.",
    pages: [
      { name: "Home", image: "/acceling-home1.webp" },
      { name: "Aidgent", image: "/aidgent 1.webp" },
      { name: "Adhere", image: "/adhere 1.webp" },
      { name: "Release Notes", image: "/release 1.webp" },
    ]
  },
  {
    name: "Absolute Caregivers",
    description: "A home healthcare agency providing compassionate and professional care.",
    pages: [
      { name: "Home", image: "/absolute 1.webp" },
      { name: "Services", image: "/absolute 2.webp" },
      { name: "VIP Care", image: "/absolute 3.webp" },
      { name: "Careers", image: "/absolute 4.webp" },
      { name: "South Bend", image: "/absolute 5.webp" },
      { name: "Blog", image: "/absolute 6.webp" },
    ]
  },
  {
    name: "Ability Home Health",
    description: "A trusted provider of in-home health services.",
    pages: [
      { name: "Home", image: "/ability 1.webp" },
      { name: "Page 2", image: "/ability 2.webp" },
      { name: "Page 3", image: "/ability 3.webp" },
    ]
  },
];

const WebsiteCard = ({ website }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // The angle between each item in the carousel circle.
  const angle = 360 / website.pages.length;

  // This is the magic formula to calculate the minimum radius needed.
  // It ensures items don't overlap by pushing them further out for carousels with more items.
  // We use 450 as a baseline width for the calculation.
  const radius = (750 / 2) / Math.tan(Math.PI / website.pages.length);

  useEffect(() => {
    // This effect now only controls the indicator dots, not the main animation.
    if (website.pages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % website.pages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [website.pages.length]);

  return (
    <div className={styles.websiteCard}>
      <div className={styles.carouselContainer}>
        {/* The style prop for rotation has been removed to allow the CSS animation to take over. */}
        <div className={styles.carousel}>
          {website.pages.map((page, index) => (
            <div
              key={page.name}
              className={styles.carouselItem}
              style={{
                // The transform is now set with a DYNAMICALLY CALCULATED radius (translateZ).
                transform: `rotateY(${index * angle}deg) translateZ(${radius}px)`,
              }}
            >
              <Image 
                src={page.image} 
                alt={`${website.name} - ${page.name}`} 
                width={1920} 
                height={1080}
                className={styles.websiteImage} 
                priority={index === 0} 
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.websiteInfo}>
        <h3>{website.name}</h3>
        <p>{website.description}</p>
        <div className={styles.pageIndicator}>
          {website.pages.map((page, index) => (
            <span key={index} className={index === activeIndex ? styles.dotActive : styles.dot}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Websites() {
  return (
    <section className="section">
      <h2>My Websites</h2>
      <div className={styles.websitesGrid}>
        {websites.map((site) => (
          <WebsiteCard key={site.name} website={site} />
        ))}
      </div>
    </section>
  );
}