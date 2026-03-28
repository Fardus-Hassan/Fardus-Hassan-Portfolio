import { motion, useReducedMotion } from "framer-motion";
import { EASE_SECTION, RevealBlock, SectionReveal } from "../../Components/SectionReveal";

const Projects = () => {
  const reduce = useReducedMotion();
  const headerDone = { opacity: 1, y: 0 };
  const headerFrom = reduce ? headerDone : { opacity: 0, y: 26 };

  return (
    <SectionReveal id="projects" className="xl:w-[95%] mx-auto">
      <div className="xl:container w-[90%] lg:my-[150px] lg:mt-[150px] sm:mt-[180px] sm:my-[100px] my-20 mx-auto">
        <motion.div
          className="text-center"
          initial={headerFrom}
          whileInView={headerDone}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduce ? 0 : 0.52, ease: EASE_SECTION }}
        >
          <h3 className="font-bold font-jost lg:text-xl gradient-color">
            &lt;Projects/&gt;
          </h3>
          <h1 className="mt-2 text-black font-jost lg:text-[44px] text-[30px] font-bold">
            MY RECENT WORK
          </h1>
        </motion.div>
        <div className="mt-10 space-y-8 lg:mt-14 lg:max-h-[75vh] max-h-[90vh] overflow-y-auto scrollBar">
          <RevealBlock className="lg:flex lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <p className="text-xl tracking-wider gradient-color font-semibold">
                Qawmi Talim
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                ERP-based Madrasha Management Software
              </h2>
              <h2 className="mt-4 font-semibold text-gray-800 dark:text-white">
                User Name: admin_demo <br /> Password: admin123
              </h2>
              <a
                href="https://demo.qawmitalim.online"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300"
              >
                View live
              </a>
            </div>
            <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
              <iframe
                title="Qawmi Talim demo"
                src="https://demo.qawmitalim.online/"
                className="w-[100%] h-[500px] rounded-xl border"
              />
            </div>
          </RevealBlock>
          <hr />
          <RevealBlock className="lg:flex lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <p className="text-xl tracking-wider gradient-color font-semibold">
                Cian Collective
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Faith-based spiritual music collective website
              </h2>
              <a
                href="https://www.ciancollective.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300"
              >
                View live
              </a>
            </div>
            <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
              <iframe
                title="Cian Collective"
                src="https://www.ciancollective.org/"
                className="w-[100%] h-[500px] rounded-xl border"
              />
            </div>
          </RevealBlock>
          <hr />
          <RevealBlock className="lg:flex lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <p className="text-xl tracking-wider gradient-color font-semibold">
                DevDive
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Developer Forum Website
              </h2>
              <a
                href="https://devdive1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300"
              >
                View live
              </a>
            </div>
            <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
              <iframe
                title="DevDive"
                src="https://devdive1.netlify.app/"
                className="w-[100%] h-[500px] rounded-xl border"
              />
            </div>
          </RevealBlock>
          <hr />
          <RevealBlock className="lg:flex lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <p className="text-xl tracking-wider gradient-color font-semibold">
                EmployeeFlow
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Employee Management Website
              </h2>
              <a
                href="https://employee-flow.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300"
              >
                View live
              </a>
            </div>
            <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
              <iframe
                title="EmployeeFlow"
                src="https://employee-flow.web.app/"
                className="w-[100%] h-[500px] rounded-xl border"
              />
            </div>
          </RevealBlock>
          <hr />
          <RevealBlock className="lg:flex lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <p className="text-xl tracking-wider gradient-color font-semibold">
                EventX
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Event Management Website
              </h2>
              <a
                href="https://eventx-7378e.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300"
              >
                View live
              </a>
            </div>
            <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
              <iframe
                title="EventX"
                src="https://eventx-7378e.web.app/"
                className="w-[100%] h-[500px] rounded-xl border"
              />
            </div>
          </RevealBlock>
          <RevealBlock className="lg:flex lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <p className="text-xl tracking-wider gradient-color font-semibold">
                Trip Trove
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Tourism Spot Viewing Website
              </h2>
              <a
                href="https://trip-trove-1d68d.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300"
              >
                View live
              </a>
            </div>
            <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
              <iframe
                title="Trip Trove"
                src="https://trip-trove-1d68d.web.app/"
                className="w-[100%] h-[500px] rounded-xl border"
              />
            </div>
          </RevealBlock>
          <hr />
          <RevealBlock className="lg:flex lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-1/2">
              <p className="text-xl tracking-wider gradient-color font-semibold">
                Dream Land
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Land viewing website
              </h2>
              <a
                href="https://dream-land-17173.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300"
              >
                View live
              </a>
            </div>
            <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
              <iframe
                title="Dream Land"
                src="https://dream-land-17173.web.app/"
                className="w-[100%] h-[500px] rounded-xl border"
              />
            </div>
          </RevealBlock>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Projects;
