interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: Props) => {
	return (
		<button
			className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			{...props}
		>
			{props.children}
		</button>
	);
};
