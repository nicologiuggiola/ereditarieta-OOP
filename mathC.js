// class MathC{
//     static calculateDistance(pointA, pointB){
//         const xDif = pointB.x - pointA.x;
//         const xDif2 = xDif * xDif;

//         const yDif = pointB.y - pointA.y;
//         const yDif2 = yDif * yDif;

//         const sumDif2 = xDif2 + yDif2;
//         const sqrtSumDif2 = Math.sqrt(sumDif2);
//         return sqrtSumDif2;
//     }
// }





// funzione "static medianPoint(c,d) => point"   x punto medio e y punto medio  xm=(xc+xd)/2    ym=(yc+yd)/   new point return 


class PuntoMedio{

static medianPoint(c,d){
const xMed = (c.x + d.x) / 2;
const yMed = (c.y + d.y) / 2;

const puntoMedio = new Point(xMed, yMed)
return puntoMedio;
}

}