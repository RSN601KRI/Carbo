import { useEffect, useRef, useState } from 'react';

interface KnowledgeNode {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
  connections: string[];
}

const nodes: KnowledgeNode[] = [
  { id: 'carbon', label: 'Carbon Credits', x: 50, y: 50, size: 60, color: 'hsl(152, 60%, 28%)', connections: ['forest', 'ocean', 'energy', 'cities'] },
  { id: 'forest', label: 'Forestry', x: 20, y: 30, size: 45, color: 'hsl(145, 63%, 32%)', connections: ['biodiversity', 'carbon'] },
  { id: 'ocean', label: 'Ocean', x: 80, y: 25, size: 45, color: 'hsl(200, 60%, 50%)', connections: ['biodiversity', 'carbon'] },
  { id: 'energy', label: 'Renewable', x: 25, y: 75, size: 45, color: 'hsl(45, 90%, 55%)', connections: ['cities', 'carbon'] },
  { id: 'cities', label: 'Smart Cities', x: 75, y: 70, size: 45, color: 'hsl(165, 50%, 35%)', connections: ['energy', 'carbon'] },
  { id: 'biodiversity', label: 'Biodiversity', x: 50, y: 15, size: 35, color: 'hsl(120, 40%, 45%)', connections: ['forest', 'ocean'] },
];

export const KnowledgeGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const animationRef = useRef<number>(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: Math.min(400, rect.width * 0.6) });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      offsetRef.current += 0.005;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw connections with animated gradient
      nodes.forEach((node) => {
        const nodeX = (node.x / 100) * dimensions.width;
        const nodeY = (node.y / 100) * dimensions.height;

        node.connections.forEach((connId) => {
          const connNode = nodes.find((n) => n.id === connId);
          if (connNode && connNode.id > node.id) {
            const connX = (connNode.x / 100) * dimensions.width;
            const connY = (connNode.y / 100) * dimensions.height;

            const gradient = ctx.createLinearGradient(nodeX, nodeY, connX, connY);
            const alpha = hoveredNode === node.id || hoveredNode === connId ? 0.6 : 0.2;
            gradient.addColorStop(0, `hsla(152, 60%, 28%, ${alpha})`);
            gradient.addColorStop(0.5 + Math.sin(offsetRef.current) * 0.3, `hsla(165, 50%, 35%, ${alpha + 0.1})`);
            gradient.addColorStop(1, `hsla(152, 60%, 28%, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(nodeX, nodeY);
            ctx.lineTo(connX, connY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = hoveredNode === node.id || hoveredNode === connId ? 3 : 1.5;
            ctx.stroke();

            // Animated dot along the line
            const dotProgress = (offsetRef.current * 2) % 1;
            const dotX = nodeX + (connX - nodeX) * dotProgress;
            const dotY = nodeY + (connY - nodeY) * dotProgress;
            ctx.beginPath();
            ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(152, 60%, 50%, ${0.5 + Math.sin(offsetRef.current * 5) * 0.3})`;
            ctx.fill();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const x = (node.x / 100) * dimensions.width;
        const y = (node.y / 100) * dimensions.height;
        const floatOffset = Math.sin(offsetRef.current * 2 + node.x * 0.1) * 3;
        const finalY = y + floatOffset;
        const isHovered = hoveredNode === node.id;
        const scale = isHovered ? 1.15 : 1;
        const size = node.size * scale;

        // Glow effect
        const glowGradient = ctx.createRadialGradient(x, finalY, 0, x, finalY, size * 1.5);
        glowGradient.addColorStop(0, node.color.replace(')', ', 0.4)').replace('hsl', 'hsla'));
        glowGradient.addColorStop(1, node.color.replace(')', ', 0)').replace('hsl', 'hsla'));
        ctx.beginPath();
        ctx.arc(x, finalY, size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node circle with gradient
        const nodeGradient = ctx.createRadialGradient(x - size * 0.2, finalY - size * 0.2, 0, x, finalY, size);
        nodeGradient.addColorStop(0, node.color.replace('28%', '40%').replace('32%', '45%').replace('50%', '60%').replace('55%', '65%').replace('35%', '48%').replace('45%', '55%'));
        nodeGradient.addColorStop(1, node.color);
        ctx.beginPath();
        ctx.arc(x, finalY, size / 2, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();

        // Inner highlight
        ctx.beginPath();
        ctx.arc(x - size * 0.1, finalY - size * 0.1, size * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();

        // Label
        ctx.font = `${isHovered ? 'bold ' : ''}${Math.max(10, size * 0.25)}px Inter Tight`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isHovered ? 'hsl(152, 60%, 28%)' : 'hsl(150, 25%, 30%)';
        ctx.fillText(node.label, x, finalY + size / 2 + 16);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [dimensions, hoveredNode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let found: string | null = null;
    for (const node of nodes) {
      const x = (node.x / 100) * dimensions.width;
      const y = (node.y / 100) * dimensions.height;
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
      if (distance < node.size / 2 + 10) {
        found = node.id;
        break;
      }
    }
    setHoveredNode(found);
  };

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredNode(null)}
      />
    </div>
  );
};