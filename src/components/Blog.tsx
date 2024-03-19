import Swal from "sweetalert2";

interface BlogItem {
  author: string;
  date: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

const blogs: BlogItem[] = [
  {
    author: "Leslie Alexander",
    date: "2023-01-23T13:23Z",
    title: "Consejos para Freelancers: Cómo Organizar tu Tiempo Efectivamente",
    content:
      "Organizar tu tiempo de manera efectiva es crucial para tener éxito como freelancer. Aquí te compartimos algunos consejos prácticos para lograrlo...",
    category: "Organización",
    tags: ["Productividad", "Freelance", "Trabajo Remoto"],
  },
  {
    author: "Michael Foster",
    date: "2023-02-15T10:45Z",
    title: "Herramientas Esenciales para Freelancers de Desarrollo de Software",
    content:
      "Como freelancer de desarrollo de software, contar con las herramientas adecuadas puede marcar la diferencia en tu productividad y calidad de trabajo...",
    category: "Herramientas",
    tags: ["Freelance", "Desarrollo de Software", "Productividad"],
  },
  {
    author: "Dries Vincent",
    date: "2023-03-05T08:30Z",
    title: "Diseño Freelance: Principios Básicos de UI/UX",
    content:
      "El diseño UI/UX es fundamental para crear experiencias de usuario excepcionales. Conoce los principios básicos que todo diseñador freelance debe dominar...",
    category: "Diseño",
    tags: ["Freelance", "UI", "UX", "Diseño Gráfico"],
  },
  {
    author: "Lindsay Walton",
    date: "2023-04-10T15:20Z",
    title: "Cómo Conseguir Clientes como Freelancer de Desarrollo Web",
    content:
      "Conseguir clientes es uno de los mayores desafíos para los freelancers de desarrollo web. Descubre estrategias efectivas para atraer y retener clientes...",
    category: "Clientes",
    tags: ["Freelance", "Desarrollo Web", "Clientes"],
  },
  {
    author: "Courtney Henry",
    date: "2023-05-20T11:10Z",
    title: "Estrategias de Marketing para Freelancers de Tecnología",
    content:
      "El marketing es clave para darte a conocer y conseguir proyectos como freelancer de tecnología. Aprende estrategias efectivas para promocionar tus servicios...",
    category: "Marketing",
    tags: ["Freelance", "Tecnología", "Marketing Digital"],
  },
  {
    author: "Tom Cook",
    date: "2023-06-30T09:05Z",
    title:
      "Consejos para Entrevistas como Freelancer de Desarrollo de Software",
    content:
      "Prepararte para una entrevista como freelancer de desarrollo de software puede marcar la diferencia. Descubre consejos prácticos para destacarte en tus entrevistas...",
    category: "Entrevistas",
    tags: ["Freelance", "Desarrollo de Software", "Entrevistas"],
  },
];

const sortedBlogs = [...blogs].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const Blog: React.FC = () => {
  const handleVerMasClick = () => {
    Swal.fire({
      icon: "warning",
      title: "En construcción",
      text: "Esta funcionalidad aún no está disponible.",
      customClass: {
        popup: "swal2",
      },
    });
  };

  return (
    <section className="mx-auto py-14 max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-10">
      <div className="flex w-full items-center justify-center">
        <button
          className="group relative inline-block focus:outline-none focus:ring-0"
          onClick={handleVerMasClick}
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 rounded bg-green-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

          <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
            Publicar entrada
          </span>
        </button>
      </div>
      <div>
        <ul role="list" className="flex flex-col gap-10">
          {sortedBlogs.map((blog, index) => (
            <li
              key={index}
              className="flex flex-col justify-between p-5 bg-white border border-gray-300 rounded"
            >
              <div className="flex justify-between mb-5 gap-1">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50 hidden md:block"
                    src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                    alt=""
                  />

                  <div className="min-w-0 flex-auto flex flex-col justify-center ">
                    <p className="font-semibold leading-6 text-gray-900">
                      {blog.title}
                    </p>
                    <p className=" text-sm leading-5 text-gray-500">
                      Por {blog.author}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="mt-1 text-xs leading-5 text-gray-500 bg-green-300 px-2 rounded">
                    {blog.category}
                  </p>
                  <div className="text-right">
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Publicado el{" "}
                      {new Date(blog.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-2 flex flex-col">
                <p className="mt-1  leading-5 text-gray-500 mb-5">
                  {blog.content}
                </p>
                <div className="flex gap-2 text-xs leading-5 text-gray-500">
                  {blog.tags.map((tag) => (
                    <span>#{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          className="group relative inline-block focus:outline-none focus:ring-0"
          onClick={handleVerMasClick}
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 rounded bg-green-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

          <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
            Ver más entradas
          </span>
        </button>
      </div>
    </section>
  );
};

export default Blog;
