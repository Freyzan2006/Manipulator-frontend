export interface HistoryEntry {
  id: string;
  raw: string;
  optimized: string;
  startedAt: string;
  finishedAt: string;
  beforePosition: [number, number];
  afterPosition: [number, number];
  beforeSamples: string[][];
  afterSamples: string[][];
}
