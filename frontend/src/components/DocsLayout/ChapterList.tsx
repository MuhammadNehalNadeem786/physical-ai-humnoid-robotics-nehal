import React from 'react';
import Link from '@docusaurus/Link';

type Module = {id: string; title: string; path?: string};
type Chapter = {id: string; title: string; modules: Module[]};

export default function ChapterList({
  chapters,
  active,
  onSelect,
}: {
  chapters: Chapter[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="chapter-list">
      {chapters.map((ch) => (
        <section key={ch.id} className="chapter-section">
          <h2 className="chapter-heading">{ch.title}</h2>
          <div className="chapter-cards">
            {ch.modules.map((m) => (
              m.path ? (
                <Link
                  key={m.id}
                  to={m.path}
                  data-id={m.id}
                  className={m.id === active ? 'module-card active' : 'module-card'}
                  onClick={() => onSelect(m.id)}
                >
                  <h3>{m.title}</h3>
                  <p>
                    A short description for {m.title}. Click to open the module content and
                    explore exercises and examples.
                  </p>
                  <div className="module-cta">Open →</div>
                </Link>
              ) : (
                <article
                  key={m.id}
                  data-id={m.id}
                  className={m.id === active ? 'module-card active' : 'module-card'}
                  onClick={() => onSelect(m.id)}
                >
                  <h3>{m.title}</h3>
                  <p>
                    A short description for {m.title}. Click to open the module content and
                    explore exercises and examples.
                  </p>
                  <div className="module-cta">Open →</div>
                </article>
              )
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
