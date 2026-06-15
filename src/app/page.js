import Banner from "@/Components/Banner";
import CallToAction from "@/Components/CallToAction";
import CategoryGrid from "@/Components/CategoryGrid";
import CompanyMarquee from "@/Components/CompanyMarquee";
import JobFaq from "@/Components/JobFaq";
import LetestJob from "@/Components/LetestJob";
import WorkingProcess from "@/Components/WorkingProcess";

const page = () => {
  return (
    <div>
      <Banner />
      <CategoryGrid />
      <CompanyMarquee />
      <LetestJob />
      <WorkingProcess />
      <CallToAction />
      <JobFaq />
    </div>
  );
};

export default page;