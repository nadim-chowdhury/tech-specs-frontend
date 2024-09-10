import FeaturedCasings from "@/components/computers/FeaturedCasings";
import FeaturedCpus from "@/components/computers/FeaturedCpus";
import FeaturedGpus from "@/components/computers/FeaturedGpus";
import FeaturedHeadphones from "@/components/computers/FeaturedHeadphones";
import FeaturedKeyboards from "@/components/computers/FeaturedKeyboards";
import FeaturedLaptops from "@/components/computers/FeaturedLaptops";
import FeaturedMonitors from "@/components/computers/FeaturedMonitors";
import FeaturedMotherboards from "@/components/computers/FeaturedMotherboards";
import FeaturedMouses from "@/components/computers/FeaturedMouses";
import FeaturedPsus from "@/components/computers/FeaturedPsus";
import FeaturedRams from "@/components/computers/FeaturedRams";
import FeaturedStorages from "@/components/computers/FeaturedStorages";

export default function AllComputersPage() {
  return (
    <section className="flex flex-col gap-12 lg:gap-16">
      <FeaturedCpus />
      <FeaturedGpus />
      <FeaturedCasings />
      <FeaturedHeadphones />
      <FeaturedKeyboards />
      <FeaturedLaptops />
      <FeaturedMonitors />
      <FeaturedMotherboards />
      <FeaturedMouses />
      <FeaturedPsus />
      <FeaturedRams />
      <FeaturedStorages />
    </section>
  );
}
