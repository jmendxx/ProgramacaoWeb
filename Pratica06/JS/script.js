// URL base da API
const API = 'https://proweb.leoproti.com.br/alunos';

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ----- Elementos usados na página -----

const tbody = $('#alunos-table tbody'); // corpo da tabela de alunos
const loading = $('#loading'); // mostra o estado de carregamento
const message = $('#message'); // mostrar mensagens ao usuário


// ----- Funções auxiliares -----

// Alterna o indicador de 'loading'
function setLoading(on) {
    if (!loading) return;
    loading.style.display = on ? 'block' : 'none';
}

// Mostra uma mensagem curta ao usuário
function showMessage(text, type = 'success') {
    if (!message) return;
    message.textContent = text;
    message.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';
    message.style.display = 'block';
    setTimeout(() => { message.style.display = 'none'; }, 3000);
}

// Função para chamar a API e retornar um objeto com o resultado
async function callApi(path = '', opts = {}) {
    const res = await fetch(API + path, { mode: 'cors', headers: { 'Content-Type': 'application/json' }, ...opts });
    const txt = await res.text();
    try {
        return { ok: res.ok, status: res.status, data: txt ? JSON.parse(txt) : null };
    } catch (e) {
        return { ok: res.ok, status: res.status, data: txt };
    }
}

// ----- Carregar dados -----

// Busca os produtos na API e exibe na tabela
async function carregarAlunos() {
    setLoading(true);
    try {
        const r = await callApi('');
        if (r.ok && Array.isArray(r.data)) renderizar(r.data);
        else renderizar([]);
    } catch (e) {
        renderizar([
            { id: 1, nome: 'Juliana Mendes', turma: "Semi Presendial", curso: 'Engenharia', matricula: 12345 },
            { id: 2, nome: 'Thais Cardoso', turma: "Presensial", curso: 'Musica', matricula: 67890 }
        ]);
        showMessage('Modo offline: usando dados de exemplo', 'error');
    } finally {
        setLoading(false);
    }
}

// ----- Renderizar tabela -----

// Renderiza a tabela de alunos
function renderizar(alunos) {
    tbody.innerHTML = '';
    if (!alunos || alunos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted py-4">Nenhum aluno encontrado</td></tr>';
        return;
    }

    // Adiciona uma linha na tabela para cada aluno
    alunos.forEach(a => {
        const tr = document.createElement('tr'); 
        tr.innerHTML = `
            <td>${a.id}</td>
            <td>${a.nome}</td>
            <td>${a.turma}</td>
            <td>${a.curso}</td>
            <td>${a.matricula}</td>
            <td>
                <a class="btn btn-sm btn-primary" href="form.html?id=${a.id}">Editar</a>
                <button class="btn btn-sm btn-danger btn-delete" data-id="${a.id}" data-nome="${a.nome}">Excluir</button>
            </td>`;
        tbody.appendChild(tr);
    });

    // Adiciona evento de clique em todos os botões de excluir
    $$('.btn-delete').forEach(btn => btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const nome = btn.dataset.nome;
        // Confirma exclusão
        if (confirm(`Excluir "${nome}"?`)) excluirAluno(id);
    }));
}

// ----- Excluir aluno -----

// Exclui um aluno pelo ID
async function excluirAluno(id) {
    setLoading(true);
    try {
        const r = await callApi('/' + id, { method: 'DELETE' });
        if (r.ok) {
            showMessage('Aluno excluído', 'success');
            carregarAlunos();
        } else {
            showMessage('Erro ao excluir', 'error');
        }
    } catch (e) {
        showMessage('Erro de conexão', 'error');
    } finally {
        setLoading(false);
    }
}

// ----- Inicialização -----

// Carrega os alunos quando a página for carregada
window.addEventListener('DOMContentLoaded', carregarAlunos);


    
