import { Children } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  direction = "left",
  speed = 30,
  pauseOnHover = true,
  gap = "1.5rem",
  className,
  fade = true,
}) {
  const vertical = direction === "up" || direction === "down";
  const reverse = direction === "right" || direction === "down";
  const items = Children.toArray(children);

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden w-full",
        vertical ? "flex-col" : "flex-row",
        fade && !vertical && "marquee-mask-x [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        fade && vertical && "marquee-mask-y [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
      // gap on the wrapper too, so the seam between the two tracks matches the
      // spacing between items and the loop stays even.
      style={{ "--gap": gap, gap }}
    >
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1}
          style={{
            animationDuration: `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
            gap,
          }}
          className={cn(
            "flex shrink-0 items-stretch py-4",
            vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {items.map((child, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Marquee duplicates static child slots; item order is not mutated.
            <div key={i} className="shrink-0 flex h-full">
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
