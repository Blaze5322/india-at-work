import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HeadlineStats from './components/sections/HeadlineStats';
import WhyDataMatters from './components/sections/WhyDataMatters';
import IndiaAtAGlance from './components/sections/IndiaAtAGlance';
import YouthAndEmployment from './components/sections/YouthAndEmployment';
import GenderAndWork from './components/sections/GenderAndWork';
import FindOpportunities from './components/sections/FindOpportunities';
import { useActiveSection } from './hooks/useActiveSection';
import { createTranslator, messages } from './i18n';

const sectionIds = ['home','glance','youth','gender','trade','opportunities'];

export default function App() {
  const [locale, setLocale] = useState(() => localStorage.getItem('india-at-work-language') || 'en');
  const active = useActiveSection(sectionIds);
  const t = useMemo(() => createTranslator(locale), [locale]);

  useEffect(() => {
    localStorage.setItem('india-at-work-language', locale);
    document.documentElement.lang = locale;
    document.body.dataset.language = locale;
  }, [locale]);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return <div className="site-shell">
    <Navbar active={active} locale={locale} setLocale={setLocale} t={t} />
    <main>
      <Hero t={t} onExplore={() => scrollTo('glance')} onOpportunities={() => scrollTo('opportunities')} />
      <HeadlineStats t={t} />
      <WhyDataMatters t={t} />
      <IndiaAtAGlance t={t} />
      <YouthAndEmployment t={t} />
      <GenderAndWork t={t} />
      <FindOpportunities t={t} locale={locale} />
    </main>
    <Footer t={t} />
  </div>;
}

export { messages };
