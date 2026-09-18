import { ArrowUpRight, BarChart3, Users, BriefcaseBusiness } from 'lucide-react';
import { headlineStats } from '../../data/indicators';

const icons = [BarChart3, Users, BriefcaseBusiness];

export default function HeadlineStats() {
  return <section className="stats-strip"><div className="container stats-grid">
    {headlineStats.map((stat,i)=>{const Icon=icons[i]; return <article className="metric-card" key={stat.id}>
      <div className="metric-top"><span className="metric-label">{stat.population}</span><span className="metric-year">{stat.year}</span></div>
      <div className="metric-main"><strong>{stat.displayValue}</strong><Icon size={17} aria-hidden="true"/></div>
      <div className="metric-name">{stat.name}</div>
      <div className="metric-source">India · {stat.source}</div>
      <ArrowUpRight className="metric-arrow" size={15} aria-hidden="true"/>
    </article>})}
  </div></section>;
}
