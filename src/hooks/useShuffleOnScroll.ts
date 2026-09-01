import { useEffect, useRef, useState } from 'react';

const SHUFFLE_DURATION_MS = 700;

function randomDigit() {
  return String(Math.floor(Math.random() * 10));
}

export function useShuffleOnScroll<T extends HTMLElement>(target: string, delayMs = 0) {
  const ref = useRef<T>(null);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    setDisplay(target);
  }, [target]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runShuffle = () => {
      if (!('requestAnimationFrame' in window)) {
        setDisplay(target);
        return;
      }

      const chars = target.split('');
      const digitIndexes = chars
        .map((ch, i) => (/[0-9]/.test(ch) ? i : -1))
        .filter((i) => i !== -1);

      if (digitIndexes.length === 0) {
        setDisplay(target);
        return;
      }

      const startTime = performance.now() + delayMs;
      const settleOrder = [...digitIndexes];

      let frameId: number;
      const tick = (now: number) => {
        const elapsed = now - startTime;
        if (elapsed < 0) {
          frameId = requestAnimationFrame(tick);
          return;
        }

        const progress = Math.min(elapsed / SHUFFLE_DURATION_MS, 1);
        const settledCount = Math.floor(progress * settleOrder.length);

        const next = [...chars];
        digitIndexes.forEach((idx, order) => {
          if (order < settledCount) {
            next[idx] = target[idx];
          } else {
            next[idx] = randomDigit();
          }
        });
        setDisplay(next.join(''));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setDisplay(target);
        }
      };

      frameId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frameId);
    };

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return;
    }

    let cleanupShuffle: (() => void) | undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cleanupShuffle = runShuffle();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cleanupShuffle?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, delayMs]);

  return { ref, display };
}
