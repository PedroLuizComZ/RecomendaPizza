import React, { useEffect, useState } from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Footer from "../../components/Footer/Footer";

// Images
import ToolsWhite from "../../assets/images/home/tools-white.png";
import ToaImage from "../../assets/images/tela_fake_clientes.png";
import DashImage from "../../assets/images/tela_fake_montadores.png";
import Association from "../../assets/images/home/association.png";
import Comments from "../../assets/images/etapa7.svg";
import Brain from "../../assets/images/home/brain.png";
import Infrastructure from "../../assets/images/home/infrastructure.png";
import Growth from "../../assets/images/home/growth.png";
import Rated from "../../assets/images/home/rated.png";
import Rapidez from "../../assets/images/home/rapidez.png";
import Delivery from "../../assets/images/home/prazo-de-entrega.png";
import Training from "../../assets/images/home/treinamento.png";
import FerramentasRegra from "../../assets/images/home/ferramentas-regra-removebg.png";
import Cellphone from "../../assets/images/home/cellphone.svg";
import Group from "../../assets/images/home/group.svg";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Second(props) {
	// Similar ao componentDidMount e componentDidUpdate:
	useEffect(() => {
		window.addEventListener("resize", resize);
		resize();
	}, []);

	const [qtdCarrossel, setQtdCarrossel] = useState(5);

	return (
		<section className="home-container about-page">
			<div className="huge-content">
				<div
					id={"who-we-are"}
					className="home-block padding-top-30 max-size-home content-item paragraph-item"
				>
					<div className={"home-block-center section-one-paragraph"}>
						<h2 className={"home-title"}>Quem Somos</h2>
						<p>
							A MMS é uma empresa especializada em serviços, que
							através de uma plataforma tecnológica atua na
							intermediação de montagem de móveis em todo o país.
						</p>
						<p>
							Somos uma{" "}
							<strong>
								plataforma que integra Clientes, Lojas e
								Montadores,{" "}
							</strong>
							com o objetivo de oferecer a melhor experiência em
							serviços,{" "}
							<strong>
								agregando o que há de mais sofisticado em
								tecnologia, com um atendimento de qualidade,
								pontualidade e excelência!
							</strong>
						</p>
					</div>
					<div className={"home-block-center section-one-image"}>
						<img
							className={"tool-white-image"}
							alt=""
							src={ToolsWhite}
						/>
					</div>
				</div>
				<div className="partner-home-bg home-block partner-home-container max-size-home first-second-third-content content-item">
					<div className={"home-block-center"}>
						<h2 className={"home-title"}>
							Por que ter a MMS como parceiro?
						</h2>
						<CarouselProvider
							visibleSlides={qtdCarrossel}
							totalSlides={5}
							step={1}
							naturalSlideWidth={100}
							naturalSlideHeight={200}
						>
							{qtdCarrossel !== 5 ? (
								<ButtonBack>
									<KeyboardArrowLeftIcon />
								</ButtonBack>
							) : null}
							<Slider>
								<Slide index={0}>
									<div className={"carrousel-container"}>
										<div
											className={
												"carrousel-association-container"
											}
										>
											<img
												className={"carrousel-image"}
												alt={""}
												src={Association}
											/>
										</div>
										<div>
											<p className={"carrousel-text"}>
												Ampla experiência em gestão e
												curadoria de rede de parceiros
											</p>
										</div>
									</div>
								</Slide>
								<Slide index={1}>
									<div className={"carrousel-container"}>
										<div
											className={
												"carrousel-brain-container"
											}
										>
											<img
												className={"carrousel-image"}
												alt={""}
												src={Brain}
											/>
										</div>
										<div>
											<p className={"carrousel-text"}>
												Tecnologia no estado da arte e
												metodologia ágil para
												implantação de novos projetos
											</p>
										</div>
									</div>
								</Slide>
								<Slide index={2}>
									<div className={"carrousel-container"}>
										<div
											className={
												"carrousel-infrastructure-container"
											}
										>
											<img
												className={"carrousel-image"}
												alt={""}
												src={Infrastructure}
											/>
										</div>
										<div>
											<p className={"carrousel-text"}>
												Infraestrutura robusta e
												escalável
											</p>
										</div>
									</div>
								</Slide>
								<Slide index={3}>
									<div className={"carrousel-container"}>
										<div
											className={
												"carrousel-rate-container"
											}
										>
											<img
												className={"carrousel-image"}
												alt={""}
												src={Rated}
											/>
										</div>
										<div>
											<p className={"carrousel-text"}>
												Relação contratual baseada em
												performance
											</p>
										</div>
									</div>
								</Slide>
								<Slide index={4}>
									<div className={"carrousel-container"}>
										<div
											className={
												"carrousel-performance-container"
											}
										>
											<img
												className={"carrousel-image"}
												alt={""}
												src={Growth}
											/>
										</div>
										<div>
											<p className={"carrousel-text"}>
												Comprometimento com alto nível
												de qualidade
											</p>
										</div>
									</div>
								</Slide>
							</Slider>
							{qtdCarrossel !== 5 ? (
								<ButtonNext>
									<KeyboardArrowRightIcon />
								</ButtonNext>
							) : null}
						</CarouselProvider>
					</div>
				</div>

				<div className="vantage-home-bg  home-block avantage-container partner-home-container max-size-home first-second-third-content content-item">
					<div className="home-block-center max-size-home">
						<div className={"advantage-spacing"}>
							<h2 className={"home-title"}>
								Vantagens do modelo
							</h2>
							<div className={"advantage-group-container"}>
								<div className={"advantage-block"}>
									<div>
										<h3 className={"advantage-title"}>
											Para o Varejista e para a MMS
										</h3>
									</div>
									<ul className={"advantage-list"}>
										<li className={"advantage-list-item"}>
											Foco ainda maior no Core Business
										</li>
										<li className={"advantage-list-item"}>
											Aumento da geração de eficiência
										</li>
										<li className={"advantage-list-item"}>
											Maior percepção de valor do serviço
										</li>
										<li className={"advantage-list-item"}>
											Criação e consolidação de um novo
											mercado
										</li>
										<li className={"advantage-list-item"}>
											&nbsp;
										</li>
									</ul>
								</div>

								<div className={"advantage-block"}>
									<div>
										<h3 className={"partner-title"}>
											Para o Parceiro Montador
										</h3>
									</div>
									<ul className={"partner-list"}>
										<li className={"partner-list-item"}>
											Segurança
										</li>
										<li className={"partner-list-item"}>
											Possibilidade da ampliação de
											serviços
										</li>
										<li className={"partner-list-item"}>
											Flexibilidade na agenda de serviços
										</li>
										<li className={"partner-list-item"}>
											Rota de trabalho inteligente
										</li>
										<li className={"partner-list-item"}>
											Pagamento quinzenal
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="home-block-flex experience-container max-size-home content-item">
					<div className={"experience-block"}>
						<h2 className={"experience-title"}>
							Ótima experiência
							<br /> para o cliente!
						</h2>
						<h3 className={"experience-subtitle"}>
							Desde a venda até realização do serviço:
						</h3>
						<ul className={"experience-list"}>
							<li className={"experience-list-item"}>
								<img
									className={
										"experience-list-image-comunication"
									}
									alt=""
									src={Comments}
								/>
								Disponibilização de multicanais de comunicação
							</li>
							<li className={"experience-list-item"}>
								<img
									className={"experience-list-image-time"}
									alt=""
									src={Rapidez}
								/>
								Prazos curtos para agendamento da montagem
							</li>
							<li className={"experience-list-item"}>
								<img
									className={"experience-list-image-delivery"}
									alt=""
									src={Delivery}
								/>
								Compromisso com os prazos estabelecidos
							</li>
						</ul>
					</div>
				</div>

				<div
					className={
						"structure-home-bg home-block-flex structure-section"
					}
				>
					<div className="max-size-home fourth-content content-item">
						<h2 className={"structure-title"}>Nossa Estrutura</h2>
						<div>
							<div className={"structure-container"}>
								<div className={"fourth-content-items"}>
									<div className={"structure-group-item"}>
										<img
											className={"structure-icon-yellow"}
											src={Association}
											alt={""}
										/>
										<p className={"structure-group-text"}>
											Modelo das relações com respaldo de
											escritório jurídico renomado, com
											clientes que atuam em mercados
											similares
										</p>
									</div>
								</div>
								<div className={"fourth-content-items"}>
									<div className={"structure-group-item"}>
										<img
											className={"structure-icon-purple"}
											src={Cellphone}
											alt={""}
										/>
										<p className={"structure-group-text"}>
											Utilização de ferramenta
											mundialmente conhecida e testada
											para gestão de serviços de campo
										</p>
									</div>
								</div>
							</div>
							<div className={"structure-container"}>
								<div className={"fourth-content-items"}>
									<div className={"structure-group-item"}>
										<img
											className={"structure-icon-blue"}
											src={Training}
											alt={""}
										/>
										<p className={"structure-group-text"}>
											Ampla infraestrutura para
											treinamento e desenvolvimento dos
											parceiros
										</p>
									</div>
								</div>
								<div className={"fourth-content-items"}>
									<div className={"structure-group-item"}>
										<img
											className={"structure-icon-orange"}
											src={Group}
											alt={""}
										/>
										<p className={"structure-group-text"}>
											Time dedicado ao segmento e com
											grande experiência na área de
											atuação
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className={"structure-spacer"} />
					</div>
				</div>
				<div className={"our-tools"}>
					<h2 className={"tools-title home-title"}>
						Nossas Ferramentas
					</h2>
					<div className={"tools-container"}>
						<div
							className={
								"full-screen-width top-item fourth-content-item"
							}
						>
							<div className={"four-content-text"}>
								<div className={"full-screen-width-element"}>
									<h3 className={"tools-title-left"}>
										Para o Parceiro Montador
									</h3>
									<p className={"tools-description-left"}>
										Aceite dinâmico, otimização de roteiros,
										autonomia para a gestão de agenda, check
										list/laudo fotográfico (antes e depois),
										automação de atividades de suporte.
									</p>
								</div>
							</div>
						</div>
						<div
							className={
								"tools-image-container fourth-content-image"
							}
						>
							<img
								className={"tools-img-left cellphone-image"}
								src={DashImage}
								alt={""}
							/>
							<img
								className={"tools-img-right cellphone-image"}
								src={ToaImage}
								alt={""}
							/>
						</div>
						<div
							className={
								"full-screen-width bottom-item fourth-content-item"
							}
						>
							<div className={"four-content-text"}>
								<div className={"full-screen-width-element"}>
									<h3 className={"tools-title-right"}>
										Para o Cliente Corporativo
									</h3>
									<p className={"tools-description-right"}>
										Ferramentas que auxiliam a macro e micro
										gestão adequada aos perfis específicos.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={"background-partners-image"} />
				</div>
			</div>
			<ScrollToTop />
			<Footer />
		</section>
	);

	function resize() {
		if (window.innerWidth <= 700) {
			setQtdCarrossel(1);
		} else if (window.innerWidth <= 1000) {
			setQtdCarrossel(2);
		} else if (window.innerWidth <= 1170) {
			setQtdCarrossel(3);
		} else if (window.innerWidth <= 1260) {
			setQtdCarrossel(4);
		} else if (window.innerWidth <= 1400) {
			setQtdCarrossel(5);
		} else {
			setQtdCarrossel(5);
		}
	}
}

export default Second;
