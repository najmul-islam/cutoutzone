import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  {
    id: 1,
    link: "/service/clipping-path",
    text: "Clipping path service",
  },
  {
    id: 2,
    link: "/service/shadow-creation",
    text: "Shadow Creation",
  },
  {
    id: 3,
    link: "/service/image-masking",
    text: "Image Masking Services",
  },
  {
    id: 4,
    link: "/service/ghost-mannequin",
    text: "Ghost mannequin services",
  },
  {
    id: 6,
    link: "/service/jewelry-retouching",
    text: "Jewelry Retouching Service",
  },
  {
    id: 7,
    link: "/service",
    text: "More service",
  },
];

const Services = () => {
  return (
    <div>
      <h2 className="mb-3 text-xl font-semibold text-[#0254B1]">Services</h2>
      <ul className="flex flex-col gap-2">
        {services.map((item) => (
          <li
            key={item.id}
            className="transition-all duration-200 hover:ml-1 hover:text-[#0254B1] hover:underline"
          >
            <Link
              href={item.link}
              className="flex items-center gap-1"
              aria-label={item.text}
            >
              <IoIosArrowRoundForward className="text-xl text-[#0254B1]" />
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Services;
