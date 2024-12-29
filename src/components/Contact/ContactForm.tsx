import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormTextarea } from './FormTextarea';
import { openCalendly } from '../../utils/calendly';

const INQUIRY_OPTIONS = [
  'AI Chatbot',
  'AI Voice Agent',
  'AI Consulting',
  'Website Development',
  'SaaS Development',
  'Automation',
  'Career',
  'Partnerships'
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryReason: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="relative">
        <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-xl rounded-2xl" />
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
          <p className="text-gray-400 mb-6">
            We've received your message and will get back to you shortly.
          </p>
          <button
            onClick={openCalendly}
            className="px-8 py-4 rounded-xl font-medium text-white
              bg-gradient-to-r from-blue-500 to-violet-500
              hover:from-blue-600 hover:to-violet-600
              focus:ring-2 focus:ring-blue-500/50 focus:outline-none
              transition-all duration-300"
          >
            Schedule Free AI Audit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-xl rounded-2xl" />
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <FormInput
              label="Phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              required
            />
            <FormSelect
              label="Inquiry Reason"
              name="inquiryReason"
              value={formState.inquiryReason}
              onChange={handleChange}
              options={INQUIRY_OPTIONS}
              required
            />
          </div>
          
          <FormTextarea
            label="Message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-xl font-medium text-white
              bg-gradient-to-r from-blue-500 to-violet-500
              hover:from-blue-600 hover:to-violet-600
              focus:ring-2 focus:ring-blue-500/50 focus:outline-none
              transition-all duration-300
              flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}