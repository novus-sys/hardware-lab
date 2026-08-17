import { useEffect, useState, useRef } from 'react'

export default function Odometer({ value, prefix = "", suffix = "", duration = 2.0 }) {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          setActive(false); // Reset to 0 instantly when scrolled away
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const digits = String(value).split("");

  return (
    <div
      ref={containerRef}
      className="inline-flex items-baseline overflow-hidden font-display select-none"
      style={{ height: '1.2em', lineHeight: '1.2em' }}
    >
      {prefix && <span className="text-on-ink mr-0.5">{prefix}</span>}
      <div className="flex overflow-hidden" style={{ height: '1.2em' }}>
        {digits.map((char, idx) => {
          const isNumber = !isNaN(parseInt(char, 10));
          if (!isNumber) {
            return <span key={idx} className="text-on-ink">{char}</span>;
          }
          const digitValue = parseInt(char, 10);
          return (
            <div
              key={idx}
              className="relative flex flex-col"
              style={{
                transform: active ? `translateY(-${digitValue * 10}%)` : "translateY(0%)",
                transition: active ? `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)` : "none",
                transitionDelay: active ? `${idx * 80}ms` : "0ms",
                height: '12em' // 10 digits * 1.2em height
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <span
                  key={n}
                  className="block text-on-ink text-center"
                  style={{ height: '1.2em', lineHeight: '1.2em' }}
                >
                  {n}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      {suffix && <span className="text-on-ink ml-0.5">{suffix}</span>}
    </div>
  );
}
