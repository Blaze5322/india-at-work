import { Lightbulb } from 'lucide-react';
export default function CalloutBox({eyebrow,title,children,tone='amber'}) { return <aside className={`callout callout-${tone}`}><div className="callout-icon"><Lightbulb size={17}/></div><div><div className="eyebrow callout-eyebrow">{eyebrow}</div><h3>{title}</h3><div className="callout-body">{children}</div></div></aside>; }
