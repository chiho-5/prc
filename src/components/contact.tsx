'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Get in Touch
      </h2>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 px-4 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none"
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 px-4 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Write your message..."
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 px-4 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none resize-none"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-600 transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
