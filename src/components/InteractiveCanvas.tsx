import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
}

export function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>();
  const isDarkRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        initPoints();
      }
    };

    const initPoints = () => {
      const points: Point[] = [];
      const spacing = 80;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push({
            x: i * spacing,
            y: j * spacing,
            originX: i * spacing,
            originY: j * spacing,
            vx: 0,
            vy: 0,
            size: Math.random() * 2 + 1,
          });
        }
      }
      pointsRef.current = points;
    };

    const checkDarkMode = () => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    };

    const animate = () => {
      checkDarkMode();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const points = pointsRef.current;
      const maxDistance = 150;

      // Update and draw points
      points.forEach((point) => {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          point.vx -= Math.cos(angle) * force * 2;
          point.vy -= Math.sin(angle) * force * 2;
        }

        // Spring back to origin
        const springX = (point.originX - point.x) * 0.03;
        const springY = (point.originY - point.y) * 0.03;
        point.vx += springX;
        point.vy += springY;

        // Apply friction
        point.vx *= 0.92;
        point.vy *= 0.92;

        // Update position
        point.x += point.vx;
        point.y += point.vy;
      });

      // Draw connections
      const connectionDistance = 100;
      ctx.strokeStyle = isDarkRef.current
        ? "rgba(255, 255, 255, 0.06)"
        : "rgba(0, 0, 0, 0.04)";
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.strokeStyle = isDarkRef.current
              ? `rgba(255, 255, 255, ${opacity})`
              : `rgba(0, 0, 0, ${opacity * 0.7})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach((point) => {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = distance < maxDistance;

        ctx.beginPath();
        ctx.arc(point.x, point.y, isNearMouse ? point.size * 1.5 : point.size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkRef.current
          ? isNearMouse
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(255, 255, 255, 0.15)"
          : isNearMouse
          ? "rgba(0, 0, 0, 0.3)"
          : "rgba(0, 0, 0, 0.1)";
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animate();

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  );
}
