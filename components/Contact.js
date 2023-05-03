import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BodyText from "./BodyText";
import Heading from "./Heading";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_da6szrm",
        "template_eera7da",
        form.current,
        "JZTSy4PjC3ca5wKNt"
      );
      console.log(result.text);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section
      className="pt-20 px-6 mt-20 border-t"
      style={{
        backgroundImage: "linear-gradient(to bottom, white 80%, #407BFF 80% )",
      }}
    >
      <header>
        <Heading value={2}>Get in touch</Heading>
      </header>
      <BodyText value={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
        commodi?
      </BodyText>
      <div className="px-5 rounded-xl bg-[#263238]  mt-14 flex flex-col items-center py-11 text-white">
        <header className="text-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="bg-[#4bc190] rounded-full h-8 w-8 p-4"
          ></FontAwesomeIcon>
          <Heading value={2} className="mt-5">
            Send Email
          </Heading>
        </header>
        <main className="mt-10 w-full ">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            ref={form}
          >
            <div className="flex flex-col">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="border-b border-b-slate-600 px-2 py-1 mt-1 focus:outline-none focus:border-b-[#4bc190] bg-[#263238]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="border-b border-b-slate-600 px-2 py-1 mt-1 focus:outline-none focus:border-b-[#4bc190] bg-[#263238]"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                name="message"
                rows="7"
                placeholder="Message !"
                required
                className="border-slate-600 border p-2 rounded-md  focus:outline-none mt-6 focus:border-[#4bc190] bg-[#263238] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="border border-[#4bc190] rounded-3xl w-fit mx-auto text-white px-8 py-2 uppercase font-medium tracking-widest mt-6 mb-2"
            >
              send
            </button>
          </form>
        </main>
      </div>
    </section>
  );
}
