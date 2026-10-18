
export type Particle = {
  key: string;
  char: string;
  dx: number;
  dy: number;
  delay: number;
};

export type Burst = {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
};
