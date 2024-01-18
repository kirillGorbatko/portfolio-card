import styles from './list.module.scss';
import { Button, TButton } from '../button';

export type TList = {
	links: TButton[];
};

export function List({ links }: TList) {
	return (
		<ul className={styles.list}>
			{links.map((item) => (
				<li className={styles.item}>
					<Button {...item} />
				</li>
			))}
		</ul>
	);
}
