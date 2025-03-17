function turnOn() {
    fetch('http://192.168.1.100/cgi-bin/write?address=Y0&value=1')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            document.getElementById("status").innerText = "Bật";
        });
}

function turnOff() {
    fetch('http://192.168.1.100/cgi-bin/write?address=Y0&value=0')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            document.getElementById("status").innerText = "Tắt";
        });
}