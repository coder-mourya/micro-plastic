import { Collapse } from 'antd';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      key: '1',
      label: 'What is microplastic detection?',
      description:
        'Microplastic detection involves identifying and quantifying microscopic plastic particles in various samples to assess environmental impact.',
    },
    {
      key: '2',
      label: 'How can microplastics impact the environment?',
      description:
        'Microplastics can persist in ecosystems, accumulate in food chains, and negatively affect aquatic and terrestrial life, leading to long-term ecological risks.',
    },
    {
      key: '3',
      label: 'What services does MicroTrack offer for microplastic management?',
      description:
        'MicroTrack offers sampling, AI-driven analysis, classification, detailed lab reporting, and continuous environmental monitoring services.',
    },
  ];

  const [activeKey, setActiveKey] = useState(['1']);

  const handleChange = (key) => {
    setActiveKey(key);
  };

  return (
    <section id="faq" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently asked questions
        </h2>

        <Collapse
          accordion
          activeKey={activeKey}
          onChange={handleChange}
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <div className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300 ${
              isActive ? 'bg-white' : 'bg-white'
            }`}>
              {isActive ? (
                <ChevronUp className="text-[#1648EB]" />
              ) : (
                <ChevronDown className="text-[#1648EB]" />
              )}
            </div>
          )}
          ghost
          bordered={false}
          className="space-y-4"
          items={faqData.map((item) => ({
            key: item.key,
            label: (
              <div
                className={`font-semibold text-base transition-colors duration-300 ${
                  activeKey.includes(item.key) ? 'text-white' : 'text-gray-900'
                }`}
              >
                {item.label}
              </div>
            ),
            children: (
              <p
                className={`text-sm leading-relaxed transition-colors duration-300 ${
                  activeKey.includes(item.key) ? 'text-white' : 'text-gray-700'
                }`}
              >
                {item.description}
              </p>
            ),
            className: `${
              activeKey.includes(item.key)
                ? 'bg-[#1648EB] text-white'
                : 'bg-[#F8FAFC] text-gray-900'
            } rounded-lg px-6 py-4 transition-all duration-300`,
          }))}
        />
      </div>
    </section>
  );
};

export default FAQ;
