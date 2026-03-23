import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Impact } from './sections/Impact';
import { Projects } from './sections/Projects';
import { RecognitionCircles } from './sections/RecognitionCircles';
import { OtherWays } from './sections/OtherWays';
import { Feedback } from './sections/Feedback';
import { FinalDonation } from './sections/FinalDonation';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Impact />
      <Projects />
      <RecognitionCircles />
      <OtherWays />
      <Feedback />
      <FinalDonation />
      {/* Footer Simples */}
      <footer style={{ padding: '20px', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
        © 2026 HERO - Developed by the IT team - EAR. All rights reserved.
      </footer>
    </div>
  );
}

export default App;