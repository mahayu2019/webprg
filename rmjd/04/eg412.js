function myfunction(x) {
    var y = x;
    if (x > 50) {
        var y = 10;
        console.log("Inner y=" + y);
    }
    console.log("outer y=" + y);
}

myfunction()