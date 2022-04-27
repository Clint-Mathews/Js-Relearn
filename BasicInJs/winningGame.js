let data = prompt("Guess the number: ");
if(data > 0){
    if(data > 100){
    alert(typeof data + "Great");

    } else{
    alert(typeof data + "Oddikow");

    }

} else {
    alert(typeof data + "Zero is bad");
}

// data == 0 ? data > 100 ? alert(typeof data + "Great"): alert(typeof data + "Oddikow") : alert(typeof data + "Zero is bad");