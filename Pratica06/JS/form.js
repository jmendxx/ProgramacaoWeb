// ----- Configuração formulario -----

// URL base da API
const API = 'https://proweb.leoproti.com.br/alunos';


const $ = s => document.querySelector(s);

// ----- Referências aos campos do formulário -----

const idField = $('#aluno-id');         // input id 
const nomeField = $('#nome');           // input nome
const turmaField = $('#turma');         // input turma
const cursoField = $('#curso');         // input curso
const matriculaField = $('#matricula'); // input matricula
const form = $('#alunos-form');         // elemento <form>
const message = $('#message');          // área de mensagens (feedback)

// ----- Função para mostrar mensagens -----

function showMessage(text, type = 'success'){
  if(!message) return;
  message.textContent = text;
  message.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';
  message.style.display = 'block';
  setTimeout(()=> message.style.display = 'none', 3000);
}

// ----- Função para chamar a API -----

// Função para chamar a API e retornar um objeto com o resultado
async function callApi(path = '', opts = {}){
  const res = await fetch(API + path, { mode: 'cors', headers: { 'Content-Type': 'application/json' }, ...opts });
  const txt = await res.text();

  try {
    return { ok: res.ok, status: res.status, data: txt ? JSON.parse(txt) : null };
  } catch (e) {
    return { ok: res.ok, status: res.status, data: txt };
  }
}

// ----- Carregar dados para edição -----

// Carrega os dados do produto para edição
async function carregar(id){
  try{
    const r = await callApi('/' + id);
    if(r.ok && r.data){
      idField.value = r.data.id;
      nomeField.value = r.data.nome;
      turmaField.value = r.data.turma;
      cursoField.value = r.data.curso;
      matriculaField.value = r.data.matricula;
      const title = document.getElementById('form-title'); if(title) title.textContent = 'Editar Aluno';
    } else showMessage('Aluno não encontrado','error');
  }catch(e){
    // Erro de conexão (CORS ou rede)
    showMessage('Erro ao carregar aluno','error');
    console.error(e);
  }
}

// ----- Salvar dados do formulário -----

// Salva os dados do formulário (criação ou edição)
async function salvar(e){
  e.preventDefault();
  const aluno = { nome: nomeField.value.trim(), turma: turmaField.value.trim(), curso: cursoField.value.trim(), matricula: matriculaField.valueAsNumber };
  // Validação simples
  if(!aluno.nome || !aluno.turma || !aluno.curso || !aluno.matricula){ showMessage('Preencha os dados corretamente','error'); return; }
  try{
    if(idField.value){
      const r = await callApi('/' + idField.value, { method: 'PUT', body: JSON.stringify(aluno) });
      if(r.ok) {
        showMessage('Informações do aluno atualizado','success');
        setTimeout(()=> location.href = 'index.html', 700);
      } else showMessage('Erro ao atualizar','error');
    } else {
      const r = await callApi('', { method: 'POST', body: JSON.stringify(aluno) });
      if(r.ok) {
        showMessage('Aluno criado','success');
        setTimeout(()=> location.href = 'index.html', 700);
      } else showMessage('Erro ao criar','error');
    }
  }catch(e){
    showMessage('Erro de conexão','error');
    console.error(e);
  }
}

// ----- Eventos -----

// Evento de submit do formulário
form.addEventListener('submit', salvar);

// Carrega os dados se for edição
const params = new URLSearchParams(location.search);
if(params.has('id')) carregar(params.get('id'));