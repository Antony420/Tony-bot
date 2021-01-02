const menuadmin = (prefix) => {
	return `> * Comandos do Grupo * <
comando: * $ { prefix } add *
desc: adicionar membro ao grupo
uso: * $ { prefix } add 62813xxxxx * \n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin!\n
comando: * $ { prefix } kick *
desc: expulsar membros do grupo
uso: * $ { prefix } kick @ tagmember * \n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \n
comando: * $ { prefix } promova *
desc: tornar o membro do grupo como administrador do grupo
uso: * $ { prefix } promova @ tagmember * \n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \n
comando: * $ { prefix } rebaixar *
desc: tornar o administrador do grupo como membro do grupo
uso: * $ { prefix } rebaixar @ tagmember * \n
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \n
comando: * $ { prefix } grupo de links *
desc: pegue o link do grupo
uso: basta enviar o comando
observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \n
comando: * $ { prefix } tagall *desc: marca todos os membros do grupo, incluindo administradores também
uso: basta enviar o comando
des: este comando pode ser usado se você for um administrador de grupo \n
comando: * $ { prefix } simih *desc: ativa o modo simi no grupo
uso: * $ { prefix } simih 1 * para ativar o modo simi e * $ { prefix } simih 0 * para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo \n`
}

exports.menuadmin = menuadmin
