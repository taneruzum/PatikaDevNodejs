const Pi = Math.PI;

const circleArea = (r) => {
    //pi*r*r

    const area = Pi * Math.pow(r, 2);
    return (console.log("Dairenin alanı: ", area));
}

const circleCircumference = (r) => {
    //2*pi*r

    const perimeter = 2 * Pi * r;
    return (console.log("Dairenin çevresi: ", perimeter));
}

export {
    circleArea,
    circleCircumference
}