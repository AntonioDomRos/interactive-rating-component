import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import RatingContext from '../context/RatingContext';
import StarIcon from '../images/icon-star.svg';

function Rating() {
	const { stars, setstars } = useContext(RatingContext);
	const [navigate, setnavigate] = useState(false);

	const handleChange = (e) => {
		setstars(Number(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(stars);
		setnavigate(true);
	};

	if (navigate) {
		return <Navigate to={'/thankful'} />;
	}

	return (
		<div className="main">
			<article className="main-container">
				<section className="front-section dark-bg">
					<img className="star-img" src={StarIcon} alt="" aria-hidden="true" />
					<h1>How did we do?</h1>
					<p>
						Please let us know how we did with your support request. All
						feedback is appreciated to help us improve our offering!
					</p>
					<section className="rating-numbers">
						<input
							name="rating"
							className="radio-btn"
							value="1"
							type="radio"
							id="one"
							onChange={handleChange}
							checked={stars === 1}
						></input>
						<label className="rating-number one default-active" htmlFor="one">
							1
						</label>
						<input
							name="rating"
							className="radio-btn"
							value="2"
							type="radio"
							id="two"
							onChange={handleChange}
							checked={stars === 2}
						></input>
						<label className="rating-number two" htmlFor="two">
							2
						</label>
						<input
							name="rating"
							className="radio-btn"
							value="3"
							type="radio"
							id="three"
							onChange={handleChange}
							checked={stars === 3}
						></input>
						<label className="rating-number three " htmlFor="three">
							3
						</label>
						<input
							name="rating"
							className="radio-btn"
							value="4"
							type="radio"
							id="four"
							onChange={handleChange}
							checked={stars === 4}
						></input>
						<label className="rating-number four" htmlFor="four">
							4
						</label>
						<input
							name="rating"
							className="radio-btn"
							value="5"
							type="radio"
							id="five"
							onChange={handleChange}
							checked={stars === 5}
						></input>
						<label className="rating-number five" htmlFor="five">
							5
						</label>
					</section>
					<Link to="/thankful">
						<button className="btn" onClick={handleSubmit}>
							submit
						</button>
					</Link>
				</section>
			</article>
		</div>
	);
}

export default Rating;
