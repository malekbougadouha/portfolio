import { useRef, useEffect } from "react";

const COLOR_BG = "#121212";
const COLOR_CUBE = "#84CC16";
const SPEED_X = 0.02; // rps
const SPEED_Y = 0.07; // rps
const SPEED_Z = 0.15; // rps

function RotatingCube({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // dimensions
    const h = window.innerHeight;
    const w = window.innerWidth;
    canvas.height = h;
    canvas.width = w;

    // colours and lines
    ctx.fillStyle = COLOR_BG;
    ctx.strokeStyle = COLOR_CUBE;
    ctx.lineWidth = w / 200; // thinner lines for smaller cube
    ctx.lineCap = "round";

    // cube parameters
    const cx = w < 800 ? w / 2 : w / 4; // middle for small screens, left for large
    const cy = h / 2;
    const cz = 0;
    const size = Math.min(h, w) / 6; // smaller cube size

    function POINT3D(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    let vertices = [
      new POINT3D(cx - size, cy - size, cz - size),
      new POINT3D(cx + size, cy - size, cz - size),
      new POINT3D(cx + size, cy + size, cz - size),
      new POINT3D(cx - size, cy + size, cz - size),
      new POINT3D(cx - size, cy - size, cz + size),
      new POINT3D(cx + size, cy - size, cz + size),
      new POINT3D(cx + size, cy + size, cz + size),
      new POINT3D(cx - size, cy + size, cz + size),
    ];
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], // back face
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4], // front face
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7], // connecting sides
    ];

    let timeLast = 0;

    function loop(timeNow) {
      const timeDelta = timeNow - timeLast;
      timeLast = timeNow;

      ctx.fillRect(0, 0, w, h);

      // rotate the cube along the z axis
      let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
      for (let v of vertices) {
        let dx = v.x - cx;
        let dy = v.y - cy;
        let x = dx * Math.cos(angle) - dy * Math.sin(angle);
        let y = dx * Math.sin(angle) + dy * Math.cos(angle);
        v.x = x + cx;
        v.y = y + cy;
      }

      // rotate the cube along the x axis
      angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
      for (let v of vertices) {
        let dy = v.y - cy;
        let dz = v.z - cz;
        let y = dy * Math.cos(angle) - dz * Math.sin(angle);
        let z = dy * Math.sin(angle) + dz * Math.cos(angle);
        v.y = y + cy;
        v.z = z + cz;
      }

      // rotate the cube along the y axis
      angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
      for (let v of vertices) {
        let dx = v.x - cx;
        let dz = v.z - cz;
        let x = dz * Math.sin(angle) + dx * Math.cos(angle);
        let z = dz * Math.cos(angle) - dx * Math.sin(angle);
        v.x = x + cx;
        v.z = z + cz;
      }

      // draw each edge
      for (let edge of edges) {
        ctx.beginPath();
        ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
        ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
        ctx.stroke();
      }

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    // Cleanup on unmount
    return () => {
      // No cleanup needed for animationFrame, but you could add one if you want to cancel the animation
    };
  }, []);

  return <canvas className={className} ref={canvasRef} />;
}

export default RotatingCube;
