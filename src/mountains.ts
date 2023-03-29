interface Mountain {
    name: string;
    height:number;
}

const mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height:20310},
];

export function findNameOfTallestMountain(arrayOfMountains: Mountain[]): string {
let highestMountain: Mountain = arrayOfMountains[0];

    for (let mountain of mountains){
        if (mountain.height > highestMountain.height){
            highestMountain = mountain;
        }
    }
    return highestMountain.name;
}

