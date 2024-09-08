const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');
const openChatBtn = document.getElementById('open-chat-btn');
const encontreAjudaBtn = document.getElementById('encontre-ajuda-btn');
const opcao1 = document.getElementById('opcao1');
const opcao2 = document.getElementById('opcao2');
const opcao3 = document.getElementById('opcao3');

openChatBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

modalContainer.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});


encontreAjudaBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

opcao1.addEventListener('click', () => {
  const resposta = "Aqui estão algumas dicas para aliviar a ansiedade: \n\n* Respire fundo e devagar\n* Faça exercícios físicos\n* Pratique a meditação\n* Evite o álcool e o tabaco";
  const chatBody = document.querySelector('.card-body');
  const novaMensagem = document.createElement('div');
  novaMensagem.innerHTML = `
    <div class="d-flex flex-row justify-content-end">
      <div>
        <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">${resposta}</p>
      </div>
    </div>
  `;
  chatBody.appendChild(novaMensagem);
});

opcao2.addEventListener('click', () => {
  window.open('https://cvv.org.br/', '_blank');
  const resposta = "Você foi redirecionado para o CVV. ";
  const link = document.createElement('a');
  link.href = 'https://cvv.org.br/';
  link.target = '_blank';
  link.textContent = 'Clique aqui para acessar';
  const chatBody = document.querySelector('.card-body');
  const novaMensagem = document.createElement('div');
  novaMensagem.innerHTML = `
    <div class="d-flex flex-row justify-content-end">
      <div>
        <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">${resposta}</p>
        ${link.outerHTML}
      </div>
    </div>
  `;
  chatBody.appendChild(novaMensagem);
});

opcao3.addEventListener('click', () => {
  const resposta = "Aqui estão algumas dicas para identificar familiares tristes: \n\n* Observe mudanças no comportamento\n* Faça perguntas abertas\n* Ofereça apoio emocional";
  const chatBody = document.querySelector('.card-body');
  const novaMensagem = document.createElement('div');
  novaMensagem.innerHTML = `
    <div class="d-flex flex-row justify-content-end">
      <div>
        <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">${resposta}</p>
      </div>
    </div>
  `;
  chatBody.appendChild(novaMensagem);
});