import React from "react";

export default function FooterMessage(props) {
	return (
		<div className={"footer-message"}>
			<span>
				Se você desejar se descadastrar da Rede de Parceiros MMS, envie
				um e-mail com seus dados para{" "}
				<a
					className={"link-color-white"}
					href={"mailto:credenciamento@mms.com.vc"}
				>
					credenciamento@mms.com.vc.
				</a>
			</span>
		</div>
	);
}
