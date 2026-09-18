import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { languages } from '../../i18n';

const links = [['home','navigation.home'],['glance','navigation.glance'],['youth','navigation.youth'],['gender','navigation.gender'],['trade','navigation.trade'],['opportunities','navigation.opportunities']];

export default function Navbar({ active, locale, setLocale, t }) {
  const [open, setOpen] = useState(false);
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' }); setOpen(false); };
  return <header className="nav-wrap">
    <nav className="nav-bar" aria-label="Primary navigation">
      <div className="container nav-inner">
        <button className="brand" onClick={() => go('home')} aria-label="India at Work home">
          <span className="brand-mark" aria-hidden="true"><span/><span/><span/></span>
          <span>India at Work</span>
        </button>
        <div className="desktop-nav">
          {links.map(([id,key]) => <button key={id} className={`nav-link ${active === id ? 'active' : ''}`} onClick={() => go(id)}>{t(key)}</button>)}
        </div>
        <div className="nav-actions">
          <label className="language-control">
            <span className="sr-only">{t('accessibility.language')}</span>
            <select value={locale} onChange={e => setLocale(e.target.value)} aria-label={t('accessibility.language')}>
              {languages.map(l => <option key={l.code} value={l.code}>{l.native}</option>)}
            </select>
            <ChevronDown size={14} aria-hidden="true"/>
          </label>
          <button className="mobile-menu-button" onClick={() => setOpen(v => !v)} aria-label={open ? t('accessibility.closeMenu') : t('accessibility.openMenu')} aria-expanded={open}>
            {open ? <X size={19}/> : <Menu size={19}/>} 
          </button>
        </div>
      </div>
      {open && <div className="mobile-panel"><div className="container mobile-panel-inner">
        {links.map(([id,key]) => <button key={id} className={`mobile-link ${active === id ? 'active' : ''}`} onClick={() => go(id)}>{t(key)}</button>)}
        <div className="mobile-language">
          <span>{t('navigation.language')}</span>
          <div className="language-pills">{languages.map(l => <button key={l.code} className={locale===l.code?'selected':''} onClick={()=>setLocale(l.code)}>{l.native}</button>)}</div>
        </div>
      </div></div>}
    </nav>
  </header>;
}
