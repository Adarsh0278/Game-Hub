import { Gamepad2, Heart, Zap, Users } from 'lucide-react';
import { Link } from "react-router-dom";

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm border border-gray-200/6 dark:border-gray-700/10 rounded-xl p-6 hover:scale-[1.01] transition-transform shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const features = [
    {
      icon: Gamepad2,
      title: 'Diverse Game Library',
      description: 'Thousands of games across genres — puzzle, arcade, strategy, card games and more. Curated and updated weekly.',
    },
    {
      icon: Zap,
      title: 'Instant Play',
      description: 'No downloads. No installs. Enjoy games instantly on desktop and mobile browsers.',
    },
    {
      icon: Heart,
      title: 'Curated Quality',
      description: 'We handpick the best experiences so you only get fun, safe, and well-built games.',
    },
    {
      icon: Users,
      title: 'For Everyone',
      description: 'Casual players, families, and competitive gamers alike — there’s something for every skill level.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Discover. Play. Share.
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          GameHub brings together the web’s best games in one place. Fast, curated, and free — we make it easy to find your next favorite game.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link to="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:opacity-95">
            Browse Games
          </Link>
          <Link to="/categories" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
            Explore Categories
          </Link>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 bg-white/5 dark:bg-white/3 rounded-2xl p-8 border border-gray-200/6 dark:border-gray-700/10 shadow">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Mission</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            We believe gaming should be accessible, safe, and delightful. GameHub’s mission is to connect players with high-quality browser games, streamline discovery, and support independent creators.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We prioritize performance, privacy, and a frictionless experience — so you can spend more time playing and less time searching.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 text-center border border-gray-200/6 dark:border-gray-700/10">
            <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">12k+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Monthly Players</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 text-center border border-gray-200/6 dark:border-gray-700/10">
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">1.5k+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Curated Games</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">What we offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Team / CTA */}
      <section className="bg-gradient-to-r from-cyan-500/6 to-blue-600/6 border border-gray-200/6 dark:border-gray-700/10 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Built by players, for players</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          GameHub is a small, passionate team dedicated to making games easier to find and more fun to play. We welcome feedback and contributions from the community.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold shadow-md hover:bg-cyan-600">
            Start Playing
          </Link>
        </div>
      </section>
    </div>
  );
}
