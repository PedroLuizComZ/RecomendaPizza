import React, { useEffect } from "react";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import Contract from "../../assets/images/Contrato_MMS_Chancelado.pdf";

function AcceptContract(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		const UserData = JSON.parse(localStorage.getItem("UserData"));
		if (UserData.etapa === "anm") {
			props.history.push("/menu");
		} else if (UserData.etapa !== "apr") {
			props.history.push("/home");
		}
	}, []);

	return (
		<>
			<div className="terms-paragraph">
				<Breadcrumbs aria-label="breadcrumb">
					<Link color="inherit" href="/">
						Home
					</Link>
					<Typography color="textPrimary">
						Contrato de Intermediação de Serviços de Montagem
					</Typography>
				</Breadcrumbs>
				<h1>
					<b>
						<u>CONTRATO DE INTERMEDIAÇÃO DE SERVIÇOS DE MONTAGEM</u>
					</b>
				</h1>
				<p>Pelo presente instrumento, de um lado,</p>
				<p>
					<strong>
						MMS INTERMEDIAÇÃO DE SERVIÇOS E NEGÓCIOS EM GERAL LTDA.{" "}
					</strong>
					pessoa jurídica de direito privado, inscrita no CNPJ/MF sob
					nº 34.592.703/0001-78, localizada na Rua Bonnard, nº 980,
					Edifício 19, Sala 07, CEP: 06465-134, Condomínio Green
					Valley, na cidade de Barueri, Estado de São Paulo, doravante
					denominada simplesmente “INTERMEDIADORA”;{" "}
				</p>
				<p>e de outro lado</p>
				<p>
					<strong>PARCEIRO, </strong>
					devidamente qualificado na ficha cadastral constante do
					Sistema, doravante denominado simplesmente “PARCEIRO”,
					denominados em conjunto simplesmente “Partes”.
				</p>
				<p>
					As Partes acima identificadas têm, entre si, justo e
					contratado o presente instrumento denominado
					<strong>
						{" "}
						Contrato de Intermediação de Serviços de Montagem
					</strong>
					(“Contrato”), que se regerá pelas seguintes cláusulas e
					condições:
				</p>
				<h1>
					<b>
						<u>Cláusula Primeira – Definições</u>
					</b>
				</h1>
				<p>
					1.1. Concordam as Partes que as expressões abaixo
					transcritas deverão observar os significados, ora contidos,
					para interpretação do presente Contrato e para execução dos
					Serviços de Intermediação:
				</p>
				<ul>
					<li>
						<b>a. </b>
						Equipamentos: todo bem móvel ou ferramenta utilizada na
						prestação dos Serviços de Montagem pelo PARCEIRO para o
						Usuário;
					</li>
					<li>
						<b>b. </b>
						Check List: documento a ser preenchido pelo PARCEIRO no
						momento do atendimento ao Usuário, de forma física ou
						eletrônica no Sistema;
					</li>
					<li>
						<b>c. </b>
						Usuário: qualquer terceiro, pessoa física e/ou jurídica,
						indicado pela INTERMEDIADORA como beneficiário dos
						Serviços de Montagem prestados pelo PARCEIRO;
					</li>
					<li>
						<b>d. </b>
						PARCEIRO: microempreendedor individual, pertencente à
						rede de parceiros da INTERMEDIADORA para execução dos
						Serviços de Montagem diretamente para o Usuário;
					</li>
					<li>
						<b>e. </b>
						Sistema: domínio/site/sistema/app de propriedade ou
						licenciado pela INTERMEDIADORA, que detém todos os
						direitos sobre o mesmo, estando protegido pela
						legislação pertinente a propriedade intelectual, ao
						direito autoral e ao sigilo de negócio e fabricação,
						licenciado de forma precária ao PARCEIRO para execução
						do presente Contrato, sem qualquer caráter de
						exclusividade, na expectativa de que este tenha acesso
						à, exemplificativamente, mas sem se limitar, informações
						sobre indicações de Serviços de Montagem para os
						PARCEIROS, relatório de Serviços de Montagem prestados
						pelos PARCEIROS, notas de pagamento, etc.;
					</li>
					<li>
						<b>f. </b>
						Login/Senha: dados de acesso disponibilizados pela
						INTERMEDIADORA ao PARCEIRO, para acesso ao Sistema. A
						responsabilidade pelo uso do Login/Senha de acesso são
						integrais do PARCEIRO, devendo este zelar por todas as
						informações incluídas no Sistema;
					</li>
					<li>
						<b>g. </b>
						Termo de Adesão: instrumento disponibilizado
						virtualmente para aceite do PARCEIRO, no qual declara
						estar ciente e de acordo, com todos os termos e
						condições deste Contrato e também à Tabela de Repasse
						disponível no Sistema.
					</li>
				</ul>

				<h1>
					<b>
						<u>Cláusula Segunda – Objeto e Obrigações</u>
					</b>
				</h1>
				<p>
					2.1. Constitui objeto deste Contrato a prestação dos
					serviços de intermediação de negócios pela INTERMEDIADORA
					para o Parceiro (“Serviços de Intermediação”), por meio do
					qual a INTERMEDIADORA irá intermediar serviços de montagem
					de móveis a serem prestados pelo PARCEIRO diretamente para
					os Usuários indicados pela INTERMEDIADORA e aceitos pelo
					PARCEIRO por meio do Sistema (“Serviços de Montagem”).
				</p>
				<p>
					2.2. Para perfeita execução dos Serviços de Montagem, o
					PARCEIRO deverá:
				</p>
				<ul>
					<li>
						<b>a. </b>
						a. prestar os Serviços de Montagem dentro das técnicas
						de mercado e legislação vigentes, valendo-se de
						qualidade, perícia e zelo;
					</li>
					<li>
						<b>b. </b>
						dispor dos Equipamentos necessários para a prestação dos
						Serviços de Montagem;
					</li>
					<li>
						<b>c. </b>
						acessar periodicamente o Sistema para verificar
						indicações de Serviços de Montagem intermediados e
						disponibilizados pela INTERMEDIADORA, para aceite do
						PARCEIRO, bem como para acessar todas as informações e
						documentos necessários e/ou exigidos pela INTERMEDIADORA
						no Sistema;
					</li>
					<li>
						<b>d. </b>
						prestar os Serviços de Mercado sempre com vestimentas
						respeitosas, limpas e adequadas ao referido serviço;
					</li>
					<li>
						<b>e. </b>
						nunca divulgar, em mídias sociais ou quaisquer outros
						meios, qualquer informação e/ou foto dos Usuários ou
						sobre os Serviços de Montagem executados;
					</li>
					<li>
						<b>f. </b>
						observar, cumprir, praticar e respeitar todas as
						disposições contidas nos documentos, cronogramas,
						manuais e demais informações contidas no Kit de Boas
						Vindas disponibilizadas pela INTERMEDIADORA quando do
						credenciamento do PARCEIRO;
					</li>
					<li>
						<b>a. </b>
						g. cumprir todas as obrigações contidas no{" "}
						<b>CÓDIGO DE ÉTICA E CONDUTA PARA PARCEIROS </b>(“Código
						de Ética”), disponibilizado no Kit de Boas Vindas;
					</li>
					<li>
						<b>h. </b>
						observar a Política de Qualidade dos PARCEIROS, a fim de
						zelar e seguir com os princípios e diretrizes da
						qualidade dos Serviços de Montagem a serem prestados
						para os Usuários;
					</li>
					<li>
						<b>i. </b>
						observar as obrigações, regras e procedimentos a serem
						adotados quando do atendimento aos Usuários, conforme
						informado no Manual do Parceiro encaminhado ao PARCEIRO
						quando do envio do Kit de Boas Vindas;
					</li>
					<li>
						<b>j. </b>
						realizar o preenchimento integral do check list, na
						forma prevista no Manual do Parceiro;
					</li>
					<li>
						<b>k. </b>
						refazer todos e quaisquer Serviços de Montagem que não
						atendam aos requisitos mínimos de qualidade, previstos
						na Política de Qualidade, sem qualquer custo adicional
						para INTERMEDIADORA ou Usuários, no prazo máximo de 24
						(vinte e quatro) horas a contar de comunicado feito pela
						INTERMEDIADORA ou em outro prazo definido pelas Partes;
					</li>
					<li>
						<b>l. </b>
						prestar todo e qualquer esclarecimento solicitado pela
						INTERMEDIADORA em razão de reclamação feita pelo
						Usuário, no prazo de 5 (cinco) dias úteis, a contar do
						pedido expresso feito pela INTERMEDIADORA;
					</li>
					<li>
						<b>m. </b>
						atender com excelência, cordialidade e sempre prestando
						serviços com qualidade, a fim de respeitar e fazer
						cumprir com a Política de Qualidade da INTERMEDIADORA;
					</li>
					<li>
						<b>n. </b>
						não subcontratar os Serviços de Montagem;
					</li>
					<li>
						<b>o. </b>
						cumprir com todas as exigências legais necessárias à
						manutenção da sua condição de microempreendedor
						individual (MEI).
					</li>
				</ul>
				<p>
					2.3. Este Contrato não configura nenhuma obrigação de
					indicação ou intermediação mínima de Serviços de Montagem ou
					faturamento mínimo para o PARCEIRO, nem mesmo garantia de
					que os Serviços de Montagem serão disponibilizados ao
					PARCEIRO, mesmo após o credenciamento. A intermediação dos
					Serviços de Montagem pela INTERMEDIADORA para o PARCEIRO
					será realizada exclusivamente no Sistema de forma eventual e
					não exclusiva, sendo que os Serviços de Montagem somente
					serão prestados para os Usuários caso aceitos pelo PARCEIRO
					diretamente no Sistema.
				</p>
				<p>
					2.4. O PARCEIRO não poderá, em hipótese alguma,
					subcontratar, total ou parcialmente, os Serviços de Montagem
					que venham a ser intermediados pela INTERMEDIADORA.{" "}
				</p>
				<p>
					2.5. A INTERMEDIADORA disponibilizará para o PARCEIRO o
					acesso ao Sistema, fornecendo quando do seu credenciamento o
					Login e Senha para acesso à, exemplificativamente, mas sem
					se limitar, informações sobre Serviços de Montagem
					potenciais, relatório de Serviços de Montagem prestados,
					notas de pagamento, e demais informações relacionadas aos
					Serviços de Montagem. Pelo PARCEIRO deverão ser observadas
					todas as obrigações de confidencialidade previstas neste
					Contrato para acesso ao Sistema, Login e Senha fornecidos
					pela INTERMEDIADORA.{" "}
				</p>
				<p>
					2.5.1. O Sistema, Login e Senha concedidos ao PARCEIRO são
					confidenciais, individuais e intransferíveis, portanto, em
					hipótese alguma poderão ser cedidos e/ou informados para
					terceiros sem prévia e expressa autorização da
					INTERMEDIADORA. É integral responsabilidade do PARCEIRO
					garantir a confidencialidade e segurança do Login e Senha,
					como também quanto a qualquer informação que venha a incluir
					ou obter por meio do Sistema.{" "}
				</p>
				<p>
					2.5.2. Em caso de extravio do Login e/ou Senha o PARCEIRO
					deverá imediatamente entrar em contato com a INTERMEDIADORA
					para que esta tome as medidas adequadas para invalidar os
					dados de acesso extraviado, como também para que seja
					possível a INTERMEDIADORA fornecer para o PARCEIRO novos
					dados de acesso ao Sistema.{" "}
				</p>
				<p>
					2.5.3. O uso indevido ou inadequado do Sistema, Login e/ou
					Senha será de integral responsabilidade do PARCEIRO, ficando
					este sujeito às reparações previstas neste Contrato,
					incluindo eventuais perdas e danos.{" "}
				</p>
				<p>
					2.6. Quaisquer alterações das condições previstas neste
					Contrato serão inseridas no Sistema pela INTERMEDIADORA,
					para validação e aceite do PARCEIRO.{" "}
				</p>
				<p>
					2.9. Na hipótese do PARCEIRO precisar alugar ou adquirir
					algum Equipamento diferenciado que não possua para a
					execução dos Serviços, deverá obtê-los por sua conta e risco
					desde que previamente comunicado à INTERMEDIADORA.{" "}
				</p>
				<h1>
					<b>
						<u>Cláusula Terceira – Vigência</u>
					</b>
				</h1>
				<p>
					3.1. O presente Contrato terá vigência por 12 (doze) meses,
					a contar do aceite eletrônico do PARCEIRO ao Termo de Adesão
					a este Contrato, renovável automaticamente por iguais
					períodos sucessivos.
				</p>
				<p>
					3.2. Qualquer das Partes poderá denunciar o presente
					Contrato, a qualquer tempo, sem qualquer ônus ou pagamento
					de multa, mediante prévia e expressa notificação para outra
					parte com antecedência mínima de 30 (trinta) dias.{" "}
				</p>
				<p>
					3.3. Caso o PARCEIRO não aceite quaisquer alterações dos
					termos e condições deste Contrato que venham a ser inseridas
					no Sistema, o PARCEIRO poderá denunciar o presente Contrato
					e solicitar o seu descredenciamento da rede de parceiros da
					INTERMEDIADORA, mediante simples comunicação enviada para a
					INTERMEDIADORA com 10 (dez) dias de antecedência.{" "}
				</p>

				<h1>
					<b>
						<u>Cláusula Quarta – Rescisão</u>
					</b>
				</h1>
				<p>
					4.1. O presente Contrato poderá ser rescindido
					imediatamente, por qualquer das Partes, independente de
					notificação extrajudicial e/ou judicial, nas seguintes
					hipóteses:
				</p>

				<ul>
					<li>
						<b>a. </b>
						ao critério da parte inocente, por descumprimento de
						quaisquer cláusulas estabelecidas neste Contrato,
						respondendo pelas perdas e danos, inclusive lucros
						cessantes, sofridos pela parte inocente;
					</li>
					<li>
						<b>b. </b>
						pela parte inocente, por decretação de falência, pedido
						de recuperação extrajudicial ou judicial e/ou estado de
						insolvência da outra parte;
					</li>
					<li>
						<b>c. </b>
						baixa performance do PARCEIRO caracterizada pelo
						descumprimento de forma reiterada das obrigações
						decorrentes do Contrato ou dos procedimentos necessários
						e exigidos pela INTERMEDIADORA para o atendimento aos
						Usuários, reclamações reiteradas por parte dos Usuários
						em relação à postura ou atendimento do PARCEIRO;
					</li>
					<li>
						<b>d. </b>a critério da INTERMEDIADORA, caso seja
						confirmada internamente conduta fraudulenta do PARCEIRO,
						após as devidas apurações previstas neste Contrato,
						respondendo pelas perdas e danos, inclusive lucros
						cessantes, sofridos pela INTERMEDIADORA, pelos Usuários
						ou terceiros de boa-fé.
					</li>
				</ul>

				<h1>
					<b>
						<u>Cláusula Quinta – Do Repasse</u>
					</b>
				</h1>
				<p>
					5.1. Pelos Serviços de Montagem prestados pelo PARCEIRO para
					os Usuários, a INTERMEDIADORA efetuará o repasse para o
					PARCEIRO conforme valores definidos na Tabela de Repasse e
					de acordo com o Cronograma financeiro, ambos disponíveis no
					Sistema, Juvo ou TOA, no momento do aceite eletrônico pelo
					PARCEIRO neste instrumento (“Repasse PARCEIRO”).{" "}
				</p>
				<p>
					5.1.1. Caso ocorra qualquer divergência quanto aos valores
					definidos na Tabela de Repasse e a documentação apresentada
					pelo PARCEIRO, o repasse do PARCEIRO ficará sujeito à
					avaliação e aprovação da INTERMEDIADORA, sendo que o
					PARCEIRO deverá fornecer para a INTERMEDIADORA todas as
					informações e comprovações necessárias para esclarecimento
					da divergência.{" "}
				</p>
				<p>
					5.2. O repasse ao PARCEIRO pelos Serviços de Montagem
					prestados ao Usuário ocorrerá conforme cronograma a ser
					divulgado periodicamente pela INTERMEDIADORA por meio do
					Sistema, Juvo ou TOA, tendo-se como base a data de
					recebimento do relatório de atendimento (“Lista de Serviços/
					Número do Lote Eletrônico”), Nota Fiscal/Fatura e eventuais
					documentos solicitados pela INTERMEDIADORA.{" "}
				</p>
				<p>
					5.2.1. A contestação e/ou validação pela INTERMEDIADORA
					acerca do Número do Lote Eletrônico/Lista de Serviços
					ocorrerá no prazo de 30 (trinta) dias a contar do
					recebimento da Nota Fiscal/Fatura do PARCEIRO (“Prazo de
					Contestação/Validação”).{" "}
				</p>
				<p>
					5.2.2. O PARCEIRO poderá se manifestar quanto a eventual
					contestação apresentada pela INTERMEDIADORA, no prazo máximo
					e improrrogável de 5 (cinco) dias. A validação e/ou ausência
					de manifestação pelo PARCEIRO no prazo indicado será
					considerada validação tácita aos valores apresentados pela
					INTERMEDIADORA, seguindo a partir de então o cronograma de
					pagamento mencionado na Cláusula 5.1 e 5.2.{" "}
				</p>
				<p>
					5.3. Os repasses serão realizados mediante depósito em
					Banco, Agência e Conta Corrente, de titularidade do PARCEIRO
					cadastrada no Sistema. Os dados bancários informados pelo
					PARCEIRO são de sua inteira responsabilidade.{" "}
				</p>
				<p>
					5.3.1. Fica expressamente vedado para o PARCEIRO emitir
					qualquer tipo de boleto em face da INTERMEDIADORA. Os
					pagamentos ocorrerão exclusivamente por meio de depósito em
					conta bancária.{" "}
				</p>
				<p>
					5.4. Em caso de atraso injustificado no pagamento, fica
					facultado para o PARCEIRO a cobrança de multa de 0,5% (zero
					vírgula cinco por cento) sobre o valor em atraso.{" "}
				</p>
				<p>
					5.5. O PARCEIRO expressamente concorda que o repasse
					PARCEIRO já inclui todos os tributos, taxas e ou
					contribuições, federais, municipais e ou estaduais, por
					ventura incidentes na prestação dos Serviços de Montagem.{" "}
				</p>
				<p>
					5.6. O PARCEIRO autoriza e concorda que sejam deduzidos dos
					valores a serem repassados pela INTERMEDIADORA em seu favor,
					todas e quaisquer despesas decorrentes do descumprimento
					contratual e/ou qualquer despesa relacionada ao objeto do
					Contrato incorrida por dolo e/ou culpa do PARCEIRO.{" "}
				</p>
				<p>
					5.7. O PARCEIRO tem ciência e concorda que o envio de Nota
					Fiscal/Fatura em prazo superior a 180 (cento e oitenta
					dias), a contar da prestação do Serviço de Montagem,
					isentará a INTERMEDIADORA do repasse dos respectivos
					serviços, tornando-se os Serviços de Montagem e as Notas
					Fiscais/Faturas automaticamente quitados, nada podendo ser
					reclamado pelo PARCEIRO a qualquer tempo e/ou a qualquer
					título.{" "}
				</p>
				<p>
					5.7.1. Caso a INTERMEDIADORA entenda por mera liberalidade
					proceder com o repasse de que trata a cláusula supra, desde
					já o PARCEIRO autoriza e concorda que a INTERMEDIADORA
					desconte do valor da Nota Fiscal/Fatura percentual a ser
					definido pela INTERMEDIADORA, a título de despesas
					administrativas.{" "}
				</p>
				<p>
					5.8. O PARCEIRO expressamente autoriza a INTERMEDIADORA ou
					qualquer parceiro comercial da INTERMEDIADORA a realizar a
					cobrança dos Usuários relacionados aos valores devidos no
					que se refere aos Serviços de Montagem.{" "}
				</p>

				<h1>
					<b>
						<u>
							Cláusula Sexta – Inexistência de Vínculo Trabalhista
						</u>
					</b>
				</h1>
				<p>
					6.1. Fica estipulado que, por força deste Contrato, não se
					estabelece nenhum vínculo empregatício entre o PARCEIRO e a
					INTERMEDIADORA ou qualquer parceiro comercial da
					INTERMEDIADORA.
				</p>
				<p>
					6.2. Cada parte será integralmente responsável pelo
					pagamento e cumprimento da legislação aplicável a seus
					profissionais, empregados, contratados, prepostos, correndo
					por sua conta exclusiva todas as despesas com esses
					profissionais, inclusive os encargos decorrentes da
					legislação vigente, seja trabalhista, previdenciária,
					fiscal, securitária ou qualquer outra.{" "}
				</p>
				<p>
					6.3. As Partes, neste ato, se responsabilizam em caráter
					irretratável e irrevogável, por quaisquer reclamações
					trabalhistas ou qualquer outro ato de natureza
					administrativa ou judicial, inclusive decorrentes de
					acidente de trabalho, que venham a ser intentados contra a
					outra parte, por empregados, prepostos, funcionários ou
					terceiros envolvidos com os serviços objeto deste Contrato,
					que constituem mão-de-obra encarregada da execução do objeto
					deste Contrato, seja a que título for e a que tempo
					decorrer, respondendo integralmente pelo pagamento de
					indenizações, multas, honorários advocatícios e periciais,
					custas processuais e demais encargos que houver.{" "}
				</p>
				<p>
					6.4.1 A Parte Empregadora se obriga a requerer a exclusão da
					Parte Inocente do polo passivo da relação processual, sendo
					que, caso tal exclusão não ocorra, por qualquer motivo, fica
					a Parte Empregadora obrigada a realizar todos os pagamentos
					relativos às custas, recursos, perícias, honorários
					advocatícios e condenações da demanda sofridos pela Parte
					Inocente, no prazo de 5 (cinco) dias a contar do pagamento
					realizado pela Parte Inocente, ressalvado o direto de ação
					de regresso pela Parte Inocente.{" "}
				</p>

				<h1>
					<b>
						<u>Cláusula Sétima – Disposições Gerais</u>
					</b>
				</h1>
				<p>
					7.1. <b>Indenizações</b>. O PARCEIRO se compromete a
					indenizar, defender e manter imune a INTERMEDIADORA, seus
					conselheiros, sócios e diretores, em relação a toda e
					qualquer responsabilidade, obrigações, perdas e danos,
					prejuízos, custos e despesas, incluindo honorários
					advocatícios, multas, penalidades, sentenças e valores pagos
					à título de acordo, impostos para a INTERMEDIADORA ou para
					os Usuários, em razão de ação culposa ou dolosa do PARCEIRO,
					seus funcionários, prepostos, procuradores; bem como, em
					razão de passivo trabalhista que seja de responsabilidade do
					PARCEIRO, seus funcionários, prepostos, procuradores,
					sócios, no âmbito dos Serviços de Montagem intermediados
					pela INTERMEDIADORA.{" "}
				</p>
				<p>
					7.1.2. Caso a INTERMEDIADORA sofra eventual condenação de
					responsabilidade do PARCEIRO, o PARCEIRO deverá ressarcir a
					INTERMEDIADORA, no prazo máximo de 5 (cinco) dias úteis,
					quanto a todos os custos comprovadamente despendidos para a
					finalização da ação, seja em razão de acordo, seja em razão
					de sentença, incluindo, mas não se limitando a, custas
					periciais, processuais, recursais, sucumbenciais,
					indenizações, honorários advocatícios.{" "}
				</p>
				<p>
					7.1.2.1. Caso o PARCEIRO não realize o reembolso de que
					trata a cláusula supra, poderá a INTERMEDIADORA reter o
					valor devido de eventuais valores futuros que tenha o
					PARCEIRO a receber.{" "}
				</p>
				<p>
					7.1.3. O PARCEIRO será integral e único responsável por
					qualquer dano que seus serviços e/ou sócios, funcionário ou
					terceiros venham a causar à INTERMEDIADORA, aos Usuários
					e/ou a terceiros no âmbito da prestação dos Serviços de
					Montagem, devendo realizar as devidas reparações e/ou
					reembolsos nos termos da cláusula 7.1.2 e 7.1.2.1 supra.{" "}
				</p>
				<p>
					7.1.4 O preenchimento incompleto, incorreto ou a rasura do
					check list que configure dano ao Usuário, acarretará para o
					PARCEIRO todo e qualquer ônus de reparo ou reembolso que
					venha a ser imputado para a INTERMEDIADORA em razão do
					atendimento prestado pelo PARCEIRO, sem prejuízo das demais
					obrigações previstas neste Contrato, nos termos das
					cláusulas supra.{" "}
				</p>
				<p>
					7.2. <b>Confidencialidade</b>. Pelo prazo do presente
					Contrato e por 5 (cinco) anos contados do término de sua
					vigência, cada uma das Partes compromete-se e obriga-se a
					manter sigilo e a não divulgar a nenhuma pessoa (exceto os
					seus sócios, administradores, empregados e colaboradores que
					necessitem de tais informações para dar cumprimento às
					obrigações assumidas) qualquer informação relativa a este
					Contrato e todas demais informações e documentos, tais como,
					mas sem se limitar a operações, Usuários, parceiros,
					segredos industriais ou comerciais, técnicas e estratégias
					comerciais, bancos de dados, software (incluindo o Sistema,
					suas telas e funcionalidades), know-how, ativos e passivos,
					a que venha a ter acesso em decorrência da formalização do
					presente Contrato (“Informações Confidenciais”).{" "}
				</p>
				<p>
					7.2.1. As Partes são responsáveis por qualquer revelação não
					autorizada, efetuada por qualquer de seus empregados,
					prepostos, contratados, agentes, representantes que tenham
					recebido quaisquer Informações Confidenciais. A Parte que
					descumprir com o disposto nesta cláusula arcará com
					eventuais perdas e danos causados pela quebra de sigilo a
					que deu causa, sem prejuízo do direito de rescisão deste
					Contrato.{" "}
				</p>
				<p>
					7.2.2. As Partes adotarão as medidas necessárias para
					assegurar o cumprimento das obrigações de confidencialidade.
					Deverão ainda proteger as informações que receber e/ou
					divulgar com o mesmo cuidado e mesmas precauções adotadas
					para preservar o caráter confidencial de suas próprias
					informações confidenciais.{" "}
				</p>
				<p>
					7.2.3. As Partes reconhecem que as Informações Confidenciais
					que lhes forem fornecidas pela outra Parte são de
					propriedade exclusiva de quem as forneceu, sendo vedado a
					manutenção de cópias ou delas dispor de qualquer forma, a
					qualquer tempo, e para quaisquer fins, exceto para execução
					deste Contrato.{" "}
				</p>
				<p>
					7.2.4. Rescindido, denunciado ou findo o prazo de vigência
					deste Contrato, as Partes obrigam-se a restituir todas as
					Informações Confidenciais recebidas ou obtidas, salvo
					aquelas que, pela sua natureza, devem ser, exclusiva e
					obrigatoriamente, mantidas pelas Partes como prova de
					cumprimento de suas obrigações, inclusive perante terceiros.{" "}
				</p>
				<p>
					7.2.5. A obrigação de confidencialidade estipulada neste
					item não será aplicável:{" "}
				</p>
				<ul>
					<li>
						<b>a. </b>
						em relação àquelas informações que já sejam de
						conhecimento público quando da assinatura do presente
						Contrato;
					</li>
					<li>
						<b>b. </b>
						em relação àquelas Informações Confidenciais que, embora
						confidenciais na data de assinatura deste Contrato,
						venham a ser de conhecimento público, sem culpa de
						qualquer das Partes ou de terceiro a elas vinculado; e
					</li>
					<li>
						<b>c. </b>
						quando houver obrigação legal de divulgação, em virtude
						de lei ou de decisão judicial, hipótese em que as
						Informações Confidenciais devem ser fornecidas
						exclusivamente para aquelas pessoas que, em virtude de
						tal obrigação legal ou decisão judicial, devam
						recebê-las, sendo que a outra Parte deve ser previamente
						informada, por escrito, acerca de tal obrigação.
					</li>
				</ul>
				<p>
					7.3. <b>Propriedade Intelectual</b>. Toda e qualquer
					propriedade intelectual de titularidade de cada uma das
					Partes não comunica, em hipótese alguma, à outra parte.
					Contudo, toda a propriedade intelectual desenvolvida pelo
					PARCEIRO em razão do presente Contrato, sejam patenteáveis
					ou não, tendo ou não envolvido diretamente mão de obra,
					tempo, conhecimento das partes, serão de propriedade
					exclusiva da INTERMEDIADORA.{" "}
				</p>
				<p>
					7.3.1. O PARCEIRO não poderá utilizar o nome, marcas,
					logotipos e demais sinais distintivos da INTERMEDIADORA ou
					de eventuais parceiros comerciais da INTERMEDIADORA, ainda
					que a título de mera referência, em qualquer meio e a
					qualquer título, sem autorização prévia, expressa e por
					escrito da INTERMEDIADORA, sob pena de ser compelido a
					compor perdas e danos, apurados na forma da lei.{" "}
				</p>
				<p>
					7.3.1.1. O PARCEIRO autoriza que a INTERMEDIADORA divulgue
					dados dos Serviços de Montagem do PARCEIRO, seja em manuais,
					listas, ou qualquer outro instrumento que se faça
					necessário, incluindo o Sistema e demais meios eletrônicos.{" "}
				</p>
				<p>
					7.3.2. Em qualquer hipótese, o uso autorizado de nome,
					marcas, logotipos e demais sinais distintivos, deverão
					respeitar requisitos e critérios indicados pela parte
					detentora, sob pena de incorrer em descumprimento
					contratual.{" "}
				</p>
				<p>
					7.3.3. Caso o Contrato seja denunciado, rescindido,
					resolvido, ocorra o término de vigência ou mediante simples
					solicitação da INTERMEDIADORA, o PARCEIRO deverá
					imediatamente interromper o uso de nome, marcas, logotipos,
					personalização e demais sinais distintivos de propriedade ou
					providos pela INTERMEDIADORA e/ou pelos parceiros comerciais
					da INTERMEDIADORA.{" "}
				</p>
				<p>
					7.3.4. A concessão de acesso ao Sistema, Login e/ou Senha
					não confere ao PARCEIRO qualquer direito sobre a Propriedade
					Intelectual de tais bens, que permanecerão de propriedade
					integral e indiscutível da INTERMEDIADORA.{" "}
				</p>
				<p>
					7.4. <b>Auditoria</b>. As Partes convencionam que a
					INTERMEDIADORA poderá realizar auditoria nas dependências
					e/ou nos serviços do PARCEIRO para revisar e avaliar os
					controles e procedimentos operacionais relativos à execução
					dos Serviços de Montagem. A Auditoria de que trata essa
					cláusula poderá ocorrer semestralmente ou em período menor,
					conforme conveniência da INTERMEDIADORA, sem que seja
					necessário qualquer comunicado prévio.{" "}
				</p>
				<p>
					7.5. <b>Fraude</b>. O PARCEIRO deverá observar e fazer
					observar, por seus sócios, funcionários, prestadores e
					terceiros o mais alto padrão de ética durante toda a
					prestação dos Serviços de Montagem para os Usuários.{" "}
				</p>
				<p>
					7.5.1. Para os propósitos desta cláusula, definem-se as
					seguintes <b>práticas ilícitas,</b>, todos os delitos
					definidos no Código Penal e nas Leis Penais Especiais, bem
					como legislações específica e complementar:{" "}
				</p>
				<ul>
					<li>
						<b>a) “prática corrupta”: </b>
						oferecer, dar, receber ou solicitar, direta ou
						indiretamente, qualquer vantagem com o objetivo de
						influenciar a ação de prepostos, funcionários,
						dirigentes, acionistas, sócios ou diretores da
						INTERMEDIADORA, ou ainda, Usuários, no processo de
						contratação ou na execução dos Serviços de Montagem;
					</li>
					<li>
						<b>b) “prática fraudulenta”: </b>a falsificação ou
						omissão dos fatos e/ou documentos, com o objetivo de
						influenciar o processo de contratação, execução de
						contrato ou recebimento dos valores;
					</li>
					<li>
						<b>c) “prática conluiada”: </b>
						esquematizar ou estabelecer um acordo entre o PARCEIRO e
						Usuários, com ou sem o conhecimento de representantes ou
						prepostos da INTERMEDIADORA, visando obter vantagens
						financeiras e/ou prejudicar terceiros;
					</li>
					<li>
						<b>d) “prática coercitiva”: </b>
						causar dano ou ameaçar causar dano, direta ou
						indiretamente, à qualquer pessoa visando influenciar sua
						decisão em processo de contratação ou afetar a execução
						dos Serviços de Montagem.
					</li>
					<li>
						<b>e) “prática obstrutiva”: </b>
						(i) destruir, falsificar, alterar ou ocultar provas em
						inspeções ou fazer declarações falsas, com o objetivo de
						impedir materialmente a apuração de alegações de prática
						prevista acima; (ii) atos cuja intenção seja impedir
						materialmente o exercício do direito de promover
						inspeção.
					</li>
				</ul>

				<p>
					7.5.2. Caso haja indícios de que o PARCEIRO, seus sócios,
					funcionários, prestadores e tiveram conduta fraudulenta
					durante a execução deste Contrato, a INTERMEDIADORA tomará
					todas as medidas que entender cabíveis para apurar a
					veracidade da ocorrência da fraude, mediante análise de
					condutas, documentos e demais meios que lhe estejam
					disponíveis (a “Auditoria”), sendo que, ao final, o PARCEIRO
					poderá ser comunicado do resultado das investigações,
					oportunidade que poderá se manifestar sobre a conduta
					havida.{" "}
				</p>
				<p>
					7.5.2.1. O PARCEIRO deverá apresentar todos os documentos e
					registros relacionados aos Serviços de Montagem realizados,
					sob pena de, em não o fazendo, incorrer em{" "}
					<b>prática obstrutiva</b>, respondendo pelas sanções
					impostas neste instrumento, sem prejuízo das sanções cíveis
					e criminais, assim como as perdas e danos apurados.{" "}
				</p>
				<p>
					7.5.2.2. Durante o período de apuração pela INTERMEDIADORA,
					conforme cláusulas acima, os pagamentos devidos ao PARCEIRO
					poderão ser suspensos, à critério da INTERMEDIADORA, até
					conclusão dos trabalhos e identificação e apuração dos
					fatos.{" "}
				</p>
				<p>
					7.5.2.3. Se por ocasião do encerramento do processo de
					apuração ficar constatada conduta fraudulenta por parte do
					PARCEIRO, seus sócios, funcionários, prestadores e/ou
					terceiros com sua anuência, ficará o PARCEIRO sujeito à
					rescisão imediata do Contrato e retenção dos eventuais
					valores apurados como fraudados, respondendo pelas perdas e
					danos, inclusive pelos lucros cessantes apurados, decorrente
					da ação ou omissão praticada, sofridos pela INTERMEDIADORA,
					Usuários ou terceiros de boa-fé. A INTERMEDIADORA dará
					ciência aos órgãos judiciais e administrativos quanto aos
					fatos apurados e conduta fraudulenta do PARCEIRO, seus
					sócios, prepostos ou terceiros.{" "}
				</p>
				<p>
					7.5.3. Sem prejuízo das perdas e danos, inclusive lucros
					cessantes apurados, o PARCEIRO deverá devolver para a
					INTERMEDIADORA todo o valor apurado na auditoria e
					identificado como <b>Valor Auditado</b>, pela conduta lesiva
					decorrente das práticas ilícitas, bem como demais sanções
					cíveis e criminais aplicáveis.{" "}
				</p>
				<p>
					7.6. <b>Tributação</b>. As Partes arcarão com os tributos
					que lhes cabem, de acordo com a legislação vigente,
					comprometendo-se a manter em dia suas obrigações tributárias
					e a salvaguardar as outras Partes de qualquer
					responsabilidade nesse sentido.{" "}
				</p>
				<p>
					7.7. As Partes asseguram que as operações efetuadas para
					tratamento dos dados pessoais dos usuários, incluindo, mas
					sem se limitar, as operações de registro, armazenamento,
					alteração, análise, utilização, transmissão, combinação,
					bloqueio, exclusão ou destruição estão em absoluto
					cumprimento com os direitos do titular dos dados e com a Lei
					Geral de Proteção de Dados Brasileira (Lei n° 13.709/2018).{" "}
				</p>
				<p>
					7.7.1. As Partes asseguram que protegem os dados pessoais
					dos usuários, fornecedores, montadores, consumidores e
					funcionários, garantindo a estes, respeitados os limites
					legais, o direito de serem informados acerca de qualquer
					processamento de seus dados; assim como a ter acesso aos
					seus próprios dados e à lógica na qual se baseiam as
					decisões automatizadas.{" "}
				</p>
				<p>
					7.7.2. O PARCEIRO consente que os seus dados pessoais
					cadastrais, incluindo, mas sem se limitar: CNPJ, Razão
					Social, Endereço, número de telefone, e-mail, conta
					bancária, serão processados e armazenados na base de dados
					dos servidores da INTERMEDIDORA ou de terceiros, podendo ser
					enviados, para fins de auditoria para quaisquer empresas
					integrantes do grupo econômico da INTERMEDIADORA.{" "}
				</p>
				<p>
					7.8. <b>Licenças</b>. O PARCEIRO deverá manter às suas
					próprias expensas todos os registros, licenças, alvarás de
					funcionamento, vistorias e demais exigências legais para
					execução dos Serviços de Montagem.{" "}
				</p>
				<p>
					7.8.1. Caso haja utilização de Equipamento que, na prestação
					dos Serviços de Montagem, necessitem de cumprimento prévio
					de exigências legais e/ou licenças específica, sejam
					obrigações financeiras ou não, o PARCEIRO deverá realizar
					previamente, às suas expensas, o cumprimento de todos os
					requisitos necessários para utilizar o Equipamento na
					prestação dos Serviços de Montagem.{" "}
				</p>
				<p>
					7.8.2. Ainda que não haja requisito legal, o PARCEIRO deverá
					utilizar Equipamentos sempre de última geração, como todas
					as atualizações disponíveis, todos os requisitos de
					segurança em perfeito estado, sempre de acordo com manuais
					de utilização emitidos pelos fabricantes.{" "}
				</p>
				<p>
					7.9. <b>Independência das Partes</b>. Fica expressamente
					estipulado que não se estabelece, por força deste Contrato,
					entre as Partes, incluindo seus empregados e prepostos,
					nenhuma espécie de vínculo societário, associativo,
					representativo, joint venture, empregatício e/ou
					responsabilidade subsidiária ou solidária ou, ainda, relação
					de vínculo trabalhista. Nenhuma parte, nem seus empregados,
					prepostos, agentes e/ou representantes, terão qualquer
					direito, poder ou autoridade para atuar ou criar qualquer
					obrigação, expressa ou tácita, por conta da outra.{" "}
				</p>
				<p>
					7.10. <b>Cessão</b>. As Partes não poderão ceder, transferir
					ou dar em garantia, total ou parcialmente, as obrigações e
					direitos decorrentes deste Contrato, exceto pela
					possibilidade de cessão pela INTERMEDIADORA de todos os
					direitos e obrigações previstos neste Contrato para
					quaisquer outras empresas de seu grupo econômico mediante
					mera comunicação enviada para o PARCEIRO, inclusive via
					Sistema.{" "}
				</p>
				<p>
					7.11. <b>Sucessão</b>. As Partes se obrigam por si, seus
					herdeiros ou sucessores ao fiel cumprimento deste Contrato.{" "}
				</p>
				<p>
					7.12. <b>Comunicações</b>. Toda e qualquer comunicação que
					seja necessária entre as Partes deverá ocorrer de forma
					escrita e por meio de correspondência, sendo para
					INTERMEDIADORA no endereço constante do preâmbulo deste
					Contrato e para o PARCEIRO no endereço cadastrado no Sistema
					ou mediante aviso disponibilizado ao PARCEIRO no próprio
					Sistema ou outra forma definida entre as Partes.{" "}
				</p>
				<p>
					7.12.1. Fica desde já convencionando que as citações,
					intimações ou notificações, serão efetuadas mediante
					correspondência, com aviso de recebimento, e pelas demais
					formas previstas no Código de Processo Civil.{" "}
				</p>
				<p>
					7.13. <b>Meio Ambiente</b>. As Partes se comprometem a
					cumprir, durante a execução deste Contrato, todas as normas
					e exigências relativas à política nacional do meio ambiente
					emanada das esferas Federal, Estadual e Municipal,
					principalmente no que concerne à utilização racional de
					recursos naturais, evitando-se desperdícios, bem como a
					disposição correta de seu lixo comercial ou industrial.{" "}
				</p>
				<p>
					7.13.1. As Partes se comprometem a desenvolver esforços para
					a redução, reutilização e reciclagem de materiais e
					recursos, tais como, energia, água, produtos tóxicos e
					matérias–primas, buscando, ainda, a implantação de processos
					de destinação adequada de resíduos.{" "}
				</p>
				<p>
					7.14. <b>Combate à Corrupção e Trabalho Infantil</b>. As
					Partes declaram expressamente ter pleno conhecimento e
					compromete-se a fiel observância das disposições legais
					relacionadas à prevenção e combate às atividades
					relacionadas com os crimes de “lavagem” ou ocultação de bens
					e à corrupção, nos termos das Leis nº 9.613/98, 12.846/2003,
					12.813/2013 e 9.504/1997 e legislação e normas
					regulamentares correlatas.{" "}
				</p>
				<p>
					7.14.1. As Partes obrigam-se a dar pleno conhecimento do
					teor da legislação aplicável a matéria, nos termos deste
					Contrato, a todos os seus empregados, prepostos e terceiros
					que atuem de qualquer forma na execução dos serviços que lhe
					cabem.{" "}
				</p>
				<p>
					7.14.2. As Partes declaram, conhecer os termos das
					legislações, inclusive a previsão expressa de vedação da
					prática de qualquer pagamento ou doação, de qualquer coisa
					de valor, seja direta ou indiretamente, a uma autoridade
					governamental, partido político ou a candidato a cargo
					público, com o propósito de influenciar determinado ato ou
					decisão no âmbito de sua capacidade oficial, ou induzi-lo a
					usar sua influência no sentido de ajudar na obtenção de
					vantagens comerciais.{" "}
				</p>
				<p>
					7.14.3. As Partes se comprometem a orientar e a dar pleno
					conhecimento do teor da legislação supramencionada e a zelar
					para que seus atos e de seus diretores, colaboradores e
					representantes também não violem tais normas da Lei
					Anticorrupção brasileira, devendo, além disso, cooperar com
					a outra parte quanto a eventuais questionários de auditoria
					ou investigações e quanto as possíveis suspeitas de violação
					da referida legislação por qualquer diretor, colaborador ou
					representante da outra parte.{" "}
				</p>
				<p>
					7.14.4. As Partes se comprometem a não contratar mão-de-obra
					que envolva exploração de trabalhos forçados ou trabalho
					infantil.{" "}
				</p>
				<p>
					7.14.5. Se obrigam ainda, as Partes, a não empregar
					adolescentes de até 18 (dezoito) anos em locais prejudiciais
					à sua formação, ao seu desenvolvimento físico, psíquico,
					moral e social, bem como em locais e serviços perigosos ou
					insalubres, em horários que não permitam a frequência à
					escola, e, ainda, em horário noturno, considerando este o
					período compreendido entre 22h e 5h.{" "}
				</p>
				<p>
					7.15. <b>Novação ou Renúncia</b>. Qualquer omissão ou
					tolerância de qualquer das Partes em exigir o fiel
					cumprimento dos termos e condições deste Contrato não
					constituirá novação, perdão ou renúncia, nem afetará o
					direito da Parte de exigir seu cumprimento a qualquer tempo.{" "}
				</p>
				<p>
					7.16. <b>Nulidade</b>. A eventual invalidade, nulidade ou
					não exequibilidade de qualquer dispositivo contratual não
					afetará as demais disposições deste Contrato, as quais
					continuarão válidas e exequíveis, devendo a cláusula
					declarada nula ou inaplicável ser substituída por outra que
					conduza as Partes ao mesmo resultado econômico e jurídico
					almejado.{" "}
				</p>
				<p>
					7.16.1. Se a invalidade, nulidade ou não exequibilidade
					afetar o objeto do Contrato, sem que seja possível o
					reequilíbrio contratual, o mesmo deverá ser denunciado, sem
					ônus para as Partes.{" "}
				</p>
				<p>
					7.17. <b>Negociações anteriores</b>. Este Contrato substitui
					todo e qualquer acordos e/ou negociações, verbais ou
					escritas, firmadas anteriormente entre as Partes,
					relacionados ao objeto deste Contrato.{" "}
				</p>

				<h1>
					<b>
						<u>Cláusula Oitava – Foro</u>
					</b>
				</h1>

				<p>
					Para dirimir toda e qualquer controvérsia oriunda deste
					instrumento contratual ou de seu objeto, as partes elegem
					como competente o foro da Comarca de Barueri do Estado de
					São Paulo, com expressa renúncia de qualquer outro, por mais
					privilegiado que seja.
				</p>
				<p>
					E, por estarem justas e contratadas, as partes firmam o
					presente instrumento mediante aceite eletrônico ao presente
					Contrato, pelo PARCEIRO, por meio do Sistema. O presente
					Contrato consta registrado no Cartório de Registro de
					Imóveis, Títulos e Documentos e Civil de Pessoas Jurídicas
					da Comarca de Barueri/SP.{" "}
				</p>
				<p>Barueri, 05 de dezembro de 2019. </p>
				<h1>
					<b>
						<u>
							MMS INTERMEDIAÇÃO DE SERVIÇOS E NEGÓCIOS EM GERAL
							LTDA
						</u>
					</b>
				</h1>
				<br />
				<a target={"_blank"} rel="noopener noreferrer" href={Contract}>
					<h1>
						<b>
							<u>CLIQUE AQUI PARA BAIXAR ...</u>
						</b>
					</h1>
				</a>
				<div
					onClick={() => window.history.back()}
					className="terms-back-btn go-forward-button"
				>
					Voltar
				</div>
			</div>
			<ScrollToTop />
			<Footer />
		</>
	);
}

export default AcceptContract;
