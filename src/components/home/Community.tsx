import communityGathering from "@/assets/community-gathering.png";

export function Community() {
  return (
    <section className="section-padding bg-forest text-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-widest uppercase mb-3">
              Our Community
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              More Than Just a Restaurant
            </h2>
            <p className="text-cream/90 text-lg leading-relaxed mb-6">
              For years, Crossroads has been the heart of our community. We're where neighbors become friends, where teams celebrate victories, and where families create lasting memories.
            </p>
            <p className="text-cream/80 leading-relaxed mb-8">
              Whether you're grabbing breakfast before work, enjoying happy hour on the patio, or competing in our volleyball league, you're part of the Crossroads family.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "25+", label: "Years Serving" },
                { number: "50+", label: "Volleyball Teams" },
                { number: "1000s", label: "Happy Guests" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-cream/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl" />
            <img
              src={communityGathering}
              alt="Community gathering at Crossroads"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
