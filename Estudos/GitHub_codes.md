# 📦 Git Commands

## 🔍 Verificar o estado do repositório
- `git status` → Mostra alterações no diretório de trabalho.

## ➕ Adicionar mudanças
- `git add .` → Adiciona todas as mudanças.
- `git add nome-do-arquivo` → Adiciona um arquivo específico.

## 💬 Criar um commit
- `git commit -m "mensagem"` → Cria um commit com uma mensagem.

## ⬆️ Enviar para o repositório remoto
- `git push` → Envia os commits para o repositório remoto.
- `git push origin nome-da-branch` → Envia para uma branch específica.

## ⬇️ Baixar mudanças do repositório remoto
- `git pull` → Baixa e mescla mudanças.
- `git fetch` → Baixa atualizações sem mesclar.

## 🌱 Trabalhar com branches
- `git branch` → Lista branches locais.
- `git branch nome-da-branch` → Cria uma nova branch.
- `git checkout nome-da-branch` → Troca para uma branch existente.
- `git checkout -b nome-da-branch` → Cria e troca para uma nova branch.
- `git merge nome-da-branch` → Mescla outra branch na atual.
- `git branch -d nome-da-branch` → Deleta uma branch local.

## 🔄 Resetar ou reverter mudanças
- `git reset` → Remove arquivos da staging area.
- `git reset --hard` → Reseta para o último commit, descartando mudanças.
- `git revert hash-do-commit` → Desfaz um commit criando outro que o anula.

## 📁 Inicializar e clonar repositórios
- `git init` → Inicializa um novo repositório Git.
- `git clone url-do-repositório` → Clona um repositório remoto.

---

> ✅ **Dica:** Use `git log` para ver o histórico de commits.
