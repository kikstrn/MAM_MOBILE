import { Cover } from "./cover.model";

export class DataGame{
    data:Game[]
    next_route:string;
}

export class Game {
    _id:string;
    cover:Cover;
    name:string;
}