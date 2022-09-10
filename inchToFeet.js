function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var height = [288, 300, 156, 164];
for(var i = 0; i<height.length; i++){
    var hightInFeet = inchToFeet(height[i]);
    console.log(hightInFeet);
}