export type Tier = "S" | "A" | "B" | "C" | "D";
export type GameCardType = {
    id: number;
    name: string;
    slug: string;
    studio: string;
    releaseDate: string;
    note: Tier;
}

