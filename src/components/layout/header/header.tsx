import styles from './header.module.scss';
import { List, TList } from '@/components/ui/list';

export type THeader = {
	pages?: TList;
	contacts?: TList;
};

export function Header({ pages, contacts }: THeader) {
	return (
		<header className={styles.header}>
			<div className={styles.row}>
				<div className={styles.column}>
					{pages && (
						<nav className={styles.nav}>
							<List {...pages} />
						</nav>
					)}
				</div>
				<div className={styles.column}>logo</div>
				<div className={styles.column}>
					{contacts && (
						<div className={styles.contacts}>
							<List {...contacts} />
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
