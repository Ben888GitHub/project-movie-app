import ShowMoreText from 'react-show-more-text';

function Overview({ isOverview }) {
	return (
		<div className="m-5">
			<ShowMoreText
				lines={3}
				more="Show more"
				less="Show less"
				expanded={false}
				className="font-display"
				anchorClass="show-more-less-clickable text-blue-500"
				truncatedEndingComponent={'... '}
			>
				<p className="text-md md:text-lg lg:text-lg font-display">
					{isOverview}
				</p>
			</ShowMoreText>
		</div>
	);
}

export default Overview;
