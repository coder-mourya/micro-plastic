import { StarFilled } from '@ant-design/icons';

const Testimonials = () => {
  const testimonials = [
    {
      title: "Great experience",
      content: "Working with HyperLab has been exceptional. Their microplastic detection technology provided crucial insights for our environmental monitoring program.",
      rating: 5,
      author: "Dr. Sarah Chen",
      position: "Environmental Scientist"
    },
    {
      title: "Fast lab tests",
      content: "The speed and accuracy of their testing exceeded our expectations. Results came back quickly with detailed analysis that helped us make informed decisions.",
      rating: 5,
      author: "Michael Rodriguez",
      position: "Water Quality Manager"
    },
    {
      title: "Awesome experience",
      content: "Professional service from start to finish. The team's expertise in microplastic detection and their comprehensive reporting made our project a success.",
      rating: 5,
      author: "Dr. Emily Johnson",
      position: "Research Director"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer love us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">{testimonial.title}</h4>
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-blue-100 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-white border-opacity-20 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-blue-200 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;