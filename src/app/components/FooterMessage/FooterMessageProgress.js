import React from "react";

export default function FooterMessageProgress(props) {
	return (
		<div className={"footer-message-progress"}>
			Se você desejar se descadastrar da Rede de Parceiros MMS, envie um
			e-mail com seus dados para{" "}
			<a
				className={"link-color"}
				href={"mailto:credenciamento@mms.com.vc"}
			>
				credenciamento@mms.com.vc.
			</a>
		</div>
	);
}
