import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SEOServices from "@/components/SEOServices";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import RecentActivities from "@/components/RecentActivities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <SEOServices />
        <Skills />
        <Projects />
        <Experience />
        <Gallery />
        <RecentActivities />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Abiral Acharya",
          "jobTitle": "SEO Expert & Web Developer",
          "description": "Leading SEO expert in Nepal specializing in search engine optimization, local SEO, and web development services.",
          "url": "https://aviralacharya.com.np",
          "email": "abiralacharya80@gmail.com",
          "telephone": "+977-9824055745",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Birtamode",
            "addressRegion": "Jhapa",
            "addressCountry": "Nepal"
          },
          "sameAs": [
            "https://github.com/abiralacharya",
            "https://linkedin.com/in/abiralacharya"
          ],
          "knowsAbout": [
            "Search Engine Optimization",
            "Local SEO",
            "Technical SEO",
            "Web Development",
            "Digital Marketing",
            "Google Analytics",
            "Content Optimization"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "SEO Consultant",
            "occupationLocation": {
              "@type": "Place",
              "name": "Nepal"
            },
            "skills": "SEO, Digital Marketing, Web Development, Local SEO, Technical SEO"
          }
        })}
      </script>
    </div>
  );
};

export default Index;
