### Sobre o projeto

Uma Api baseada no GymPass app.  
Projeto realizado no MBA Rocketseat Full-stack. (https://www.rocketseat.com.br)  
Conceitos de solid.

### Requisitos funcionais

- Se cadastrar
- Se autenticar
- Obter o perfil de um usuário logado
- Obter o número de check-ins realizados pelo usuario logado
- O usuário obter seu histórico de check-ins
- O usuário buscar academias próximas
- O usuário buscar academias pelo nome
- O usuário realizar check-in em uma academia
- Validar o check-in de um usuário
- Cadastrar uma academia

### Regras de negócio

- O usuário não deve poder se cadastrar com um e-mail duplicado
- O usuário não pode fazer 2 check-ins no mesmo dia
- O usuário não pode fazer check-in se não estiver perto de (100m) da academia
- O check-in só pode ser validado até 20 minutos após criado
- O Check-in só pode ser validado por administradores
- A academia só pode ser cadastrada por administradores

### Requisitos não-funcionais

- A senha do usuário precisa estar criptografada
- Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- Todas listas de dados precisam estar paginadas com 20 itens por página
- O usuário deve ser identificado por um JWT