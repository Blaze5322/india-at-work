import { ArrowRight } from 'lucide-react';
import { getYearData, calculateLfprGap } from '../../data/indicators';

export default function Hero({ t, onExplore, onOpportunities }) {
  const data = getYearData(2025);
  const gap = calculateLfprGap(data);
  return <section id="home" className="hero-section">
    <div className="hero-grid-bg" aria-hidden="true"/>
    <div className="container hero-layout">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">{t('hero.eyebrow')}</div>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.description')}</p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={onExplore}>{t('hero.explore')} <ArrowRight size={16}/></button>
          <button className="button button-outline" onClick={onOpportunities}>{t('hero.opportunities')} <ArrowRight size={16}/></button>
        </div>
        <div className="hero-topic-row">{t('hero.topics').map((topic,i)=><span key={topic}><i>{String(i+1).padStart(2,'0')}</i>{topic}</span>)}</div>
      </div>
      <aside className="hero-metrics" aria-label={t('hero.panel')}>
        <div className="panel-heading"><span>{t('hero.panel')}</span><span className="panel-dot"/></div>
        <div className="hero-metric-list">
          <div className="hero-metric"><span>{t('hero.men')}</span><strong>{data.male_lfpr.toFixed(2)}%</strong></div>
          <div className="hero-metric"><span>{t('hero.women')}</span><strong>{data.female_lfpr.toFixed(2)}%</strong></div>
          <div className="hero-metric"><span>{t('hero.youth')}</span><strong>{data.youth_unemployment.toFixed(2)}%</strong></div>
        </div>
        <div className="panel-foot"><span>{t('hero.endpoints')}</span><span>{t('hero.source')}</span></div>
      </aside>
    </div>
    <div className="container hero-bottom"><span>{t('hero.scroll')}</span><span className="scroll-line"/></div>
  </section>;
}
