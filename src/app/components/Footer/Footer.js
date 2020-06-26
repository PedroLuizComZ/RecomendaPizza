import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import LogoPremium from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				MMS
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footer: {
		color: "#373435",
		padding: theme.spacing(3, 2),
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[200]
				: theme.palette.grey[800],
	},
}));

export default function StickyFooter() {
	const [links, setLinks] = useState("");

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	function loadLinks() {
		if (window.location.href.includes("seja-um-parceiro")) {
			setLinks(
				<>
					<li>
						<NavLink to={""}>Home</NavLink>
					</li>
					<li>
						<NavLink onClick={() => scrollToTop()} to={"#"}>
							Quero montar móveis
						</NavLink>
					</li>
				</>
			);
		} else if (window.location.href.includes("politica-de-privacidade")) {
			setLinks(
				<>
					<li>
						<NavLink to={""}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"seja-um-parceiro"}>
							Quero montar móveis
						</NavLink>
					</li>
				</>
			);
		} else {
			setLinks(
				<>
					<li>
						<NavLink onClick={() => scrollToTop()} to={"#"}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={"seja-um-parceiro"}>
							Quero montar móveis
						</NavLink>
					</li>
				</>
			);
		}
	}

	const classes = useStyles();

	return (
		<div className={classes.root} onLoad={() => loadLinks()}>
			<CssBaseline />
			<footer className={classes.footer}>
				<div className={"footer-section"}>
					<div className={"footer-left"}>
						<div>
							<ul>
								{links}
								{JSON.parse(
									localStorage.getItem("UserData")
								) === null ? (
									<li>
										<NavLink to={"login"}>
											Login/Senha
										</NavLink>
									</li>
								) : (
									<>
										<li>
											<NavLink to={"bem-vindo"}>
												Boas-Vindas
											</NavLink>
										</li>
										<li>
											<NavLink to={"progresso"}>
												Status de Cadastro
											</NavLink>
										</li>
										<li>
											<NavLink to={"home"}>
												Dados de Cadastro
											</NavLink>
										</li>
										{JSON.parse(
											localStorage.getItem("UserData")
										).etapa === "anm" ||
										JSON.parse(
											localStorage.getItem("UserData")
										).etapa === "apr" ? (
											<>
												<li>
													<NavLink
														to={"galeria-de-video"}
													>
														Saiba Mais sobre a MMS
													</NavLink>
												</li>
												<li>
													<NavLink to={"noticias"}>
														Central de Notícias
													</NavLink>
												</li>
											</>
										) : (
											<></>
										)}
									</>
								)}
								{window.location.href.includes(
									"politica-de-privacidade"
								) ? (
									<li>
										<NavLink
											onClick={() => scrollToTop()}
											to={"#"}
										>
											Política de Privacidade
										</NavLink>
									</li>
								) : (
									<li>
										<NavLink to={"politica-de-privacidade"}>
											Política de Privacidade
										</NavLink>
									</li>
								)}
							</ul>
						</div>
					</div>
					<div className={"footer-center"}>
						<div>
							<a href="mailto:contato@mms.com.vc">
								contato@mms.com.vc
							</a>
						</div>
					</div>
					<div className={"footer-right"}>
						<div>
							<img
								className={"toolbar_img"}
								alt={"Logo-Premium"}
								src={LogoPremium}
							/>
							<Container maxWidth="sm">
								<Copyright />
								<Typography variant="body1"></Typography>
							</Container>
						</div>
					</div>
				</div>
				<div className="footer-cookies">
					<p>
						Nós usamos cookies em nosso site. Os cookies são
						utilizados para melhorar a funcionalidade e o uso do
						nosso site, além de contribuir para nossas análises.
						Para saber mais sobre o que são cookies, nossa política
						e como alterar suas configurações de cookies do seu
						computador,{" "}
						<NavLink to={"politica-de-cookies"}>
							clique aqui
						</NavLink>
						. Ao continuar a usar este site sem alterar suas
						configurações, você concorda com o uso de cookies.
					</p>
				</div>
			</footer>
		</div>
	);
}
