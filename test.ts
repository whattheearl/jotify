//const res = await fetch("http://localhost:8080/discord", {
//    method: "POST",
//    body: JSON.stringify({ message: "Hello, jonathan.." }),
//});
//
//console.log(res.status);
//

const res = await fetch("http://localhost:8080/notifications", {
    method: "POST",
    body: JSON.stringify({ message: "Hello, jonathan.." }),
});

console.log(res.status);
