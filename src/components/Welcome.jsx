import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import welcom from "../assets/welcom.png"

const Welcome = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product Device Image */}
          <div className="relative">
            <div className="  flex items-center justify-center relative overflow-hidden">
              <img 
                src={welcom} 
                alt="HyperLab Detection Device"
                className="w-full h-full object-cover rounded-lg"
              />
            
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Welcome to<br />
                HyperLab
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                HyperLab specializes in the detection of microplastics to protect and environment. Our patented sustainable materials for long-term living support critical environmental monitoring and protection efforts worldwide.
              </p>
            </div>

            <Button 
              type="primary" 
              size="large" 
              className="bg-yellow-500 hover:bg-yellow-600 border-none text-white font-semibold h-12 px-8 rounded-lg"
              icon={<ArrowRightOutlined />}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;