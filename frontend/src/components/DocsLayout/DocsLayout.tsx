import React, {useState, useEffect, useRef} from 'react';
import DocsSidebar from './DocsSidebar';
import ChapterList from './ChapterList';
import '../../css/docsStyles.css';

const sampleChapters = [
  {
    id: 'chapter-1',
    title: 'Chapter 1 — Foundations',
    modules: [
      {id: 'c1-m1', title: 'Module 1 — Overview', path: 'docs/overview'},
      {id: 'c1-m2', title: 'Module 2 — Basics', path: '/docs/chapter-1'},
    ],
  },
  {
    id: 'chapter-2',
    title: 'Chapter 2 — Advanced Topics',
    modules: [
      {id: 'c2-m1', title: 'Module 1 — Control', path: '/docs/chapter-2'},
      {id: 'c2-m2', title: 'Module 2 — Learning', path: '/docs/chapter-2'},
    ],
  },
];

export default function DocsLayout() {
  const [active, setActive] = useState<string>('c1-m1');
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  const [query, setQuery] = useState<string>('');
  const articleRef = useRef<any>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Filter chapters/modules by search query
  const filteredChapters = sampleChapters
    .map((ch) => ({
      ...ch,
      modules: ch.modules.filter((m) =>
        (m.title + ' ' + ch.title).toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((ch) => ch.modules.length > 0);

  useEffect(() => {
    // scroll-spy: highlight module cards that intersect
    const root = articleRef.current || document;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (!id) return;
          if (entry.isIntersecting) {
            setActive(id);
          }
        });
      },
      {root: articleRef.current, rootMargin: '0px', threshold: 0.6}
    );

    const cards = Array.from(
      (articleRef.current || document).querySelectorAll('.module-card')
    ) as Element[];
    cards.forEach((c) => observer.observe(c));

    return () => {
      observer.disconnect();
    };
  }, [filteredChapters]);

  return (
    <div className="docs-root container">
      <DocsSidebar
        chapters={filteredChapters}
        active={active}
        onSelect={(id) => setActive(id)}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        query={query}
        onQueryChange={setQuery}
      />

      <main className="docs-content">
        <div className="docs-toolbar">
          <div className="docs-breadcrumbs">Docs / Chapters</div>
          <div className="docs-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme">
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>

        <div className="docs-article" ref={articleRef}>
          <ChapterList chapters={filteredChapters} active={active} onSelect={setActive} />
        </div>
      </main>
    </div>
  );
}
