import { Form, Input, Button, Row, Col, message } from 'antd';
import contact from '../assets/contact.jpg'


const { TextArea } = Input;

const ContactUs = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const hideLoading = message.loading('Submitting...', 0);
        try {
            const response = await fetch('https://formspree.io/f/meozabld', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                hideLoading();
                message.success("Form submitted successfully!");
                form.resetFields();
            } else {
                message.error("Failed to submit form.");
            }
        } catch (error) {
            hideLoading();
            message.error("An error occurred.");
        }finally {
            hideLoading();
        }
    };


    return (
        <>
            {/* Banner Section */}
            <div className="relative h-60 md:h-80 lg:h-[400px] w-full overflow-hidden">
                <img
                    src={contact}
                    alt="Contact Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">Contact Us</h1>
                </div>
            </div>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269661.3320514018!2d13.752456971745973!3d46.11496552249129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476524e75e968361%3A0xe740451e25e2d465!2sSlovenia!5e1!3m2!1sen!2sin!4v1753351888834!5m2!1sen!2sin" width="600" height="450"  ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactUs;