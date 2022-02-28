import styled from 'styled-components';

export const Layout = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;
export const InnerLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 70vw;
	margin: 0 auto;
	z-index: 2;
	margin-top: 15vh;

	@media (max-width: 1400px) {
		width: 80vw;
	}

	@media (max-width: 1180px) {
		width: 90vw;
	}
	@media (max-width: 768px) {
		width: 98vw;
	}
	@media (max-width: 425px) {
		width: 100vw;
	}
`;
export const Header = styled.div`
	display: flex;
	align-items: center;
	height: 20vh;
	width: 100%;
	background-color: var(--primary);
	z-index: 1;
	position: absolute;

	

`;

export const ProfileCard = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 0.5rem;
	}
`;

export const ProfileSection = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
	padding: 2rem 0;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 0.5rem;
	}
`;

export const ProfileSectionHeader = styled.div`
	display: flex;
	width: 30%;
	height: fit-content;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ProfileSectionContent = styled.div`
	width: 70%;
	height: fit-content;
	display: flex;
	flex-wrap: wrap;
	column-gap: 1rem;
	row-gap: 1rem;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ProfileSectionContentText = styled.div`
	width: 70%;
	height: fit-content;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Divider = styled.div`
	height: 1px;
	width: 100%;
	background-color: #adb5bd;
	margin: 2rem 0;
`;

export const ProfileImg = styled.img`
	border-radius: 100%;
	border: 5px solid #fff;
	box-shadow: -3px 6px 10px rgb(0 0 0 / 35%);
	height: 140px;
	width: 140px;
`;

export const ProfileText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 1vw;
	margin-top: 6vh;

	@media (max-width: 768px) {
		margin-left: 10px;
		margin-top: 20px;
	}
`;

export const ProfileButtons = styled.div`
	display: flex;
	align-items: flex-start;
	margin-left: auto;
	column-gap: 15px;
	align-self: baseline;
	margin-top: 6vh;

	@media (max-width: 768px) {
		margin-left: 10px;
		margin-top: 0;
	}
`;

export const Button = styled.button`
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	border: 0;
	vertical-align: middle;
	text-decoration: none;
	font-family: inherit;
	box-sizing: border-box;
	background-color: transparent;
	font-weight: bold;
	padding: 0.5em 0.75em;
	border: 2px solid var(--primary);
	border-radius: 0.75em;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: var(--quinary);
		border: 2px solid var(--quinary);
		color: #fff;
	}
	&:active {
		transform: scale(0.95);
	}
`;

export const ButtonSolid = styled.button`
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	border: 0;
	vertical-align: middle;
	text-decoration: none;
	font-family: inherit;
	box-sizing: border-box;
	background-color: var(--primary);
	font-weight: bold;
	padding: 0.5em 0.75em;
	border: 2px solid var(--primary);
	border-radius: 0.75em;
	transition: all 0.2s ease-in-out;
	color: #fff;

	&:hover {
		background-color: var(--quinary);
		border: 2px solid var(--quinary);
	}
	&:active {
		transform: scale(0.95);
	}
`;

export const ButtonText = styled.button`
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	border: 0;
	vertical-align: middle;
	text-decoration: none;
	font-family: inherit;
	box-sizing: border-box;
	color: var(--primary);
	font-weight: bold;
	padding: 0.5em 0.75em;
	transition: all 0.2s ease-in-out;
	background-color: transparent;
	&:hover {
		color: var(--quinary);
		text-decoration: underline;
	}
	&:active {
		transform: scale(0.95);
	}
`;
interface Props {
	w?: string;
}

export const ExperienceCard = styled.div<Props>`
	width: ${(props) => (props.w ? props.w : '31%')};
	border: 1px solid var(--quaternary);
	border-radius: 0.5em;

	transition: all 0.3s ease-in-out;

	&.active {
		width: 100%;
		order: -1;
	}
	@media (max-width: 1400px) {
		width: 48%;
	}
	@media (max-width: 1180px) {
		width: 48%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
	@media (max-width: 425px) {
		width: 100%;
	}
`;

export const ExperienceCardHeader = styled.div`
	height: 5vh;
	width: 100%;
	background-color: var(--quaternary);
`;
export const ExperienceCardContent = styled.div`
	padding: 1rem;
	transition: height 0.3s ease-in-out;
	heigth: fit-content;
`;
export const ExperienceCardFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0.5rem;
	border-top: 1px solid var(--quaternary);
`;

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	column-gap: 1rem;
	row-gap: 1.5rem;
`;

export const FormGroup = styled.div<Props>`
	width: ${(props) => (props.w ? props.w : '100%')};
	display: flex;
	flex-direction: column;
`;

export const InputButton = styled.button`
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    font-family: inherit;
    box-sizing: border-box;
    background-color: transparent;
    font-weight: bold;
    padding: 0.5em 0.75em;
    border: 2px solid var(--primary);
    border-radius: 0.75em;
    transition: all 0.2s ease-in-out;
`;


export const Input = styled.input`
    outline: none;
    width: 100%;
    border: 1px solid var(--primary);
    border-radius: 0.5em;
    padding: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    &:focus {
        border: 1px solid var(--secondary);
    }
`;
export const TextArea = styled.textarea`
    outline: none;
    width: 100%;
    border: 1px solid var(--primary);
    border-radius: 0.5em;
    padding: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    &:focus {
        border: 1px solid var(--secondary);
    }
`;
export const Label = styled.label`
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:after {
        content: ':';
    }

`;