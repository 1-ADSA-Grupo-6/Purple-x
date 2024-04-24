function Resultado(){
    // const porcentagem = 0.16;
    const matriculados = Number(matriculados_input.value);
    const mensalidade = Number(mensalidade_input.value);



    // const ganhoSemProjetoMensal = matriculados * mensalidade;
    // const ganhoSemProjetoAnual = ganhoSemProjeto * 12;
    // const porcentagemLucroMensal = (ganhoSemProjetoMensal * 16) / 100;
    // const ganhoMensalComProjeto = (ganhoSemProjetoAnual + porcentagemLucroMensal) * 12;

    const totalAnualSemProjeto = (matriculados * mensalidade) * 12;
    const perdaSemProjetoAnual = (totalAnualSemProjeto * 16) /  100;
    const totalMensalPerda = perdaSemProjetoAnual / 12;
    const totalAnualComProjeto = totalAnualSemProjeto + perdaSemProjetoAnual;

    // console.log(totalAnualSemProjeto);
    // console.log(perdaSemProjeto);
    // console.log(totalAnualComProjeto);

    exibir.innerHTML = `Sem a implementação do projeto PurpleX, sua empresa está perdendo uma média mensal de R$${totalMensalPerda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, 
    o que totaliza uma perda anual de $${perdaSemProjetoAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. No entanto, com a execução do nosso projeto, você pode reduzir a evasão 
    de matrículas decorrente da superlotação em 16%, resultando em um lucro total de $${totalAnualComProjeto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} por ano. 
    Não deixe que essas oportunidades escapem por entre os dedos. Investir no projeto PurpleX é investir 
    no crescimento sustentável e no sucesso futuro da sua empresa.`

    // exibir.innerHTML = `Sem o projeto PurpleX você tem um lucro de ${ganhoSemProjeto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} ao ano <br>
    // Com o nosso projeto você terá um aumento de 16% (${porcentagemLucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}) no seu lucro, pois diminuirá a evasão de matriculas pela superlotação, 
    // tendo seu lucro em ${ganhoMensalComProjeto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} ao ano`;
    
    // const evasão_retenção_mensal = matriculados * porcentagem;
    // const ganhoAtualMensal = matriculados * mensalidade;
    // const matriculadosProjeto = matriculados + evasão_retenção_mensal;
    // const ganhoMensalComProjeto = matriculadosProjeto * mensalidade;
    
    // exibir.innerHTML = `Sua academia tem ${matriculados} de matriculados, 
    // sendo a mensalidade paga por cada um de R$${mensalidade.toFixed(2)}, 
    // assim seu ganho mensal é de R$${ganhoAtualMensal.toFixed(2)} sem o projeto <b>PurpleX</b>, 
    // Com o projeto essa quantidade de matriculados aumentaria aproximandamente para ${matriculadosProjeto} 
    // e consequentemento o seu ganho para aproximadamente <b>R$${ganhoMensalComProjeto.toFixed(2)}</b>`
}