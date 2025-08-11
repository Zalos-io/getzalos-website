import { useState } from 'react';

import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '', email: '', company: '', message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Book a Free Call | Zalos</title>
        <meta
          name="description"
          content="Book a free consultation call with Zalos to discuss your compliance automation needs."
        />
      </Head>

      <div className="bg-background overflow-hidden">
        <div className="relative bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <Header />
            </div>
          </div>
        </div>

        <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-soft rounded-lg overflow-hidden">
              <div className="px-8 py-12 sm:px-12">
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Book a Free Call
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Ready to transform your compliance processes? Let&apos;s
                    discuss how Zalos can help automate your document risk
                    identification and redaction workflows.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours to schedule your free consultation call.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary hover:text-secondary font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Tell us about your compliance needs *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                        placeholder="Describe your current compliance challenges, document volumes, and what you'd like to achieve with automated redaction..."
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center items-center px-8 py-4 border-2 border-primary text-base font-semibold rounded-lg text-white bg-primary hover:bg-white hover:text-primary transition-all duration-200 shadow-soft hover:shadow-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Send Message & Book Call'
                        )}
                      </button>
                    </div>

                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-500">
                        We typically respond within 24 hours. All consultations
                        are free and confidential.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Free Consultation
                </h3>
                <p className="text-gray-600">
                  30-minute call to understand your needs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Custom Solution
                </h3>
                <p className="text-gray-600">
                  Tailored approach for your compliance needs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-soft">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Fast Implementation
                </h3>
                <p className="text-gray-600">
                  Get up and running in days, not months
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
