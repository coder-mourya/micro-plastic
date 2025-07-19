import { Form, Input, Button, Row, Col } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">


        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white ">
            <div className="text-start mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact us
              </h2>
              <p className="text-lg text-gray-600">
                Don't be shy, drop us a line! We love hearing from you.
              </p>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input size="large" placeholder="Name" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input size="large" placeholder="Email address" className="rounded-lg" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <TextArea rows={4} placeholder="Tell us about your project or questions..." className="rounded-lg" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="bg-[#F09D18] border-none w-40 rounded-lg h-12 font-semibold"
                >
                  submit
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounding-set  overflow-hidden">
            <div className="h-full  flex items-center justify-center relative">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.131861008525!2d77.32095495000002!3d28.59878785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49950000001%3A0x5e2472b536ef0f6f!2sMaharaja%20Agrasen%20College!5e0!3m2!1sen!2sin!4v1752906452567!5m2!1sen!2sin" width="600" height="450" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;