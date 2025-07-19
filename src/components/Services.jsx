import drop from '../assets/water-drop2.svg';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';

const Services = () => {
  const services = [
    {
      step: 'Step 1',
      title: 'Sampling',
      image: s1,
      points: [
        "Remove the aerator from your faucet",
        "Connect the sampling head with the faucet",
        "Turn on the water on the tap",
        "After a certain volume of water has flowed, turn off the water",
        "Remove the test disc from the device"
      ],
      bg: 'bg-white',
    },
    {
      step: 'Step 2',
      title: 'Analyse the Sample',
      image: s2,
      points: [
        "Insert the test disc into MicroTrack",
        "Focus the image on the screen",
        "Press start detect"
      ],
      bg: 'bg-[#F3F6FE]',
    },
    {
      step: 'Step 3',
      title: 'Quantification and Classification',
      image: s3,
      points: [
        "AI counts and separates microplastic by shape and color",
        "Determines the location of the samples",
        "Generates a report",
        "Sends data into the cloud"
      ],
      bg: 'bg-[#FEFAF3]',
    },
    {
      step: 'Step 4',
      title: 'Lab Detailed Analysis',
      image: s4,
      points: [
        "Further tests in laboratory possible using the test disc",
        "Measure size, determine materials and contamination carriers"
      ],
      bg: 'bg-[#FBFCFC]',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {services.map((service, index) => (
            <div key={index} className={` p-6 flex flex-col ${service.bg}`}>
              <div className="flex mb-4">
                <img src={service.image} alt={service.title} className="w-28 h-28 rounded-md object-cover mr-4" />
                <div>
                  <span className="text-xs  font-semibold text-[#F09D18] border border-[#F09D18]  rounded-lg px-3 py-1 inline-block mb-2">{service.step}</span>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
              </div>
              <ul className="space-y-2 pl-4 mt-2">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                    <img src={drop} alt="bullet" className="w-4 h-4 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
