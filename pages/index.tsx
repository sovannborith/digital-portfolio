import type { GetStaticProps } from "next";
import Head from "next/head";
import AboutComponent from "../components/AboutComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import WorkExperienceComponent from "../components/WorkExperienceComponent";
import SkillComponent from "../components/SkillComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import ContactMeComponent from "../components/ContactMeComponent";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 px-4">
      <Head>
        <title>Sovannborith Digital Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent socials={socials} />
      <section id="hero" className="snap-start z-0">
        <HeroComponent pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center z-0">
        <AboutComponent pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center z-0">
        <WorkExperienceComponent experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <SkillComponent skills={skills} />
      </section>
      <section id="projects" className="snap-start z-0">
        <ProjectsComponent projects={projects} />
      </section>
      <section id="contactme" className="snap-start z-0">
        <ContactMeComponent />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo.heroImage).url()}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
