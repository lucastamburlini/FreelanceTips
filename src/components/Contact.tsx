import emailjs from "emailjs-com";
import { useState } from "react";
import Swal from "sweetalert2";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsSending(true);

    Swal.fire({
      title: "¿Quieres enviar este mensaje?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Enviar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs.sendForm(serviceId, templateId, form, userId).then(
          (result) => {
            Swal.fire({
              title: "El mensaje ha sido enviado correctamente.",
              icon: "success",
            });
            form.reset();
            setIsSending(false);
          },
          (error) => {
            Swal.fire({
              title: "Error",
              text: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
              icon: "error",
            });
            setIsSending(false);
          }
        );
      }
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="text-3xl mb-3">¡Hola!</h2>
            <p className="max-w-xl">
              Si necesitas contactarme por algún motivo, ya sea para hacer una
              pregunta o solicitar información, ¡estaré encantado de hablar
              contigo! Puedes escribirme un mensaje aquí y te responderé lo
              antes posible. ¡Gracias por ponerte en contacto!
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded p-8 lg:col-span-3 lg:p-12">
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="sr-only">Nombre y apellido</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nombre y apellido"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Número de teléfono"
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Mensaje...
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Mensaje"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="flex w-full items-center justify-center">
                {isSending ? (
                  <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-300 border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="group relative inline-block focus:outline-none focus:ring-0"
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 rounded bg-green-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                    <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                      Enviar
                    </span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
