import config from '../config/index.json';

const UseCases = () => {
  const { useCases } = config;

  if (!useCases) {
    return null;
  }

  return (
    <div className="py-16 bg-white" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Use Cases
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {useCases.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {useCases.subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.items.map((item, index) => (
              <div key={index} className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
