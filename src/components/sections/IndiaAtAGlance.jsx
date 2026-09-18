import SectionHeader from '../ui/SectionHeader';
import StatCard from '../ui/StatCard';
import GlossaryTerm from '../ui/GlossaryTerm';
import TradeJobsCard from './TradeJobsCard';
import { indicators } from '../../data/indicators';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function IndiaAtAGlance({t}) {
 const r=useScrollReveal();
 const cards=indicators.filter(x=>['gdp-growth-2025','youth-unemployment-2025','female-lfpr-2025','male-lfpr-2025'].includes(x.id));
 return <section id="glance" className="section"><div className="container">
   <SectionHeader number="01" kicker={t('glance.eyebrow')} title={t('glance.title')} subtitle={t('glance.description')}/>
   <div ref={r.ref} className={r.className}>
     <div className="metric-cards-grid">{cards.map((s,i)=><StatCard key={s.id} stat={s} accent={i===0?'orange':i===1?'red':i===2?'blue':'purple'}/>)}</div>
     <div className="definition-grid">
       <div><span className="definition-num">01</span><p><GlossaryTerm term="Youth unemployment">{t('glance.yu')}</GlossaryTerm></p><small>{t('glance.yuText')}</small></div>
       <div><span className="definition-num">02</span><p><GlossaryTerm term="LFPR">{t('glance.lfpr')}</GlossaryTerm></p><small>{t('glance.lfprText')}</small></div>
       <div><span className="definition-num">03</span><p><GlossaryTerm term="LFPR gender gap">{t('glance.gap')}</GlossaryTerm></p><small>{t('glance.gapText')}</small></div>
     </div>
     <div id="trade" className="anchor-section"><TradeJobsCard t={t}/></div>
   </div>
 </div></section>;
}
