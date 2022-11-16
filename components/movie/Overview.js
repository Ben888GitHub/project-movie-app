import ShowMoreText from 'react-show-more-text';

function Overview({ isOverview }) {
	return (
		<div className="m-5">
			<ShowMoreText
				lines={3}
				more="Show more"
				less="Show less"
				expanded={false}
				className="font-display text-md md:text-lg lg:text-lg"
				anchorClass="show-more-less-clickable text-blue-500 dark:text-blue-700"
				truncatedEndingComponent={'... '}
			>
				<p>{isOverview}</p>
			</ShowMoreText>
		</div>
	);
}

export default Overview;
