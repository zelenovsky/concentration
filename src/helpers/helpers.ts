export const idsFactory = (): () => number => {
    let count = 0;
    return () => {
        count += 1;
        return count;
    }
};

export const randomChoice = (choices: any[]): any => {
    const rand = Math.random() * choices.length;
    const indexToRemove = Math.floor(rand);
    return choices.splice(indexToRemove, 1)[0];
};

export const shuffle = (arr: any[]): any[] => {
    const a = arr.slice();
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
};
