import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Spacer from "../../components/Spacer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.EMAILJS_SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.EMAILJS_USER_ID
    ).then((result) => {
      console.log(result.text);
      alert('Email enviado com sucesso!');
    }, (error) => {
      console.log(error.text);
      alert('Erro ao enviar email.');
    });
  };

  return (
    <>
      <Spacer height={160}></Spacer>
      <section id="contact-section">
        <div className="flex flex-col items-center min-h-[calc(100vh-var(--header-height)-32px)] pb-4">
          <h2 className="text-4xl font-semibold mb-4 text-center">Fale Comigo</h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto flex-1 content-center">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                className="w-full bg-transparent border-b-[1px] border-accent focus:border-contrast text-gray-200 placeholder-gray-400 outline-none py-2"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-[1px] border-accent focus:border-contrast text-gray-200 placeholder-gray-400 outline-none py-2"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Mensagem"
                className="w-full bg-transparent border-b-[1px] border-accent focus:border-contrast text-gray-200 placeholder-gray-400 outline-none py-2"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full
                px-4 py-2 
                bg-contrast 
                text-sm text-primary font-semibold 
                shadow-md 
                hover:bg-accent hover:text-white hover:border-accent 
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
                transition duration-200
              ">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  )
};