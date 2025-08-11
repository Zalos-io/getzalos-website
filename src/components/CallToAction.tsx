import config from '../config/index.json';

const CallToAction = () => {
  const { callToActionSection } = config;
  const { title, subtitle, button } = callToActionSection;

  return (
    <section id="cta" className="bg-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div>
            <a
              href={button.href}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              {button.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
