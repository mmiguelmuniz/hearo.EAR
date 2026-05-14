import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Impact } from './sections/Impact';
import { Projects } from './sections/Projects';
import { RecognitionCircles } from './sections/RecognitionCircles';
import { OtherWays } from './sections/OtherWays';
import { Stats } from './sections/Stats';
import { Feedback } from './sections/Feedback';
import { FinalDonation } from './sections/FinalDonation';
import { PixPopup } from './components/PixPopup';

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
      <Stats />
      <Feedback />
      <FinalDonation />
      <footer style={{ padding: '24px', textAlign: 'center', fontSize: '0.8rem', color: '#999', borderTop: '1px solid #eee' }}>
        <p>© 2026 HEaRO Initiative · American School of Recife</p>
        <p style={{ marginTop: '4px' }}>⚙️ Developed by Miguel Muniz · IT Team · American School of Recife</p>
      </footer>
      <PixPopup />
    </div>
  );
}

export default App;