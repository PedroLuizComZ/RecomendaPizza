import React, { useEffect } from "react";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function TermsOfUse(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {}, []);

	return (
		<>
			<div className="terms-paragraph">
				<Breadcrumbs aria-label="breadcrumb">
					<Link color="inherit" href="/">
						Home
					</Link>
					<Typography color="textPrimary">
						Termos e Condições de Uso
					</Typography>
				</Breadcrumbs>
				<h1>
					<b>
						<u>TERMOS E CONDIÇÕES DE USO DO SITE MMS</u>
					</b>
				</h1>
				<p>
					Os Termos e Condições de Uso do site MMS (“Termo de Uso”),
					aplicam-se aos Usuários que utilizam a referida plataforma
					da{" "}
					<b>
						MMS Intermediação de Serviços e Negócios em Geral Ltda
					</b>
					, inscrita no CNPJ/MF sob o nº 34.592.703/0001-78, com sede
					na Rua Bonnard, nº 980, Edifício 19, sala 07, Condomínio
					Green Valley, Alphaville, Barueri-SP, CEP 06465-134
					(doravante designada “MMS”). Regula, ainda, o uso do Portal
					para cadastro de dados dos Usuários para formaçã de Banco de
					Dados, através do site www.mms.com.vc.
				</p>
				<p>
					Por este Termo de Uso, a MMS apresenta aos seus visitantes e
					Usuários em geral (todos em conjunto denominados “Usuários”)
					as condições essenciais para o uso do Portal.
				</p>
				<p>
					Ao navegar neste Portal, os Usuários declaram ter lido,
					compreendido, aceito e, com isso, se submetem às condições
					destes Termos de Uso que o regem, inclusive à Política de
					Privacidade, bem como todos os outros alertas, documentos e
					avisos, que possam aparecer vinculados a assuntos tratados
					no referido Termo de Uso.
				</p>
				<h1>INFORMAÇÕES GERAIS</h1>
				<h1>1. DEFINIÇÕES</h1>
				<ul>
					<li>
						<b>Cookies</b>: Arquivos enviados pelo servidor do site
						para o computador do Usuário, com a finalidade de
						identificar o computador e obter dados de acesso, como
						páginas navegadas ou links clicados, permitindo, desta
						forma, personalizar a utilização do site, de acordo com
						o seu perfil. Também podem ser utilizados para garantir
						uma maior segurança dos Usuários do Portal MMS.
					</li>
					<li>
						<b>Informações/Dados pessoais</b>: É toda e qualquer
						informação ou documento que permite, sozinho ou em
						conjunto identificar seus titulares, como por exemplo:
						nome/apelido, endereço, e-mail, cookies, localização,
						endereço de IP e diversos outros.{" "}
					</li>
					<li>
						<b>Maior de idade</b>: Pessoa física maior de dezoito
						(18) anos.
					</li>
					<li>
						<b>Mensagens de dados</b>: A informação gerada, enviada,
						recebida, armazenada ou comunicada por meios
						eletrônicos, óticos ou similares, como poderiam ser,
						entre outros, o Intercâmbio Eletrônico de Dados (EDI),
						Internet, o correio eletrônico, o telegrama, o telex e o
						telefax.
					</li>
					<li>
						<b>Publicidade</b>: É toda forma de comunicação
						realizada, com a finalidade de prestar informações sobre
						produtos e serviços, atividades comerciais e comunicar
						estratégias ou campanhas publicitárias ou de marketing;
						realizada como mecanismo de referência e não como oferta
						pública.
					</li>
					<li>
						<b>Janelas emergentes (Pop-Ups)</b>: Janela ou aviso da
						internet que emerge automaticamente em qualquer momento
						quando a Plataforma é utilizada, especialmente utilizado
						para a formalização do contrato de compra e venda entre
						Consumidores e Fornecedores.
					</li>
					<li>
						<b>Portal MMS</b>: Portal MMS de serviços na internet,
						operado por meio do domínio www.mms.com.vc;
					</li>
					<li>
						<b>Usuários</b>: todas as pessoas físicas ou jurídicas
						que visitam ou se cadastram no Portal MMS e recebem uma
						Conta de Acesso individual e exclusiva;
					</li>
					<li>
						<b>Parceiros</b>: todas as pessoas jurídicas que se
						cadastram no Portal MMS, fornece os dados e informações
						da sua empresa à MMS, a fim de comporem um Banco de
						Dados de potenciais parceiros, sem que esse cadastro
						implique em vínculo, exclusividade ou garantia de
						negócios;
					</li>
					<li>
						<b>Banco de Dados</b>: conjunto de arquivos e
						relacionados entre si com registos de informações sobre
						o Usuário e sua empresa, que se relacionam de forma a
						compor informações e dar maior eficiência durante uma
						pesquisa ou estudos.
					</li>
					<li>
						<b>Conta de Acesso</b>: credencial digital formada pela
						combinação de login e senha de acesso, única e
						intransferível para cada Usuário, que permite a
						inclusão, atualização ou alteração de informações pelo
						Usuário, sobre os seus serviços, área de atuação e
						outras;
					</li>
					<li>
						<b>Dados de acesso</b>: qualquer informação que possa
						ser usada para identificar o Usuário, as mensagens
						enviadas ou divulgadas, um ou mais Cookies que possam
						identificar o seu navegador ou a sua conta, informações
						gerais e específicas sobre o hardware do seu telefone
						móvel ou outro dispositivo, conexão à Internet, sistema
						operacional e número da versão utilizada;
					</li>
					<li>
						<b>
							Criptografia: nome dado ao processo de codificação
							de informações. As informações são codificadas
							(embaralhadas) na origem e decodificadas no destino,
							dificultando, dessa forma, que sejam decifradas
							durante o tráfego na internet.
						</b>
					</li>
					<li>
						<b>
							Firewall: nome dado ao dispositivo físico e/ou
							lógico de uma rede de computadores que tem por
							objetivo aplicar uma política de segurança a um
							determinado ponto de controle
						</b>{" "}
						da rede. Sua função consiste em regular o tráfego de
						dados entre redes distintas e impedir a transmissão e/ou
						recepção de acessos nocivos ou não autorizados de uma
						rede para outra.
					</li>
				</ul>
				<h1>2. FINALIDADE DO PORTAL MMS</h1>
				<p>
					<b>
						O Portal tem por objetivo, além de apresentar à MMS aos
						visitantes e potenciais parceiros, permitir que o
						Usuário realize seu cadastro ou de sua empresa para a
						formação de Banco de Dados de potenciais parceiros,
						podendo tal cadastramento gerar ou não negócios ao
						Usuário, não havendo garantia de celebração de parceria,
						exclusividade, vínculo ou serviços.
					</b>
				</p>
				<p>
					É extremamente importante que o Usuário tenha consciência
					que ao se cadastrar no Portal MMS os seus dados e/ou de sua
					empresa irão compor um Banco de Dados, com informações sobre
					geolocalização, atividades desenvolvidas/serviços, área de
					atuação entre outras, juntamente com informações de outros
					Usuários, sem que haja qualquer exclusividade, promessa ou
					expectativa de serviços, volume mínimo ou pagamento de
					quaisquer valores ou comissões.
				</p>
				<h1>3. QUEM PODE SE CADASTRAR NO SITE</h1>
				<p>
					Para realizar o cadastro no Portal MMS e fazer parte do
					Banco de Dados de potenciais parceiros da MMS são
					necessários alguns requisitos, ou seja, o Usuário precisa:
					(a) cadastrar-se e preencher as informações constantes no
					campo/formulário de cadastro disponível no site; (b) ter
					capacidade legal para contrair e assumir obrigações, ou
					seja, é exigida a idade mínima de 18 (dezoito) anos; (c) o
					Usuário que se cadastrar no PROTAL MMS utilizando-se de
					dados de terceiros, poderá incorrer em prática de crimes,
					sem prejuízo de eventual responsabilização em legisligação
					específica.
				</p>
				<h1>4. CADASTRO, LOGIN E SENHA DE ACESSO</h1>
				<p>
					Para que o Usuário possa concluir o cadastro, faz-se
					necessário o preenchimento informando o seu nome, email e
					número de telefone celular, sendo encaminhado em seguida um
					convite para o preenchimento completo do Cadastro do
					Usuário, ocasião em que deverá preencher todos os campos
					obrigatórios com informações exatas e verdadeiras,
					responsabilizando-se, inclusive, em atualizar as informações
					de cadastro sempre que ocorrer alguma alteração. O Usuário
					responde legalmente pela veracidade e autenticidade das
					informações prestadas, isentando a MMS de qualquer
					responsabilidade neste sentido.
				</p>
				<p>
					Caso a MMS constate qualquer inexatidão nas informações
					prestadas pelo Usuário ou sobre sua empresa, bem com
					ilegalidade em sua conduta, poderá, a seu exclusivo
					critério, suspender ou cancelar a correspondente conta de
					acesso. Tal medida, contudo, não cessa nem diminui a
					responsabilidade do Usuário quanto à exatidão e veracidade
					dos dados que fornecer, tampouco em relação aos danos que
					possa causar a sua conduta.
				</p>
				<p>
					Ao preencher o cadastro, o Usuário indicará o seu respectivo
					e-mail o qual será considerado <i>login</i> e senha de sua
					preferência.
				</p>
				<p>
					O cadastro do Usuário e sua senha são pessoais,
					intransferíveis e confidenciais, sendo vedado aos Usuários
					sua cessão, compartilhamento, venda ou qualquer outra forma
					de transferência, onerosa ou gratuita. A MMS poderá, a
					qualquer tempo, cancelar ou ainda recusar o cadastro de um
					Usuário, em casos de desconformidade com as regras e
					políticas destes Termos e Condições de Uso ou incorporadas a
					este por referência. Cadastro em duplicidade feitos por um
					mesmo Usuário também poderão ser cancelados.
				</p>
				<p>
					O Usuário será o único responsável por seu <i>login</i> e
					senha, respondendo por todos os atos praticados sob sua
					conta de acesso. Portanto, é dever do Usuário zelar pela
					guarda e confidencialidade de sua senha.
				</p>
				<p>
					O Usuário está ciente de que deverá comunicar a MMS, tão
					logo tenha ciência, em caso de extravio, roubo, perda,
					quebra de segurança ou qualquer uso não autorizado de sua
					conta de acesso.
				</p>
				<ul>
					<li>
						<b>
							<u>Importante</u>: A MMS não solicita senha de
							acesso aos Usuários por e-mail ou telefone. Da mesma
							forma não solicita informações financeiras dos
							Usuários por e-mail ou telefone.
						</b>
					</li>
					<li>
						<b>
							<u>Importante</u>: A MMS poderá modificar
							autonomamente e em qualquer momento os aspectos
							formais, procedimentais ou substanciais destes
							Termos e Condições de Uso, que serão atualizados e
							colocados à disposição dos Usuários no Portal MMS,
							sendo a última versão publicada aquela que regulará
							as relações comerciais que sejam geradas no momento
							em que a transação for realizada. Assim também,
							conta com plena autonomia para modificar os usos do
							Portal MMS, com o único dever de informar aos
							Usuários por um meio virtual que permita sua
							publicação e comunicação ao público.
						</b>
					</li>
				</ul>
				<h1>
					5. PRIVACIDADE DOS NOSSOS VISITANTES E USUÁRIOS E/OU
					CLIENTES
				</h1>
				<p>
					A MMS possui política expressa sobre Privacidade dos dados
					obtidos por meio do Portal. As informações de cadastro e
					demais informações sobre os Usuários estão sujeitas ao
					tratamento definido na referida Política de Segurança de
					Informações.
				</p>
				<p>
					Para maiores informações, solicitamos a consulta do
					documento “<b>Política de Privacidade e Segurança</b>”. Tal
					documento constitui parte integrante e indissociável dos
					Termos e Condições de Uso do Portal da MMS e deverá ser lido
					atentamente por todos os Usuários, sejam visitantes ou
					nossos Clientes.
				</p>
				<p>
					Na hipótese das disposições contidas nos{" "}
					<b>Termos e Condições de Uso</b> conflitarem com as
					disposições previstas na{" "}
					<b>Política de Privacidade e Segurança</b>, observar-se-á o
					disposto no documento que trate do tema com especificidade.
				</p>
				<h1>6. DIREITOS AUTORAIS E PROPRIEDADE INTELECTUAL</h1>
				<p>
					O uso comercial da expressão MMS como marca, nome
					empresarial ou nome de domínio, bem como os conteúdos das
					telas do Portal www.mms.com.vc, assim como os programas,
					bancos de dados, redes, arquivos que permitem ao Usuário ou
					visitante acessarem e utilizarem, por meio de sua conta de
					acesso, são de propriedade da MMS e estão protegidos pelas
					leis de direito autoral, marcas, patentes, modelos e
					desenhos industriais, sendo vedado o uso pelo Usuário, salvo
					mediante prévia autorização por escrito.
				</p>
				<p>
					Ao acessar a página da MMS, o Usuário declara que irá
					respeitar todos os direitos de propriedade intelectual e os
					decorrentes da proteção de marcas registradas da mesma, bem
					como de todos os direitos referentes a terceiros que
					porventura estejam, ou estiveram, de alguma forma,
					disponíveis no Portal. O simples acesso ao Portal não
					confere ao Usuário qualquer direito de uso dos nomes,
					títulos, palavras, frases, marcas, patentes, obras
					literárias, artísticas, lítero-musicais, imagens, vídeos,
					símbolos, entre outras, que nele estejam, ou estiveram,
					disponíveis.{" "}
					<b>
						A reprodução dos conteúdos descritos anteriormente está
						proibida, salvo mediante prévia autorização da MMS
					</b>
					.
				</p>
				<p>
					É permitido fazer somente o arquivo temporário, sendo vedada
					sua utilização para finalidades comerciais, publicitárias ou
					qualquer outra que contrarie a realidade para o qual foi
					concebido, conforme definido neste Termo. São igualmente
					proibidas a reprodução, distribuição, divulgação, adaptação,
					modificação, utilização, edição, disponibilização em
					qualquer meio de comunicação, etc., total ou parcial, dos
					textos, figuras, gráficos que compõem o presente Portal, sem
					prévia e expressa autorização da MMS, sendo permitida
					somente a impressão de cópias para uso e arquivo pessoal,
					sem que sejam separadas as partes que permitam dar o fiel e
					real entendimento de seu conteúdo e objetivo.
				</p>
				<p>
					Qualquer outro tipo de utilização de material autorizado,
					inclusive para fins editoriais, comerciais ou publicitários,
					só poderá ser feito mediante prévio e expresso consentimento
					da MMS. O visitante ou Usuário assume toda e qualquer
					responsabilidade pela utilização indevida das informações,
					textos, gráficos, marcas, obras, imagens, vídeos, enfim, de
					todo e qualquer direito de propriedade intelectual ou
					industrial do Portal, tanto de caráter civil quanto
					criminal.
				</p>
				<p>
					A autorização para utilização do material solicitado não
					poderá ser transferida a terceiros, mesmo que vinculados ao
					Usuário por alguma razão, salvo se mediante prévia
					autorização por escrito da MMS. A utilização do material não
					autoriza o Usuário a expor terceiros ao ridículo, criar uma
					obra de caráter ilegal, caluniosa, difamatória, obscena ou
					imoral, que possa violar a ética, a moral e os bons
					costumes, sob pena de arcar com as penalidades aplicáveis
					pela legislação vigente.
				</p>
				<p>
					Qualquer utilização não contemplada na presente autorização
					será considerada como uma violação dos direitos de autor e
					sujeita às sanções cabíveis na Lei 9.610, de 19 de fevereiro
					de 1998, que protege os direitos autorais no Brasil.
				</p>
				<p>
					A eventual retirada de qualquer artigo, vídeo, notícia ou
					fotografia reproduzido pelo Portal da MMS em decorrência de
					alguma reclamação, deverá ser sempre compreendida como uma
					demonstração de nossa intenção de evitar pendências com
					relação a este assunto e, jamais, como reconhecimento de
					qualquer infração a direito de terceiro ou de possuir culpa
					sobre o ocorrido.
				</p>
				<p>
					<b>
						As fotos e imagens utilizadas no Portal podem não
						refletir seu tamanho original ou situação atual do
						cenário reproduzido, sendo meramente ilustrativas.
					</b>
				</p>
				<h1>7. CONTA DE USUÁRIO</h1>
				<p>
					O uso das contas é pessoal e intransferível, por isto os
					Usuários não estão autorizados a ceder os dados de validação
					para acessar ao Portal. No caso de esquecer os dados de
					validação ou usurpação deles, é obrigação do Usuário
					informar à MSS através da opção “esqueceu sua senha”.
				</p>
				<p>
					<b>
						Com a criação da Conta de Usuário, o Usuário manifesta
						sua vontade de aceitação expressa e inequívoca destes
						Termos e Condições de Uso.
					</b>
				</p>
				<p>
					O Usuário autoriza expressamente, no momento da aceitação
					destes Termos, o uso de Cookies em toda atividade que for
					realizada na plataforma.
				</p>
				<h1>8. RESPONSABILIDADE DO USUÁRIO E/OU CLIENTE</h1>
				<p>
					Com a aceitação destes termos o Usuário está obrigado a: (i)
					fornecer informações verazes e fidedignas no momento de
					criar sua Conta; (ii) não transferir a terceiros os dados de
					validação (nome de Usuário e senha); (iii) não utilizar a
					plataforma para realizar atos contrários à moral, a ordem
					pública e os bons costumes; (iv) informar à MMS em caso de
					esquecimento, perda ou usurpação dos dados de validação; (v)
					não realizar condutas que atentarem contra do funcionamento
					da plataforma; (vi) não suplantar a identidade de outros
					Usuários; (vii) não decifrar, desestruturar ou desmontar
					qualquer elemento da plataforma ou de qualquer uma das suas
					partes; (viii) habilitar a utilização de janelas emergentes
					durante a operação para o funcionamento adequado na
					plataforma; (ix) cumprir com as legislações vigentes.
				</p>
				<p>
					É de exclusiva responsabilidade e ônus do Usuário
					providenciar os equipamentos de informática e a conexão à
					Internet necessários para o acesso ao Portal, não se
					responsabilizando a MMS em nenhuma hipótese pela existência,
					funcionamento e qualidade de tais equipamentos, sistemas e
					conexões.
				</p>
				<h1>9. DEVERES DA MMS</h1>
				<p>
					Em razão destes termos, a MMS obriga-se a: (i) fornecer
					informações certas, fidedignas, suficientes, claras e
					atualizadas com respeito da empresa e de suas atividades;
					(ii) esclarecer quaisquer dúvidas dos Usuários em relação ao
					Portal, à MSS e suas atividades; (iii) colocar à disposição
					dos Usuários os Termos e Condições de Uso na plataforma,
					sempre de forma atualizada; (iv) utilizar as informações
					unicamente para os fins estabelecidos nestes termos e de
					acordo com a Política de Privacidade e Segurança; (v)
					utilizar mecanismos de informações e validação durante a
					transação como as janelas emergentes (Pop Ups) que permitam
					ao Usuário aceitar ou não cada passo do processo de
					cadastro; (vi) cumprir com as legislações vigentes.
				</p>
				<h1>10. EXCLUSÃO DE GARANTIAS E DE RESPONSABILIDADE</h1>
				<p>
					Em decorrência de questões operacionais, de terceirização de
					serviços, a plataforma/portal da MMS pode estar sujeitos a
					eventuais problemas de interrupção, falha técnica e
					indisponibilidade de funcionamento temporário. Quando for
					razoavelmente possível, a MMS advertirá previamente as
					interrupções do funcionamento de seu Portal aos seus
					Usuários.
				</p>
				<p>
					A MMS se exime de qualquer responsabilidade pelos danos e
					prejuízos de toda natureza que possam decorrer da falta de
					disponibilidade ou de continuidade do funcionamento do
					Portal.{" "}
				</p>
				<p>
					A MMS não se responsabiliza por qualquer dano, prejuízo ou
					perda no equipamento do Usuário causado por falhas no
					sistema, no servidor ou na conexão decorrentes de condutas
					de terceiros, incluindo ações de softwares maliciosos como
					vírus, cavalo de tróia, etc. que possam, de algum modo,
					danificar o equipamento ou conexão do Usuário em decorrência
					do acesso, utilização ou navegação no Portal, bem como a
					transferência de dados, arquivos, imagens, textos nele
					contidos.
				</p>
				<p>
					O uso dos serviços ou do download por meio da plataforma
					feito ao próprio critério e risco do Usuário e com o seu
					acordo de que será o único responsável por quaisquer danos
					ao seu sistema de computador ou perda de dados resultantes
					de tais atividades. Também não se pode imputar a MMS a
					responsabilidade em qualquer evento ocasionado por
					excludentes decorrentes de caso fortuitos ou motivo de força
					maior, que venham a causar danos a quaisquer das Partes.{" "}
				</p>
				<h1>11. FUNCIONAMENTO DA PLATAFORMA</h1>
				<p>
					{" "}
					A MMS administra seu Portal e a plataforma diretamente ou
					por meio de terceiros. Dessa forma, a MMS não responderá por
					danos diretos ou indiretos sofridos pelo Usuário ou
					visitante pela utilização ou incapacidade de utilização da
					Portal, inclusive por indisponibilidade sistêmica. A
					plataforma encontra-se disponível durante as 24 horas do dia
					para acesso e consulta.
				</p>
				<p>
					A MMS realiza os melhores esforços para manter o Portal em
					funcionamento, mas em nenhum caso garante a sua
					disponibilidade e continuidade permanente.
				</p>
				<p>
					A MMS reserva para si o direito de cancelar as contas de
					Usuários e/ou de proibir o acesso ao Portal dos Usuários que
					realizarem condutas que violem estes termos ou que
					descumprirem as obrigações neste Termo contraídas.
				</p>
				<h1>12. CANCELAMENTO E SUSPENSÃO DE CONTA</h1>
				<p>
					{" "}
					A MMS reserva para si o direito de cancelar, suspender,
					desativar, bloquear ou, encerrar unilateralmente o acesso do
					Usuário , com rescisão unilateral do presente contrato, com
					ou sem aviso prévio, caso: (i) seja identificada qualquer
					violação as normas jurídicas; (ii) suas ações violem às
					disposições destes Termos e Condições de Uso, ou alguma de
					suas Políticas; (iii) se o Usuário causar algum dano direto
					ou indireto à MMS, outros Usuários ou a terceiros; (iv) seja
					identificada, de forma direta ou indireta, a prática de
					atitudes fraudulentas; (v) outros casos em que a MMS entenda
					necessário, por violação de normas jurídicas,
					incompatibilidade com a política da MMS, entre outras, a seu
					exclusivo critério.
				</p>
				<h1>13. DO USO DAS INFORMAÇÕES</h1>
				<p>
					As informações fornecidas pelos Usuários de forma livre e
					voluntária, serão armazenadas pela MMS para compor seu Banco
					de Dados de potenciais parceiros, sendo tratada e armazenada
					conforme a <b>Política de Privacidade e Segurança da MMS</b>
					.
				</p>
				<p>
					A MMS é responsável pelo tratamento das informações pessoais
					levantadas através do site, responsabilidade que poderá ser
					delegada a um terceiro, na qualidade de responsável ou
					encarregado das informações, garantindo por meio de contrato
					um adequado tratamento das mesmas, tudo explicitado na{" "}
					<b>Política de Privacidade e Segurança da MMS</b>.
				</p>
				<h1>14. DA LEGISLAÇÃO APLICÁVEL E FORO</h1>
				<p>
					Para dirimir quaisquer controvérsias oriundas do presente
					Instrumento, as partes elegem o Foro da Comarca de Barueri,
					no Estado de São Paulo (renunciando a qualquer outro por
					mais privilegiado que seja), sendo aplicáveis as Leis da
					República Federativa do Brasil.
				</p>
				<h1>16. ACEITAÇÃO TOTAL DOS TERMOS</h1>
				<p>
					O Usuário manifesta expressamente ter a capacidade legal
					para usar a Plataforma e para realizar o cadastro de
					informações para compor o Banco de Dados de potenciais
					parceiros da MMS.
				</p>
				<p>
					Assim, manifesta ter fornecido informação real, veraz e
					fidedigna. Portanto, de <b>forma expressa e inequívoca</b>{" "}
					declara ter lido, que entende e que aceita a totalidade das
					situações reguladas nestes Termos e Condições de Uso, dando
					o seu <b>CONSENTIMENTO</b>, pelo que se compromete ao
					cumprimento total dos deveres, obrigações, ações e omissões
					aqui expressadas. Em caso de Usuários de outros países
					utilizarem o portal MMS, ficam completamente sujeitos ao
					disposto nestes termos.{" "}
				</p>
				<p>
					<b>
						Declara ainda que teve a possibilidade de sanar
						quaisquer dúvidas em relação a este TERMO E CONDIÇÕES DE
						USO pelos meios disponibilizados no site.
					</b>
				</p>

				<div
					onClick={() => window.history.back()}
					className="terms-back-btn go-forward-button"
				>
					Voltar
				</div>
				<p>Atualizações:</p>
				<p>Criação: 01 de maio de 2020.</p>
			</div>
			<ScrollToTop />
			<Footer />
		</>
	);
}

export default TermsOfUse;
