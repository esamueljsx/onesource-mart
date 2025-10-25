

export function lerp(start: number, end: number, ease : number) {
    return start * (1 - (1/ease)) + end * (1/ease);
}

// Simple 2D vector interface for clarity
export interface vector2 {
    x: number;
    y: number;
}