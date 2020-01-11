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

const rect3 = {} as Rect;
const rect4 = <Rect>{}

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '5',
    size: {
        width: 30,
        height: 15
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface iClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements iClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid red',
    marginTop: '2px',
    borderRadius: '5px',
}