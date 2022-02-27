import './App.css';
import Experience from './Components/Experience';
import {
	Layout,
	Header,
	InnerLayout,
	ProfileCard,
	ProfileImg,
	ProfileText,
	ProfileButtons,
	Button,
	ButtonSolid,
	Divider,
	ProfileSection,
	ProfileSectionHeader,
	ProfileSectionContent,
	ProfileSectionContentText,
} from './styles/common/common';

function App() {
	const r = [1, 2, 3, 4, 5, 6, 7];
	const getWidth = (r: Array<Number>) => {
		const w = 100 / r.length - 2;
		console.log((w <= 30 ? 32 : w) + '%');
		return (w <= 30 ? 32 : w) + '%';
	};


	return (
		<Layout>
			<Header></Header>
			<InnerLayout>
				<ProfileCard>
					<ProfileImg src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
					<ProfileText>
						<h3>Jose Luis Camacho</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
							distinctio, voluptas minima.
						</p>
					</ProfileText>
					<ProfileButtons>
						<Button>Descargar</Button>
						<ButtonSolid>Contactar</ButtonSolid>
					</ProfileButtons>
				</ProfileCard>
				<Divider />
				<ProfileSection>
					<ProfileSectionHeader>
						<h4>Sobre mi</h4>
					</ProfileSectionHeader>
					<ProfileSectionContentText>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
							quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quae, quisquam.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
							quisquam.
						</p>
					</ProfileSectionContentText>
				</ProfileSection>
				<Divider id='experience' />
				<ProfileSection>
					<ProfileSectionHeader>
						<h4>Experiencia</h4>
					</ProfileSectionHeader>
					<ProfileSectionContent>
						{r.map((i) => (
							<Experience width={getWidth(r)} />
						))}
					</ProfileSectionContent>
				</ProfileSection>
				<Divider id='contact' />
				<ProfileSection>
					<ProfileSectionHeader>
						<h4>Contacto</h4>
					</ProfileSectionHeader>
					<ProfileSectionContentText>
						<form name='contact' method='post'>
							<input type='hidden' name='form-name' value='contact' />
							<p>
								<label htmlFor='name'>Name</label> <br />
								<input type='text' id='name' name='name' required />
							</p>
							<p>
								<label htmlFor='email'>Email</label> <br />
								<input type='email' id='email' name='email' required />
							</p>
							<p>
								<label htmlFor='message'>Message</label> <br />
								<textarea id='message' name='message' required></textarea>
							</p>
							<p>
								<input type='submit' value='Submit message' />
							</p>
						</form>
					</ProfileSectionContentText>
				</ProfileSection>
			</InnerLayout>
		</Layout>
	);
}

export default App;
