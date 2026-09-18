import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { genderGap } from '../../data/indicators';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function GenderAndWork({t}){
 const r=useScrollReveal();
 return <section id="gender" className="section"><div className="container">
  <SectionHeader number="03" kicker={t('gender.eyebrow')} title={t('gender.title')} subtitle={t('gender.description')}/>
  <div ref={r.ref} className={r.className}>
   <article className="gender-card">
    <div className="gender-main">
     <div className="gender-question"><span>{t('gender.question')}</span><strong>{genderGap.gap.toFixed(2)}<small> pp</small></strong><em>{t('gender.difference')}</em></div>
     <div className="gender-chart" role="img" aria-label={t('accessibility.genderChart')}>
      {[['men',genderGap.male,'blue'],['women',genderGap.female,'purple']].map(([key,value,color])=><div className="gender-row" key={key}><div className="gender-label"><span>{t(`gender.${key}`)}</span><strong>{value.toFixed(2)}%</strong></div><div className="gender-track"><span className={`fill-${color}`} style={{width:`${value}%`}}/></div></div>)}
      <div className="scale"><span>0</span><span>25</span><span>50</span><span>75</span><span>100%</span></div>
     </div>
    </div>
    <div className="gender-foot"><p>{t('gender.caption')}</p><span className="gender-chip"><ArrowRight size={14}/>{t('gender.maleLabel')} / {t('gender.femaleLabel')}</span></div>
    <div className="source-bar">{t('gender.scale')}</div>
   </article>
  </div>
 </div></section>
}
