import React, { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function PrivacyPolicy(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		scrollToTop();
	}, []);

	return (
		<>
			<div className="terms-paragraph">
				<Breadcrumbs aria-label="breadcrumb">
					<Link color="inherit" href="/">
						Home
					</Link>
					<Typography color="textPrimary">
						Política de privacidade
					</Typography>
				</Breadcrumbs>
				<h1>POLÍTICA DE PRIVACIDADE E SEGURANÇA DO PORTAL DA MMS</h1>
				<p>
					Bem-vindo ao Portal da <b>MMS</b> para cadastro de
					informações de prestadores e formação de Banco de Dados.
				</p>
				<p>
					Sabemos que seus dados pessoais são importantes e por isso
					vamos explicar como eles serão coletados, armazenados,
					tradados e administrados pela{" "}
					<b>
						MMS Intermediação de Serviços e Negócios em Geral Ltda
					</b>
					, inscrita no CNPJ/MF sob o nº 34.592.703/0001-78, com sede
					na Rua Bonnard, nº 980, Edifício 19, sala 07, Condomínio
					Green Valley, Alphaville, Barueri-SP, CEP 06465-134 (“MMS”).
				</p>
				<p>
					Ao acessar o site para se cadastrar e fazer parte do Banco
					de Dados da MMS, você confirma que aceita as práticas e
					políticas descritas nesta Política de Privacidade e
					Segurança.
				</p>
				<p>
					Esta Política de Privacidade e Segurança (“Política”),
					incorporada a nossos Termos e Condições de Uso, abrange o
					tratamento dos dados pessoais coletados pelo site da MMS.
				</p>
				<p>
					<b>
						Quaisquer expressões usadas e não definidas nesta
						Política têm as definições atribuídas a elas em nossos
						Termos.
					</b>
				</p>

				<h1>1. OBJETIVO DA POLITICA DE PRIVACIDADE E SEGURANÇA</h1>
				<p>
					A presente Política tem como objetivo (i) permitir que você,
					Usuário do site, compreenda quais os dados pessoais são
					recolhidos, as razões pelas quais os dados pessoais são
					recolhidos e utilizados, e com quem os dados pessoais são
					compartilhados; e (ii) explicar ao Usuário quais são os seus
					direitos em relação aos dados pessoais que a MMS trata.
				</p>
				<p>
					Por meio desta Política, você conseguirá entender de forma
					fácil, clara e transparente a importância das suas
					informações e, principalmente, sobre como coletamos,
					utilizamos, armazenamos, protegemos e registramos, tudo em
					conformidade com a legislação em vigor no Brasil.
				</p>
				<p>
					Todas as perguntas, solicitações ou notificações sobre esta
					Política podem ser enviadas para contato@mms.com.vc ou
					conforme indicado no site.
				</p>
				<p>
					Caso o Usuário não concorde com o conteúdo da presente
					Política de Privacidade, destacamos que é absolutamente
					livre para decidir não seguir com o cadastro de seus dados
					ou, caso já faça parte do Banco de Dados, poderá solicitar
					sua exclusão.
				</p>

				<h1>2. QUAIS INFORMAÇÕES COLETAMOS</h1>
				<p>
					A Política de Privacidade foi elaborada visando consolidar
					nosso compromisso com a privacidade e a segurança das
					informações de nossos Usuários. Entendemos que vocês
					precisam de informações claras e transparentes sobre o
					tratamento das informações pessoais que são passadas ao se
					cadastrarem no site. Assim, indicamos abaixo quais
					informações são coletadas quando você acessar nosso site e
					se cadastrar para fazer parte do nosso Banco de Dados.
				</p>
				<p>
					a. Informações do Perfil: as informações em seu perfil têm o
					propósito de ajudar a MMS a confirmar a sua identidade e/ou
					dados sua empresa. Além das informações básicas que são
					exigidas no ato do cadastramento (tais como: nome, documento
					oficial de identificação, e-mail, informações de contato,
					endereço, código postal, área de atuação), você tem a opção
					de fornecer informações adicionais para ajudar a MSS a saber
					mais sobre você, sua empresa e as suas atividades. Cabe
					exclusivamente ao Usuário manter as informações de seu
					perfil corretas e atualizadas.
				</p>
				<p>
					b. Informações coletadas durante o uso do site: Quando você
					usar o site, nós armazenaremos: (i) detalhes de como você
					interagiu com nossa interface, tal como suas perguntas de
					busca e sua navegação; (ii) informações sobre eventos
					relacionados a aparelhos eletrônicos, tais como atividade do
					sistema e quedas de sistema.
				</p>
				<p>
					c. Cookies e outros rastreadores: poderemos usar cookies,
					pixels, arquivos web log, identificadores anônimos, imagens
					(tais como GIF, PNG e JPEG), e outras tecnologias correlatas
					para rastrear o uso e tendências, melhorar a qualidade do
					site, customizar sua experiência, e melhorar a administração
					de conteúdo. Um cookie é um arquivo minúsculo que reside em
					seu computador, celular ou outro aparelho, e que nos permite
					reconhecer você como Usuário. Você poderá regular o seu
					navegador para bloquear cookies, ou para indicar quando um
					cookie estiver sendo enviado por nós.
				</p>
				<p>
					d. Seus aparelhos: nós podemos juntar informações sobre seus
					equipamentos de hardware (incluindo seu celular), tais como
					o endereço de protocolo de internet (IP), modelo de
					hardware, versão do sistema operacional, identificador único
					de aparelho, e o nome de sua operadora de celular.
				</p>
				<p>
					e. Comunicações e pesquisas: Também coletaremos informações
					quando você se comunicar conosco, através dos e-mails que
					nos enviar, trocas através do site ou trocas através das
					mídias sociais. Se pedirmos para você dar sua opinião
					respondendo a uma pesquisa, coletaremos quaisquer
					informações que você decidir fornecer ao responder a
					pesquisa
				</p>

				<h1>3. COMO TRATAMOS SEUS DADOS PESSOAIS</h1>
				<p>
					Importante que o Usuário saiba que, ao se cadastrar pelo
					site, os seus dados cadastrais e/ou da sua empresa irão
					compor o Banco de Dados da MMS juntamente com os dados de
					outros parceiros, sem exclusividade ou promessa de parceira.
				</p>
				<p>
					Consideramos a necessidade de informar aos Usuários do site{" "}
					<u>que a MMS:</u>
				</p>
				<p>
					a. não vende, não cede e não fornece os seus dados pessoais
					para quaisquer terceiros com a finalidade de propaganda ou
					marketing.
				</p>
				<p>
					b. utiliza as informações e dados fornecidos pelo Usuário,
					quando do cadastro no site, para formação de um Banco de
					Dados de potenciais parceiros, podendo realizar estudos e
					pesquisas, bem como verificar a veracidade das informações
					fornecidas.
				</p>
				<p>
					c. poderá enviar comunicações aos Usuários, seja por email
					ou outros canais digitais, inclusive SMS, WhatsApp ou outras
					formas de telecomunicação. Ao aceitar a presente Política de
					Privacidade, você concorda em receber tais comunicações.
				</p>
				<p>
					d. poderá compartilhar seus dados e informações pessoais com
					parceiros estratégicos ou empresas coligadas, com o fim de,
					incluindo, mas não se limitando: processar as informações,
					administrar e analisar os dados e informações, inclusive a
					veracidade das informações fornecidas pelo Usuário,
					processos de autoria interna, condução de pesquisas. As
					informações que compartilhamos com esses parceiros são
					apenas as estritamente necessárias à prestação de seus
					respectivos serviços. Essas empresas são obrigadas a
					proteger as suas informações de acordo com esta Política de
					Privacidade.
				</p>
				<p>
					e. não aceita o cadastramento no site por menores de 18 anos
					de idade, em hipótese alguma e, em sendo identificado o
					descumprimento desta regra, o Usuário terá seu cadastro
					removido do Banco de Dados, podendo inclusive ser impedido
					futuramente de cadastrar-se no site.
				</p>
				<p>
					f. não revela seus dados pessoais e / ou informações sobre
					suas atividades com o Usuário exceto: (i) quando exigido por
					lei, regulamento, intimação ou similar, ou procedimento
					legal ou pedido judicial ou governamental; (ii) se a
					revelação for necessária para investigar e nos defender
					contra quaisquer reclamações ou alegações do Usuário ou de
					terceiros; (iii) para proteger a MMS, o site, a segurança de
					outras pessoas, e para investigar eventuais fraudes; e (iv)
					se exigido por agencia governamental
				</p>
				<p>
					g. poderá reter os dados do Usuário enquanto a sua
					respectiva conta estiver ativa. Para além disso, poderemos
					guardar os dados que se façam necessários para: (i) cumprir
					com todas as nossas obrigações legais e regulatórias; e (ii)
					viabilizar a nossa defesa em quaisquer disputas, de cunho
					judicial ou administrativo.
				</p>
				<p>
					h. poderá decidir adquirir ou vender ativos e compartilhar
					e/ou transferir dados dos Usuários. Além disso, se formos
					adquiridos (ou nossos ativos), ou se encerrarmos nosso
					negócio, requerermos falência ou passarmos por outra mudança
					de controle, seus Dados Pessoais poderiam ser um dos ativos
					transferidos ou adquiridos por um terceiro.
				</p>

				<h1>4. DIREITOS E PREFERÊNCIAS DO USUÁRIO</h1>
				<p>
					Os Usuários do site têm os seguintes direitos, sem prejuízo
					de outros que estejam previstos neste documento, ou na
					legislação aplicável:
				</p>
				<ul>
					<li>
						<b>Direito de acesso</b> – o direito de solicitar o
						acesso aos dados pessoais do próprio Usuário que são
						tratados pela MMS;
					</li>
					<li>
						<b>Direito de retificação</b> – o direito de solicitar a
						alteração ou atualização dos dados pessoais do Usuário
						sempre que estiverem incorretos, defasados ou
						incompletos;
					</li>
					<li>
						<b>Direito à eliminação</b> – o direito de solicitar o
						apagamento dos dados pessoais do Usuário, sendo certo
						que, em determinadas situações, o apagamento dos dados
						estará sujeito à avaliação da MMS, nos termos da
						legislação de Proteção de Dados em vigor;
					</li>
					<li>
						<b>Direito de oposição</b> – o direito de se opor ao
						processamento dos dados pessoais do Usuário para
						finalidades / por motivos específicos;
					</li>
					<li>
						<b>Direito à portabilidade de dados</b> – o direito de
						solicitar uma cópia dos seus dados pessoais em formato
						eletrônico genérico, para que sejam utilizados em
						serviços de terceiros; e
					</li>
					<li>
						<b>
							Direito de não estar sujeito a decisões
							automatizadas
						</b>{" "}
						– o direito de solicitar a revisão, por um ser humano,
						de eventual decisão automatizada.
					</li>
				</ul>
				<p>
					Em caso de dúvidas acerca dos seus direitos, ou da forma
					como exercê-los, o Usuário deverá nos contatar mediante o
					endereço{" "}
					<a href={"mailto:contato@mms.com.vc"}>contato@mms.com.vc</a>
					.
				</p>
				<p>
					A MMS envidará todos os seus esforços no sentido de
					responder ao Usuário dentro de um período de tempo razoável,
					após a verificação da identidade do Usuário.
				</p>

				<h1>5. EXATIDÃO DE INFORMAÇÕES</h1>
				<p>
					Nós procuramos tornar fácil para o Usuário manter as suas
					informações e/ou de sua empresa, bem como seus dados
					pessoais, completas, precisas e atualizadas. O Usuário pode
					ajudar a assegurar que as suas informações de contato,
					preferências, serviços, área de atuação estejam precisas,
					completas e atualizadas ao entrar em sua conta e alterar
					seus ajustes. Você não poderá administrar sozinho algumas
					informações pessoais (como por exemplo alterar o seu nome de
					Usuário). Nesses casos, você poderá solicitar que nós
					corrijamos os seus dados, mediante envio de e-mail para{" "}
					<a href={"mailto:contato@mms.com.vc"}>contato@mms.com.vc</a>
					.
				</p>
				<p>
					Podemos nos recusar a processar solicitações que prejudiquem
					a privacidade de outros, que violem a lei, ou que afetem a
					segurança do site. Responderemos à sua solicitação em até 30
					(trinta) dias.
				</p>

				<h1>6. SEGURANÇA</h1>
				<p>
					A segurança de todos os dados pessoais é importante para a
					MMS. Quando você for solicitado a prestar qualquer
					informação que possa ser reputada sensível, em qualquer
					local do site, encriptaremos a transmissão dessa informação
					utilizando tecnologia secure socket layer (SSL) através de
					HTTPS com certificado digital, ou qualquer inovação que
					venha a ser colocada à nossa disposição.
				</p>
				<p>
					Seguimos standards de mercado para proteger todos os dados
					pessoais dos Usuários.
				</p>
				<p>
					Se você tiver qualquer questão sobre segurança do site,
					contate-nos através de{" "}
					<a href={"mailto:contato@mms.com.vc"}>contato@mms.com.vc</a>
					.
				</p>

				<h1>
					7. ALTERAÇÕES A ESTA POLÍTICA DE PRIVACIDADE E SEGURANÇA
				</h1>
				<p>
					A MMS poderá atualizar esta Política de Privacidade a
					qualquer momento e a seu exclusivo critério, a fim de
					refletir quaisquer alterações relevantes na legislação ou em
					nossas práticas.
				</p>
				<p>
					As versões atualizadas desta Política estarão disponíveis no
					Portal da MMS, portanto, recomendamos ao Usuário que
					revisite periodicamente a Política de Privacidade,
					independentemente de qualquer aviso.
				</p>

				<h1>8. FORO</h1>
				<p>
					Fica eleito o Foro da Comarca de Barueri, no Estado de São
					Paulo para dirimir as questões decorrentes deste termo.
				</p>

				<h1>9. CONTATO</h1>
				<p>
					Para entrar em contato conosco, você poderá preencher o
					Formulário <b>FALE CONOSCO</b> no nosso site ou encaminhar
					email para{" "}
					<a href={"mailto:contato@mms.com.vc"}>contato@mms.com.vc</a>
					.
				</p>
			</div>
			<ScrollToTop />
			<Footer />
		</>
	);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
}

export default PrivacyPolicy;
