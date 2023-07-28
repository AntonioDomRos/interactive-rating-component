import React, { useContext } from 'react';
import RatingContext from '../context/RatingContext';
import ThankfulIcon from '../images/illustration-thank-you.svg';

export default function Thankful() {
	const { stars } = useContext(RatingContext);
	return (
		<div className="main">
			<article className="main-container">
				<section className="back-section dark-bg">
					<section className="back-section-inner">
						<img src={ThankfulIcon} alt="" aria-hidden="true" />
						<p className="result-text">You selected {stars} out of 5</p>
						<section className="thankyou-section">
							<h1>Thank you!</h1>
							<p>
								We appreciate you taking the time to give a rating. If you ever
								need more support, don’t hesitate to get in touch!
							</p>
						</section>
					</section>
				</section>
			</article>
		</div>
	);
}
