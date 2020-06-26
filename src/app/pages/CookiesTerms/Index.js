import React, { useEffect } from "react";

import Footer from "../../components/Footer/Footer";

function CookiesTerms(props) {

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    document.getElementById("background").style.display = "none";
    document.getElementById("quadrados").style.display = "none";
    document.getElementById("toolbar_container").style.position = "fixed";

    scrollToTop();

  }, []);

  return (
    <>
      <div className="terms-paragraph">
        <h1>POLÍTICA DE COOKIES</h1>
        <p>Esta política de cookies, tem como objetivo descrever as práticas que seguimos para respeitar a privacidade de todos os visitantes do nosso site. Nessa política, as informações pessoais significam dados relacionados a um indivíduo e que identificam esse indivíduo, direta ou indiretamente, como seu nome ou suas informações de contato.</p>
        <p>Nosso site usa cookies para melhorar o desempenho e aprimorar a sua experiência de navegação. Certas áreas do site MMS também usam cookies para entender mais sobre você, para que possamos oferecer uma experiência de navegação mais personalizada.</p>
        <p>Ao utilizar o nosso website e a permitir o uso de cookies, o visitante consente com o nosso uso de cookies de acordo com esta Política de Cookies e com a nossa Política de Privacidade e Segurança. </p>
        <p>Caso não concorde com o nosso uso de cookies, deverá ajustar as definições do seu browser de acordo com as suas preferências, desativando os nossos cookies ou simplesmente não utilizando o nosso website. Caso desative os cookies que utilizamos, isso poderá ter impacto na sua experiência como utilizador enquanto permanecer no nosso website.</p>
        <p>A MMS irá apenas coletar, utilizar ou divulgar os seus dados pessoais nos casos em que lhe seja lícito fazê-lo, ao abrigo e no estrito cumprimento da lei vigente. </p>
        <p>Para uma compreensão mais detalhada sobre a nossa utilização dos dados pessoais recolhidos por cookies, por favor consulte o nossa Política de Privacidade e Segurança. </p>
        <p><b>Importante: Você poderá visitar nossos sites e recusar o uso de cookies a qualquer momento em seu computador.</b></p>
        <h1>O QUE É UM COOKIE?</h1>
        <p>Um cookie, pixel, arquivo web log, identificadores anônimos, imagens e outras tecnologias correlatas, é utilizada para rastrear o uso e tendências, melhorar a qualidade do site, customizar sua experiência, e melhorar a administração de conteúdo. Um cookie é um arquivo minúsculo que reside em seu computador, celular ou outro aparelho, e que nos permite reconhecer você como Usuário. Você poderá regular o seu navegador para bloquear cookies, ou para indicar quando um cookie estiver sendo enviado por nós.</p>
        <p>Um Cookie é atribuído individualmente; ele não pode ser usado para executar programas, tampouco infectar telefone móvel ou computadores com códigos maliciosos de qualquer espécie, tais como vírus, trojans etc.</p>
        <h1>PARA QUAL FINALIDADE UTILIZAMOS UM COOKIE</h1>
        <p>Utilizamos cookies para tornar o website MMS de utilização mais fácil, para fornecer ao visitante uma experiência personalizada enquanto explora os mesmos, e para uma melhor personalização dos nossos produtos, serviços e websites de acordo com os seus interesses e necessidades. Os cookies são utilizados para ajudar a agilizar as suas atividades futuras e a sua experiência em nosso site.</p>
        <p>Os cookies que você autoriza são também utilizados para coletar os seus dados pessoais, que são posteriormente agrupados em perfis, para rastrear o uso e tendências, melhorar a qualidade do site, customizar sua experiência, e melhorar a administração de conteúdo.</p>
        <p>Também utilizamos cookies para compilar estatísticas anônimas e agregadas, que nos permitem compreender como as pessoas utilizam o nosso site, o que nos ajuda a melhorar as suas estruturas e conteúdo.</p>
        <h1>COMO VOCÊ DESABILITA OS COOKIES?</h1>
        <p>O visitante pode desabilitar os cookies no seu navegador, mas esteja ciente de que, se você desabilitar os "cookies", não poderá experimentar completamente alguns dos nossos sites. Por exemplo, você não poderá se beneficiar do login automático e de outros recursos de personalização do site.</p>
        <p>Se você não deseja receber um cookie do nosso site, você tem várias opções, como optar por não os receber ou desativando aqueles que teriam sido instalados no seu terminal. Você pode fazer a escolha a qualquer momento para expressar e modificar seus desejos com relação aos cookies.</p>
        <p>Por fim, em resumo, você pode:</p>
        <ul>
          <li>recusar o seu consentimento;</li>
          <li>desativar os cookies MMS ou de terceiros utilizando as definições do seu browser.</li>
        </ul>
        <h1>CONTROLE ATRAVÉS DAS DEFINIÇÕES DO SEU BROWSER</h1>
        <p>De fato, se a maioria dos navegadores é configurada por padrão e aceita a instalação de cookies. No entanto, você tem a opção, se desejar, de aceitar todos os cookies ou optar por não os receber sistematicamente. Lembre-se de que você não deve esquecer de configurar todos os navegadores de seus terminais diferentes (tablets, smartphones, computadores, etc.).</p>
        <p>Caso não queira que o nosso website guarde cookies no seu dispositivo, deverá alterar as definições do seu browser. Pode também retirar o seu consentimento relativo aos cookies apagando aqueles que estejam já guardados.</p>
        <p>Os procedimentos para alterar as suas definições e cookies diferem de browser para browser. Se necessário, utilize a função de ajuda do seu browser ou carregue em um dos seguintes links para ir diretamente para o manual do utilizador do seu browser.</p>
        <ul>
          <li>Internet Explorer</li>
          <li>Mozilla Firefox</li>
          <li>Google Chrome</li>
          <li>Safari</li>
          <li>Opera</li>
        </ul>
        <p>Em todo o caso, alertamos para o fato de que a desativação dos cookies que utilizamos pode causar impacto na sua experiência no site da MMS.</p>
        <h1>QUE COOKIES USAMOS?</h1>
        <p>Mais especificamente, usamos cookies e outras tecnologias para os seguintes fins:</p>
        <ul>
          <li>Ajudar você na navegação:</li>
          <li>Auxiliar no registro de nossos eventos, login e sua capacidade de fornecer feedback;</li>
          <li>Medir o uso do site (estatísticas e player de vídeo);</li>
          <li>Facilitar o compartilhamento em redes sociais;</li>
          <li>Ajudar com nossos esforços para fornecer conteúdo que seja mais relevante para você e seus interesses.</li>
        </ul>
        <p>Os cookies utilizados pelo Site MMS executam quatro funções, conforme abaixo:</p>
        <ul>
          <li>Cookies Essenciais/Estritamente Necessários</li>
          <li>Cookies de Desempenho</li>
          <li>Cookies Funcionais</li>
        </ul>
        <h2>Cookies Essenciais/Estritamente Necessários</h2>
        <p>Alguns cookies que usamos são essenciais para o funcionamento do nosso site. Eles geralmente são definidos apenas em resposta a ações feitas por você, o que equivale a uma solicitação, como definir suas preferências de privacidade, efetuar login ou preencher formulários. Você pode configurar seu navegador para bloqueá-los ou alertá-lo sobre esses cookies, mas algumas partes do site podem não funcionar.</p>
        <h2> Cookies de Desempenho</h2>
        <p>Alguns cookies nos ajudam com o desempenho e design do nosso site. Isso nos permite medir quantas vezes uma página foi visitada e saber quais páginas são as mais e menos populares e ver como os visitantes se movimentam pelo site. Todas as informações que esses cookies coletam são anônimas. Se você não permitir esses cookies, não saberemos quando você visitou nosso site.</p>
        <h2>Cookies Funcionais</h2>
        <p>Alguns cookies nos ajudam a lembrar de suas configurações que você pode ter selecionado, ou ajudam com outras funcionalidades quando você navega e usa o site MMS. Isso nos ajuda a lembrar o que você selecionou, então, quando você retorna, nos lembramos de suas preferências.</p>
        <p>Esses cookies permitem o fornecimento de funcionalidade e personalização aprimoradas. Eles podem ser definidos por nós ou por provedores terceiros cujos serviços adicionamos às nossas páginas. Se você não permitir esses cookies, algumas ou todas essas funcionalidades podem não funcionar corretamente.</p>
        <p>Caso necessite de mais informações sobre nossos fornecedores e como esses cookies operam, entre em contato conosco enviando um e-mail para o seguinte endereço de e-mail: <a href="mailto:contato@mms.com.vc">contato@mms.com.vc.</a></p>
        <h1>ALTERAÇÕES A ESTA POLÍTICA DE COOKIES</h1>
        <p>A <b>MMS Intermediação de Serviços e Negócios em Geral Ltda</b> (“MMS”) pode alterar esta declaração de política de cookies conforme necessário. Se forem feitas alterações na política, observe que pode levar até 30 dias úteis para que novas práticas de privacidade sejam implementadas. Verifique esta página periodicamente se você quiser monitorar as alterações.</p>
        <h1>ENTRE EM CONTATO</h1>
        <p>Se você tiver dúvidas ou não achar que suas preocupações foram tratadas nesta Política de cookies, entre em contato enviando um e-mail para o seguinte endereço de e-mail: <a href="mailto:contato@mms.com.vc">contato@mms.com.vc.</a></p>
      </div>
      <Footer />
    </>
  );

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

}

export default CookiesTerms;
