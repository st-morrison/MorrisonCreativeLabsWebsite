import { useEffect, useRef, useCallback } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const COLS = 20;
const ROWS = 20;
const SZ = 20;
const INTERVAL = 120;

interface Point {
  x: number;
  y: number;
}

const VIOLET = "#7c3aed";
const VIOLET_LIGHT = "#a78bfa";
const FOOD_COLOR = "#f472b6";
const BG = "#0f0f0f";
const GRID = "#1a1a1a";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef<Point[]>([{ x: 10, y: 10 }]);
  const dirRef = useRef<Point>({ x: 1, y: 0 });
  const nextDirRef = useRef<Point>({ x: 1, y: 0 });
  const foodRef = useRef<Point>({ x: 5, y: 5 });
  const runningRef = useRef(false);
  const startedRef = useRef(false);
  const scoreRef = useRef(0);
  const bestRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const scoreElRef = useRef<HTMLSpanElement>(null);
  const bestElRef = useRef<HTMLSpanElement>(null);
  const lengthElRef = useRef<HTMLSpanElement>(null);
  const msgElRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const spawnFood = useCallback(() => {
    let pos: Point;
    do {
      pos = {
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS),
      };
    } while (snakeRef.current.some((s) => s.x === pos.x && s.y === pos.y));
    foodRef.current = pos;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = GRID;
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= COLS; i++) {
      ctx.beginPath();
      ctx.moveTo(i * SZ, 0);
      ctx.lineTo(i * SZ, canvas.height);
      ctx.stroke();
    }
    for (let j = 0; j <= ROWS; j++) {
      ctx.beginPath();
      ctx.moveTo(0, j * SZ);
      ctx.lineTo(canvas.width, j * SZ);
      ctx.stroke();
    }

    snakeRef.current.forEach((seg, i) => {
      ctx.fillStyle = i === 0 ? VIOLET_LIGHT : VIOLET;
      ctx.beginPath();
      ctx.roundRect(
        seg.x * SZ + 1,
        seg.y * SZ + 1,
        SZ - 2,
        SZ - 2,
        i === 0 ? 5 : 3,
      );
      ctx.fill();
    });

    const f = foodRef.current;
    ctx.fillStyle = FOOD_COLOR;
    ctx.beginPath();
    ctx.arc(f.x * SZ + SZ / 2, f.y * SZ + SZ / 2, SZ / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  const endGame = useCallback(() => {
    runningRef.current = false;
    cancelAnimationFrame(rafRef.current);
    if (msgElRef.current)
      msgElRef.current.textContent = `Game over — score: ${scoreRef.current}`;
    if (btnRef.current) btnRef.current.style.display = "inline-flex";

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.fillStyle = "rgba(15,15,15,0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = VIOLET_LIGHT;
    ctx.font = "500 20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 10);
    ctx.fillStyle = "#f5f5f5";
    ctx.font = "14px sans-serif";
    ctx.fillText(
      `Score: ${scoreRef.current}`,
      canvas.width / 2,
      canvas.height / 2 + 18,
    );
    ctx.textAlign = "left";
  }, []);

  const step = useCallback(() => {
    dirRef.current = { ...nextDirRef.current };
    const head: Point = {
      x: snakeRef.current[0].x + dirRef.current.x,
      y: snakeRef.current[0].y + dirRef.current.y,
    };
    const hitWall =
      head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS;
    const hitSelf = snakeRef.current.some(
      (s) => s.x === head.x && s.y === head.y,
    );
    if (hitWall || hitSelf) {
      endGame();
      return;
    }

    snakeRef.current.unshift(head);
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      scoreRef.current += 10;
      if (scoreRef.current > bestRef.current) {
        bestRef.current = scoreRef.current;
        if (bestElRef.current)
          bestElRef.current.textContent = String(bestRef.current);
      }
      if (scoreElRef.current)
        scoreElRef.current.textContent = String(scoreRef.current);
      if (lengthElRef.current)
        lengthElRef.current.textContent = String(snakeRef.current.length);
      spawnFood();
    } else {
      snakeRef.current.pop();
    }
    draw();
  }, [draw, endGame, spawnFood]);

  const loop = useCallback(
    (ts: number) => {
      if (!runningRef.current) return;
      if (ts - lastTimeRef.current >= INTERVAL) {
        lastTimeRef.current = ts;
        step();
      }
      rafRef.current = requestAnimationFrame(loop);
    },
    [step],
  );

  const init = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    snakeRef.current = [{ x: 10, y: 10 }];
    dirRef.current = { x: 1, y: 0 };
    nextDirRef.current = { x: 1, y: 0 };
    scoreRef.current = 0;
    runningRef.current = false;
    startedRef.current = false;
    lastTimeRef.current = 0;
    spawnFood();
    if (scoreElRef.current) scoreElRef.current.textContent = "0";
    if (lengthElRef.current) lengthElRef.current.textContent = "1";
    if (msgElRef.current)
      msgElRef.current.textContent = "Press any arrow key to start";
    if (btnRef.current) btnRef.current.style.display = "none";
    draw();
  }, [draw, spawnFood]);

  useEffect(() => {
    init();
    const handleKey = (e: KeyboardEvent) => {
      const map: Record<string, Point> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };
      const d = map[e.key];
      if (!d) return;
      e.preventDefault();
      if (d.x === -dirRef.current.x && d.y === -dirRef.current.y) return;
      nextDirRef.current = d;
      if (!startedRef.current) {
        startedRef.current = true;
        runningRef.current = true;
        if (msgElRef.current) msgElRef.current.textContent = "";
        rafRef.current = requestAnimationFrame(loop);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      cancelAnimationFrame(rafRef.current);
    };
  }, [init, loop]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 4,
      }}
    >
      <Grid container>
        <Typography
          variant="h3"
          sx={{
            color: "primary.light",
            fontWeight: 700,
            letterSpacing: "0.05em",
            marginRight: "2.5rem",
          }}
        >
          Snake
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          {[
            { label: "Score", ref: scoreElRef, init: "0" },
            { label: "Best", ref: bestElRef, init: "0" },
            { label: "Length", ref: lengthElRef, init: "1" },
          ].map(({ label, ref, init: initVal }) => (
            <Box key={label} sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "text.secondary",
                }}
              >
                {label}
              </Typography>
              <Typography
                ref={ref}
                sx={{ fontSize: 22, fontWeight: 500, color: "primary.light" }}
              >
                {initVal}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>

      <canvas
        ref={canvasRef}
        width={COLS * SZ}
        height={ROWS * SZ}
        style={{
          border: "1px solid #7c3aed",
          borderRadius: 8,
          display: "block",
        }}
      />

      <Typography
        ref={msgElRef}
        sx={{ fontSize: 13, color: "text.secondary", letterSpacing: "0.04em" }}
      >
        Press any arrow key to start
      </Typography>

      <Button
        ref={btnRef}
        variant="outlined"
        onClick={init}
        sx={{ display: "none" }}
      >
        Play again
      </Button>
    </Box>
  );
}
