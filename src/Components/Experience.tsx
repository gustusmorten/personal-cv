import { useState } from 'react';
import {
	ExperienceCard,
	ExperienceCardHeader,
	ExperienceCardContent,
	ExperienceCardFooter,
	ButtonText,
} from '../styles/common/common';

function Experience({width}: {width: string}) {
	const [extraContent, setExtraContent] = useState(false);
	return (
		<ExperienceCard className={!extraContent ? '' : 'active'} w={width}>
			<ExperienceCardHeader />
			<ExperienceCardContent>
				{!extraContent ? (
					<>
						<h5>Mutuo</h5>
						<h6>Desarrollador Web</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
							quisquam.
						</p>
						<small>Marzo 2021 - Actualidad</small>
					</>
				) : (
					<>
						<h5>Mutuo</h5>
						<h6>Desarrollador Web</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
							quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quae, quisquam.Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae, quisquam.Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Quae, quisquam.
						</p>
						<small>Marzo 2021 - Actualidad</small>
					</>
				)}
			</ExperienceCardContent>
			<ExperienceCardFooter>
				<ButtonText
					onClick={() => {
						setExtraContent(!extraContent);
						window.location.replace("/#experience");
					}}
				>
					{extraContent ? 'Ver menos' : 'Ver más'}
				</ButtonText>
			</ExperienceCardFooter>
		</ExperienceCard>
	);
}

export default Experience;
