const firebaseConfig = {
    apiKey: "AIzaSyB_vUf5yEuNF-njYld6H1w62Z6Rk5dmUbE",
    authDomain: "chatbg-69abb.firebaseapp.com",
    databaseURL: "https://chatbg-69abb-default-rtdb.firebaseio.com",
    projectId: "chatbg-69abb",
    storageBucket: "chatbg-69abb.appspot.com",
    messagingSenderId: "382236263082",
    appId: "1:382236263082:web:00e23a3e3f68d2408006d3",
    measurementId: "G-6155ZQKVB7"
};

firebase.initializeApp(firebaseConfig);
inicializar();
function inicializar() {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá " + nomeUsuario;
    getData();
}

function addSala() {
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);

    if (nomeSala) {
        firebase.database().ref('/').child(nomeSala).set({
        purpose: "sala criada"
    });
    carregarSala(nomeSala);

    }
}
function getData() {
    firebase.database().ref('/').on("value", snapshot => {
        let salas = [];
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            const html = '<div class="nomeSala" id="'
                + childKey
                + '" onclick="carregaSala(this.id)">#'
                + childKey
                + '</div>'
            salas.push(html);
        });
        document.getElementById("output").innerHTML = salas.join("");
        // const output = document.getElementById("output");
        // output.innerHTML = salas.join("");
    });
}

function carregarSala() {
    localStorage.setItem("nomeSala", sala);
    location = "chat.html";
}