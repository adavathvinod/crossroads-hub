import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const rules = [
  {
    category: "General Rules",
    items: [
      "All players must be 18 years or older to participate",
      "Teams must have a minimum of 6 registered players",
      "Players may only be rostered on one team per division",
      "Team captains are responsible for player conduct",
      "All players must sign a waiver before first game",
      "Proper athletic attire and footwear required",
    ],
  },
  {
    category: "Game Play",
    items: [
      "Matches are best 2 out of 3 sets, rally scoring to 25 (third set to 15)",
      "Teams switch sides after each set",
      "Each team is allowed 2 timeouts per set",
      "Substitutions must be made during dead ball situations",
      "Standard USAV rules apply unless otherwise specified",
      "Referee decisions are final",
    ],
  },
  {
    category: "Scheduling",
    items: [
      "Games begin promptly at scheduled time",
      "Teams must have minimum 4 players to avoid forfeit",
      "10-minute grace period for minimum player requirement",
      "Rescheduling requests must be made 48 hours in advance",
      "Makeup games subject to court availability",
      "Playoff seeding based on regular season record",
    ],
  },
  {
    category: "Conduct & Sportsmanship",
    items: [
      "Good sportsmanship is expected from all participants",
      "Abusive language or behavior will not be tolerated",
      "Players may be ejected for unsportsmanlike conduct",
      "Physical altercations result in immediate suspension",
      "Alcohol consumption permitted for players 21+ when not actively playing",
      "Clean up your area after games",
    ],
  },
];

const dosList = [
  "Arrive 15 minutes before your scheduled game",
  "Communicate with your team captain",
  "Shake hands with opponents before and after games",
  "Hydrate and take breaks as needed",
  "Have fun and enjoy the community!",
];

const dontsList = [
  "Argue with referees or officials",
  "Use offensive language on the court",
  "Bring glass containers to the court area",
  "Play if you are injured or unwell",
  "Leave personal belongings unattended",
];

const VolleyballRules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-forest text-cream">
          <div className="container-max text-center">
            <p className="text-gold font-medium tracking-widest uppercase mb-3">Volleyball League</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Rules & Standards
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Please review all rules and standards before registering. By participating, you agree to abide by these guidelines.
            </p>
          </div>
        </section>

        {/* Rules */}
        <section className="section-padding">
          <div className="container-max max-w-4xl">
            {rules.map((section) => (
              <div key={section.category} className="mb-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-accent">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Dos and Don'ts */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-forest/5 border border-forest/20 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-forest mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-forest" />
                  Do's
                </h3>
                <ul className="space-y-3">
                  {dosList.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-destructive mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-destructive" />
                  Don'ts
                </h3>
                <ul className="space-y-3">
                  {dontsList.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Ready to join the action? Register your team today!
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/volleyball#register">Register Your Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VolleyballRules;
