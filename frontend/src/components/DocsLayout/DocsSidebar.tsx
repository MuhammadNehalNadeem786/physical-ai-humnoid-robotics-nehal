import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { Search, Moon, Sun, BookOpen } from 'lucide-react';

type Module = { id: string; title: string; path?: string };
type Chapter = { id: string; title: string; modules: Module[] };

export default function DocsSidebar({
  chapters,
  active,
  onSelect,
  theme,
  onToggleTheme,
  query = '',
  onQueryChange,
}: {
  chapters: Chapter[];
  active: string;
  onSelect: (id: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  query?: string;
  onQueryChange?: (q: string) => void;
}) {
  const [openChapters, setOpenChapters] = useState<Set<string>>(
    new Set(chapters.map((c) => c.id))
  );

  const toggleChapter = (chapterId: string) => {
    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(chapterId)) next.delete(chapterId);
      else next.add(chapterId);
      return next;
    });
  };

  return (
    <aside className="docs-sidebar fixed inset-y-0 left-0 z-40 w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">🤖</div>
          <div className="font-semibold text-lg text-gray-900 dark:text-white">
            Physical AI Textbook
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 mt-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
            placeholder="Search docs..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-3 pb-24">
        {chapters.map((chapter) => {
          const isOpen = openChapters.has(chapter.id);
          const hasActive = chapter.modules.some((m) => m.id === active);

          return (
            <div key={chapter.id} className="mb-1">
              {/* Chapter Header */}
              <button
                onClick={() => toggleChapter(chapter.id)}
                className={`
                  w-full px-3 py-2.5 flex items-center justify-between rounded-lg text-sm font-medium transition-all
                  ${hasActive 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                <span className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{chapter.title}</span>
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Modules */}
              {isOpen && (
                <ul className="mt-1 space-y-0.5">
                  {chapter.modules.map((module) => {
                    const isActive = module.id === active;
                    const content = (
                      <span className="block truncate">{module.title}</span>
                    );

                    return (
                      <li key={module.id}>
                        {module.path ? (
                          <Link
                            to={module.path}
                            onClick={() => onSelect(module.id)}
                            className={`
                              block w-full px-3 py-2 pl-10 text-sm rounded-lg transition-all
                              ${isActive
                                ? 'bg-blue-600 text-white font-medium shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                              }
                            `}
                          >
                            {content}
                          </Link>
                        ) : (
                          <button
                            onClick={() => onSelect(module.id)}
                            className={`
                              w-full text-left px-3 py-2 pl-10 text-sm rounded-lg transition-all
                              ${isActive
                                ? 'bg-blue-600 text-white font-medium shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                              }
                            `}
                          >
                            {content}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 w-80 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            v1.0 • Beta
          </div>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-600" />
            ) : (
              <Sun className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}