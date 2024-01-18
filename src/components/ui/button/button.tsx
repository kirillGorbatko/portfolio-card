import { ReactNode, ButtonHTMLAttributes, LinkHTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';
import classNames from 'classnames';

export type TButton = {
	icon?: ReactNode;
	iconBack?: ReactNode;
	text?: string;
	textBack?: string;
	type?: 'submit' | 'reset' | undefined;
} & (
	| ButtonHTMLAttributes<HTMLButtonElement>
	| LinkHTMLAttributes<HTMLAnchorElement>
);

const ButtonIn = ({ text, textBack, icon, iconBack }: TButton) => {
	return (
		<>
			<span className={classNames(styles.inner, styles.front)}>
				{text}
				{icon}
			</span>
			<span className={classNames(styles.inner, styles.back)}>
				{textBack || 'Link'}
				{iconBack}
			</span>
		</>
	);
};

export function Button({ text, textBack, icon, iconBack, ...props }: TButton) {
	const textProps = { text, textBack, icon, iconBack };

	if ('href' in props) {
		return (
			<Link
				className={styles.button}
				href={props.href || '#'}
				{...(props as LinkHTMLAttributes<HTMLAnchorElement>)}
			>
				<ButtonIn {...textProps} />
			</Link>
		);
	}

	return (
		<button
			type={props.type ? props.type : 'button'}
			className={styles.button}
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			<ButtonIn {...textProps} />
		</button>
	);
}
