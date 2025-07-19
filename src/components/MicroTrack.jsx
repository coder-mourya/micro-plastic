import { FireFilled } from '@ant-design/icons';
import droplet from '../assets/water-drop.svg'; // replace with water droplet icon if available
import glass from '../assets/glass.png'; // update to correct path if needed

const MicroTrack = () => {
  const features = [
    {
      title: "Rapid Sampling",
      description: "Microplastics can be quantified in just a few minutes."
    },
    {
      title: "Particle Classification",
      description: "The system divides captured particles into groups, counts fibers, separates them by color and shape, and distinguishes other substances."
    },
    {
      title: "Artificial Intelligence",
      description: "Generates reports including quantity and categorization of particles, plus sampling location details sent to the lab."
    },
    {
      title: "Detailed Analyses",
      description: "Optional test disks can be used for advanced lab analysis with standard analytical methods."
    },
    {
      title: "Central Database",
      description: "Collected data is stored centrally, enhancing MicroTrack’s learning and reporting capabilities."
    }
  ];

  return (
    <section className="bg-white">
      <div className='bg-[#F2F4F5] rounding-set py-16'>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-snug">
            MicroTrack is an advanced system for detecting and quantifying microplastics in drinking water, allowing for rapid sampling and analysis.
          </h2>

          <div className=' grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left - Content */}
            <div>
              <div className="space-y-5">
                {features.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img src={droplet} alt="icon" className="w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">{item.title}:</p>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Glass Image */}
            <div className="flex justify-center">
              <div className="overflow-hidden">
                <img
                  src={glass}
                  alt="Glass of water"
                  className="object-cover w-[480px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroTrack;
