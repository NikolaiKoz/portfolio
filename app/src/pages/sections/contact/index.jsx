export default function Contact() {
	return (
		<div>
			<h2>Contacto</h2>
			<form>
				<div>
					<label htmlFor='name'>Nombre</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Ingrese su nombre completo'
					/>
				</div>
				<div>
					<label htmlFor='email'>Correo</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Ingrese su correo'
					/>
				</div>
				<div>
					<label htmlFor='affair'>Asunto</label>
					<input
						type='text'
						name='affair'
						id='affair'
						placeholder='Ingrese el motivo de su mensaje'
					/>
				</div>
				<div>
					<label htmlFor='message'>Mensaje</label>
					<input
						type='text'
						name='message'
						id='message'
						placeholder='Ingrese su correo'
					/>
				</div>
				<div>
					<input type='button' value='Enviar' />
				</div>
			</form>
		</div>
	);
}
