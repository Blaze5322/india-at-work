import { TrendingUp, Users, ArrowRight } from 'lucide-react';
import { endpointData } from '../../data/indicators';

export default function TradeJobsCard({t}){
 const {gdp, youthUnemployment} = endpointData;
 return <article className="story-card trade-card">
  <div className="story-card-head"><div><div className="eyebrow section-eyebrow">{t('trade.eyebrow')}</div><h3>{t('trade.title')}</h3><p>{t('trade.description')}</p></div><div className="story-mark" aria-hidden="true">↗</div></div>
  <div className="comparison-grid">
   {[[t('trade.gdp'),gdp.from,gdp.to,TrendingUp,'blue'],[t('trade.unemployment'),youthUnemployment.from,youthUnemployment.to,Users,'red']].map(([title,a,b,Icon,accent])=><div className="comparison-item" key={title}>
    <div className="comparison-title"><Icon size={16}/><span>{title}</span></div>
    <div className="comparison-values"><div><small>{a.year}</small><strong>{a.displayValue}</strong></div><ArrowRight size={18} className="comparison-arrow"/><div className="to"><small>{b.year}</small><strong className={`text-${accent}`}>{b.displayValue}</strong></div></div>
   </div>)}
  </div>
  <div className="story-note"><span>{t('common.dataNote')}</span>{t('trade.endpoint')}</div>
 </article>
}
