import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import CV from './components/CV';
import Resources from './components/Resources';
import Updates from './components/Updates';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'updates':
        return <Updates />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'cv':
        return <CV />;
      case 'resources':
        return <Resources />;
      default:
        return <Hero />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderContent()}
    </Layout>
  );
};

export default App;
