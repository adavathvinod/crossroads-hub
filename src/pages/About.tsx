import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import communityGathering from "@/assets/community-gathering.png";
import broastedChicken from "@/assets/broasted-chicken.png";
import barAtmosphere from "@/assets/bar-atmosphere.jpg";
import volleyballHero from "@/assets/volleyball-hero.jpg";
import privateParty from "@/assets/private-party.jpg";

const galleryImages = [
  { src: broastedChicken, alt: "Famous Broasted Chicken" },
  { src: barAtmosphere, alt: "Bar atmosphere" },
  { src: volleyballHero, alt: "Volleyball action" },
  { src: privateParty, alt: "Private events" },
  { src: communityGathering, alt: "Community gathering" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-forest text-cream">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold font-medium tracking-widest uppercase mb-3">About Us</p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                  Welcome to Crossroads Restaurant & Bar
                </h1>
                <p className="text-cream/90 text-lg leading-relaxed mb-6">
                  For over 25 years, Crossroads has been the heart of our community. We're more than just a restaurant—we're where neighbors become friends, where teams celebrate victories, and where families create lasting memories.
                </p>
                <p className="text-cream/80 leading-relaxed">
                  What started as a small neighborhood bar has grown into a beloved community hub featuring delicious dining, refreshing drinks, and exciting volleyball leagues. Through it all, our commitment to quality food, genuine hospitality, and community connection has never wavered.
                </p>
              </div>
              <div className="relative">
                <img
                  src={communityGathering}
                  alt="Community at Crossroads"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest uppercase mb-3">Our Values</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What We Believe
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Community First",
                  description: "We believe in bringing people together. From family dinners to volleyball leagues, we create spaces for connection and celebration.",
                },
                {
                  title: "Quality Always",
                  description: "From our signature Broasted Chicken to our craft cocktails, we never compromise on quality. Every dish is prepared with care and the finest ingredients.",
                },
                {
                  title: "Fun & Games",
                  description: "Life should be enjoyed! Our volleyball leagues, outdoor patios, and lively bar atmosphere remind us that great times are meant to be shared.",
                },
              ].map((value) => (
                <div key={value.title} className="bg-card p-8 rounded-2xl shadow-lg text-center">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-secondary">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest uppercase mb-3">Our Space</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.alt}
                  className={`relative overflow-hidden rounded-xl ${
                    index === 0 || index === 4 ? "row-span-2" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-forest text-cream">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "25+", label: "Years Serving" },
                { number: "50+", label: "Volleyball Teams" },
                { number: "1000s", label: "Happy Guests" },
                { number: "1", label: "Great Community" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cream/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
