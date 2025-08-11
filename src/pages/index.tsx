import About from '../components/About';
import Analytics from '../components/Analytics';
import CallToAction from '../components/CallToAction';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';
import UseCases from '../components/UseCases';

const App = () => (
    <div className="bg-background overflow-hidden">
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      <Canvas />

      <LazyShow>
        <Product />
      </LazyShow>

      <Canvas />

      <LazyShow>
        <Features />
      </LazyShow>

      <Canvas />

      <LazyShow>
        <UseCases />
      </LazyShow>

      <Canvas />


      <LazyShow>
        <About />
      </LazyShow>

      <LazyShow>
        <CallToAction />
      </LazyShow>

      <Footer />
      <Analytics />
    </div>
);

export default App;
