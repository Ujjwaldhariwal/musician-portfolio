import Section from "./Section";

const About = () => (
  <Section id="about" title="About Me">
    <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
      <p className="text-lg text-gray-600">
        Hello! I&apos;m <span className="font-semibold">Ujjwal Dhariwal</span>, a 22-year-old musician from Sirsa, Haryana, now based in Chandigarh.
      </p>
      <p className="text-lg text-gray-600">
        My style blends influences from Urdu ghazals, Pakistani and Indian bands, focusing on alt pop, alt rock, and progressive rock.
      </p>
    </div>
  </Section>
);

export default About;