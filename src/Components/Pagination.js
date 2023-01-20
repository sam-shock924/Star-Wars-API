export const Pagination = ({ totalPosts, dataPerPage, setCurrentPage }) => {
	let pages = [];

	for (let i = 1; i <= Math.ceil(totalPosts / dataPerPage); i++) {
		pages.push(i);
	}

	return (
		<div>
			{pages.map((page, index) => {
				return (
					<button
						className='page-buttons'
						key={index}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
};
