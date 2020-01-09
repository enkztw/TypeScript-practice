interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '1',
    color: 'red',
    size: {
        width: 100,
        height: 20
    }
}

const rect2: Rect = {
    id: '2',
    size: {
        width: 120,
        height: 40
    }
}

rect2.color = 'blue';


