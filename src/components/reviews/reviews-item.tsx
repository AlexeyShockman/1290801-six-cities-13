import React from 'react';
import {TReview} from '../../types/reviews';

type ReviewsItemProps = {
	review: TReview;
}
function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
	const {
		comment,
		date,
		rating,
		user
	} = review;
	const humanizedDate = (new Date(date)).toLocaleString('en-US', {month: 'long', year: 'numeric'});

	return (
		<li className="reviews__item">
			<div className="reviews__user user">
				<div className="reviews__avatar-wrapper user__avatar-wrapper">
					<img
						className="reviews__avatar user__avatar"
						src={user.avatarUrl}
						width={54}
						height={54}
						alt="Reviews avatar"
					/>
				</div>
				<span className="reviews__user-name">{user.name}</span>
				{user.isPro && <span className="offer__user-status">Pro</span>}
			</div>
			<div className="reviews__info">
				<div className="reviews__rating rating">
					<div className="reviews__stars rating__stars">
						<span style={{width: `${rating * 20}%`}}/>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<p className="reviews__text">
					{comment}
				</p>
				<time className="reviews__time" dateTime="2019-04-24">
					{humanizedDate}
				</time>
			</div>
		</li>
	);
}

export default ReviewsItem;
