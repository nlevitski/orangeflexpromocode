import { Fragment } from 'react';

export const Splitter = ({ str }: { str: string }) => {
	return str.split('\n').map((line, i, arr) => (
		<Fragment key={i}>
			{line}
			{i < arr.length - 1 && <br />}
		</Fragment>
	));
};
