import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
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