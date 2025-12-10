import communityGathering from "@/assets/community-gathering.png";

const stats = [
  { value: "25+", label: "Years Serving" },
  { value: "50+", label: "Volleyball Teams" },
  { value: "1000s", label: "Happy Guests Weekly" },
  { value: "4.8★", label: "Average Rating" },
];

export function Community() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-section"
        style={{ backgroundImage: `url(${communityGathering})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      
      <div className="relative z-10 container-max px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber font-medium tracking-widest uppercase mb-4">
            The Crossroads Community
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-6">
            More Than a Restaurant
          </h2>
          <p className="text-cream/85 text-lg md:text-xl mb-12">
            For over two decades, we've been the gathering place where families celebrate, 
            friends reconnect, and neighbors become lifelong teammates.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-amber mb-2">
                  {stat.value}
                </div>
                <div className="text-cream/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}