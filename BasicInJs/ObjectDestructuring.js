// Object destructuring

const obj = {
    bandName: "Clint's Band",
    Song: "Album",
    year:1212
}

const song  = obj.Song;
console.log(song);

// Destructuring
const {bandName,Song, ...rest} = obj
console.log(bandName);
console.log(Song);
console.log(rest);

const {bandName:var1,Song:var2, ...var3} = obj
console.log(var1)
console.log(var2)
console.log(var3)
