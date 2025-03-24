import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAuSKTNAKTKUnbVZwiaAp_0oAZfxFajFio",
  authDomain: "loginbsfb.firebaseapp.com",
  projectId: "loginbsfb",
  storageBucket: "loginbsfb.firebasestorage.app",
  messagingSenderId: "591007489590",
  appId: "1:591007489590:web:1d718c2659d8f6771f4297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('floatingInput email').value;
    const senha = document.getElementById('floatingInput senha').value;

    cadastrarFuncionario(email, senha);
});

function cadastrarFuncionario(email, senha) {
    console.log('teste');

    const usersRef = ref(db, 'users');

    const newUserRef = push(usersRef);

    set(newUserRef, {
      email: email,
      senha: senha
    })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      document.getElementById('signup-form').reset();
    })
    .catch((error) => {
      console.error('Erro ao cadastrar usuário: ', error);
      alert('Erro ao cadastrar usuário. Tente novamente.');
    });
}