import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Trophy, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import volleyballHero from "@/assets/volleyball-hero.jpg";

const schedules = [
  { division: "Competitive A", day: "Monday", time: "6:00 PM - 9:00 PM" },
  { division: "Competitive B", day: "Tuesday", time: "6:00 PM - 9:00 PM" },
  { division: "Recreational", day: "Wednesday", time: "6:00 PM - 9:00 PM" },
  { division: "Coed Competitive", day: "Thursday", time: "6:00 PM - 9:00 PM" },
  { division: "Coed Recreational", day: "Friday", time: "6:00 PM - 9:00 PM" },
  { division: "Open Play", day: "Saturday", time: "12:00 PM - 4:00 PM" },
];

const standings = [
  { position: 1, team: "Sand Sharks", wins: 12, losses: 2, division: "Competitive A" },
  { position: 2, team: "Net Ninjas", wins: 10, losses: 4, division: "Competitive A" },
  { position: 3, team: "Spike Force", wins: 9, losses: 5, division: "Competitive A" },
  { position: 4, team: "Block Party", wins: 8, losses: 6, division: "Competitive A" },
  { position: 5, team: "Dig Dynasty", wins: 6, losses: 8, division: "Competitive A" },
];

const Volleyball = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    division: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you within 48 hours to confirm your registration.",
    });
    setFormData({ teamName: "", captainName: "", email: "", phone: "", division: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={volleyballHero}
            alt="Volleyball action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gold font-medium tracking-widest uppercase mb-3">Crossroads Volleyball</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-4">
                Join the League
              </h1>
              <p className="text-cream/80 text-lg max-w-xl mx-auto">
                Competitive and recreational leagues on our premium sand courts. Registration begins March 1st!
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-forest text-cream py-8">
          <div className="container-max">
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { icon: Users, number: "6+", label: "Divisions" },
                { icon: Calendar, number: "Spring", label: "Season" },
                { icon: Trophy, number: "$500", label: "Champions Prize" },
              ].map(({ icon: Icon, number, label }) => (
                <div key={label}>
                  <Icon className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="font-heading text-2xl md:text-3xl font-bold">{number}</div>
                  <div className="text-cream/70 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="register" className="section-padding scroll-mt-24">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-accent font-medium tracking-widest uppercase mb-3">Register Now</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Team Registration
                </h2>
                <p className="text-muted-foreground mb-6">
                  Register your team for the upcoming season. Early registration discounts available until March 15th!
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "League fee: $450 per team (early bird: $400)",
                    "Minimum 6 players per team",
                    "10-week regular season + playoffs",
                    "Games played on premium sand courts",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-accent" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-lg">
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Team Name</label>
                    <Input
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="Enter your team name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Captain Name</label>
                    <Input
                      value={formData.captainName}
                      onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                      placeholder="Team captain's full name"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="captain@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Division</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, division: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select division" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="competitive-a">Competitive A</SelectItem>
                        <SelectItem value="competitive-b">Competitive B</SelectItem>
                        <SelectItem value="recreational">Recreational</SelectItem>
                        <SelectItem value="coed-competitive">Coed Competitive</SelectItem>
                        <SelectItem value="coed-recreational">Coed Recreational</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any special requests or questions?"
                      rows={3}
                    />
                  </div>
                  <Button variant="gold" size="lg" type="submit" className="w-full">
                    Submit Registration
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Schedules */}
        <section id="schedules" className="section-padding bg-secondary scroll-mt-24">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest uppercase mb-3">Game Times</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                League Schedule
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <table className="w-full">
                  <thead className="bg-forest text-cream">
                    <tr>
                      <th className="px-6 py-4 text-left font-heading">Division</th>
                      <th className="px-6 py-4 text-left font-heading">Day</th>
                      <th className="px-6 py-4 text-left font-heading">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.map((schedule, index) => (
                      <tr key={schedule.division} className={index % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="px-6 py-4 text-foreground font-medium">{schedule.division}</td>
                        <td className="px-6 py-4 text-muted-foreground">{schedule.day}</td>
                        <td className="px-6 py-4 text-muted-foreground">{schedule.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Standings */}
        <section id="standings" className="section-padding scroll-mt-24">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-accent font-medium tracking-widest uppercase mb-3">Current Season</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                League Standings
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl overflow-hidden shadow-lg">
                <div className="bg-forest text-cream px-6 py-4">
                  <h3 className="font-heading text-lg font-semibold">Competitive A Division</h3>
                </div>
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Pos</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Team</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">W</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-foreground">L</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team, index) => (
                      <tr key={team.team} className={index % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="px-6 py-4">
                          <span className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                            team.position === 1 ? "bg-gold text-accent-foreground" : 
                            team.position === 2 ? "bg-muted text-muted-foreground" : 
                            team.position === 3 ? "bg-warmBrown text-cream" : 
                            "text-muted-foreground"
                          }`}>
                            {team.position}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-foreground font-medium">{team.team}</td>
                        <td className="px-6 py-4 text-center text-accent font-bold">{team.wins}</td>
                        <td className="px-6 py-4 text-center text-muted-foreground">{team.losses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volleyball;
