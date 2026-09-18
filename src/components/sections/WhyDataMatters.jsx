import { ArrowRight } from 'lucide-react';
export default function WhyDataMatters({t}) { return <section className="why-band"><div className="container why-inner"><div className="why-label"><span className="why-rule"/>{t('why.label')}</div><p>{t('why.text')}</p><ArrowRight className="why-arrow" size={18} aria-hidden="true"/></div></section>; }
