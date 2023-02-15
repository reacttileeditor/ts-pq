export interface Node {
    x: number;
    y: number;
}
export declare type Tuple<T> = [T, number];
export declare class PriorityQueue<T extends Node> {
    heap: Tuple<T>[];
    constructor();
    insert(val: T, priority: number): [T, number][];
    has({ x, y }: T): boolean;
    get({ x, y }: T): T | undefined;
    shift(priority: boolean): T | [T, number] | undefined;
    pop(priority: boolean): T | [T, number] | undefined;
    priorities(): number[];
    values(): T[];
    size(): number;
    toArray(values: boolean): [T, number][] | T[];
}
