function cone(radius, height) {

    const pi = Math.PI
    let squaredRadius = Math.pow(radius , 2);


    let volume = pi / 3 * squaredRadius * height;
    let salantHeight = Math.sqrt(squaredRadius + Math.pow(height, 2));
    let lateralSurface = pi * radius * salantHeight;
    let baseSurface = pi * squaredRadius;
    let totalSurface = lateralSurface + baseSurface;

    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`)

    
}

cone(3,5)