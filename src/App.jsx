import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import CV from './components/CV';
import Resources from './components/Resources';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'cv':
        return <CV />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderSection()}
    </Layout>
  );
}

export default App;
