import SectionHeader from '../ui/SectionHeader';
import CalloutBox from '../ui/CalloutBox';
import GlossaryTerm from '../ui/GlossaryTerm';
import { indicators } from '../../data/indicators';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const get=id=>indicators.find(x=>x.id===id)?.value;
function Bar({label,value,year}){return <div className="bar-row"><div className="bar-meta"><span>{label}</span><strong>{value.toFixed(2)}%</strong></div><div className="bar-track"><span style={{width:`${value}%`}}/></div><small>{year}</small></div>}

export default function YouthAndEmployment({t}){
 const r=useScrollReveal();
 return <section id="youth" className="section section-alt"><div className="container">
  <SectionHeader number="02" kicker={t('youth.eyebrow')} title={t('youth.title')} subtitle={t('youth.description')}/>
  <div ref={r.ref} className={r.className}>
   <div className="youth-feature-grid">
    <article className="chart-card">
     <div className="chart-head"><div><div className="eyebrow chart-eyebrow">{t('youth.comparison')}</div><h3>{t('youth.comparison')}</h3></div><span className="chart-unit">%</span></div>
     <div className="bar-stack">
      <Bar label="2013" value={get('youth-unemployment-2013')} year="2013"/>
      <Bar label="2025" value={get('youth-unemployment-2025')} year="2025"/>
     </div>
     <p className="interpretation">{t('youth.interpretation')}</p>
    </article>
    <CalloutBox eyebrow={t('youth.dividend')} title={t('youth.dividendTitle')} tone="amber">{t('youth.dividendText')}</CalloutBox>
   </div>
   <article className="chart-card lfpr-card">
    <div className="chart-head"><div><div className="eyebrow chart-eyebrow">{t('youth.lfpr')}</div><h3>{t('youth.lfpr')}</h3></div></div>
    <div className="lfpr-grid">
     <div><h4>{t('youth.men')}</h4><Bar label={t('youth.year2013')} value={get('male-lfpr-2013')} year="2013"/><Bar label={t('youth.year2025')} value={get('male-lfpr-2025')} year="2025"/></div>
     <div><h4>{t('youth.women')}</h4><Bar label={t('youth.year2013')} value={get('female-lfpr-2013')} year="2013"/><Bar label={t('youth.year2025')} value={get('female-lfpr-2025')} year="2025"/></div>
    </div>
    <p className="interpretation">{t('youth.femaleCaption')} <GlossaryTerm term="LFPR">LFPR</GlossaryTerm>.</p>
   </article>
  </div>
 </div></section>
}
