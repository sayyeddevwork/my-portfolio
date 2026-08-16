import { useEffect } from 'react';

export const SECTION_ORDER = [
  'home',
  'about',
  'experience',
  'projects',
  'architecture',
  'principles',
  'engineering-notes',
  'skills',
  'contact',
];

export function useSectionShortcuts() {
  useEffect(() => {
    const isTypingTarget = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      const tag = target.tagName;
      return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
    };

    const modalOpen = () => document.querySelector('[role="dialog"][aria-modal="true"]') !== null;

    const getCurrentIndex = () => {
      const probe = window.scrollY + window.innerHeight / 3;
      let index = 0;
      SECTION_ORDER.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) index = i;
      });
      return index;
    };

    const navigateTo = (index: number) => {
      const id = SECTION_ORDER[Math.min(Math.max(index, 0), SECTION_ORDER.length - 1)];
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target) || modalOpen()) return;

      const current = getCurrentIndex();

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateTo(current + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateTo(current - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateTo(SECTION_ORDER.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}