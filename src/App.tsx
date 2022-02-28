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
  Form,
  FormGroup,
  Input,
  Label,
  TextArea,
} from './styles/common/common';

function App() {
	const r = [1, 2, 3, 4, 5, 6, 7];
	const getWidth = (r: Array<Number>) => {
		const w = 100 / r.length - 2;
		console.log((w <= 30 ? 31 : w) + '%');
		return (w <= 30 ? 31 : w) + '%';
	};

  const goToContact = () =>   window.location.replace("/#contact");
  
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
						<ButtonSolid onClick={goToContact}>Contactar</ButtonSolid>
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
					<ProfileSectionContent>
						<Form name='contact' method='post'>
							<Input type='hidden' name='form-name' value='contact' />
							<FormGroup w='48%'>
								<Label htmlFor='name'>Name</Label>
								<Input type='text' id='name' name='name' required />
							</FormGroup>
							<FormGroup w='48%'>
								<Label htmlFor='email'>Email</Label>
								<Input type='email' id='email' name='email' required />
							</FormGroup>
							<FormGroup w='100%'>
								<Label htmlFor='message'>Message</Label>
								<TextArea id='message' name='message' required></TextArea>
							</FormGroup>
							<FormGroup w='100%'>
								<ButtonSolid type='submit' value='Submit message' >Submit message</ButtonSolid>
							</FormGroup>
						</Form>
					</ProfileSectionContent>
				</ProfileSection>
        <Divider id='footer' />
			</InnerLayout>
		</Layout>
	);
}

export default App;
