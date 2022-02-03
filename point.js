class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    distanceFrom(point){
        const xDif = point.x - this.x;
        const xDif2 = xDif * xDif;

        const yDif = point.y - this.y;
        const yDif2 = yDif * yDif;

        const sumDif2 = xDif2 + yDif2;
        const sqrtSumDif2 = Math.sqrt(sumDif2);
        return sqrtSumDif2;
    }

    distanceFromOrigin(){
        const origin = new Point(0,0);
        const thisPoint = new Point (this.x, this.y);
        const distance = MathC.calculateDistance(origin, thisPoint)
        return distance;
    }

    medianPointFromPoint(point){
        const xMed = (this.x + point.x) / 2;
        const yMed = (this.y + point.y) / 2;

        const puntoMedio = new Point(xMed, yMed)
        return puntoMedio;
    }

    nearestPoint(...points){
        let startingPoint = new Point(this.x, this.y);
        let nearest = points[0];

        for (let i = 0; i < points.length; i++) {
            const point = points[i];

            if (this.calculateDistance(startingPoint, point)< this.calculateDistance(startingPoint, nearest)) {
                nearest= point;
            }
        }
        return nearest;  
    }
}