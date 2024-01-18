import { AppProps } from 'next/app';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import localFont from 'next/font/local';
import '@/styles/globals.scss';

const MOCK_HEADER = {
	pages: {
		links: [
			{
				text: 'Stills',
				href: '/',
			},
			{
				text: 'Motion',
				href: '/',
			},
			{
				text: 'About',
				href: '/about',
			},
		],
	},
	contacts: {
		links: [
			{
				text: 'instagram',
				href: '#',
			},
			{
				text: 'Email',
				href: '#',
			},
			{
				text: 'tlgrm',
				href: '#',
			},
		],
	},
};

const headingFont = localFont({
	variable: '--heading-font',
	src: [
		{
			path: '../fonts/Merriweather-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
});
const defaultFont = localFont({
	variable: '--default-font',
	src: [
		{
			path: '../fonts/OpenSans-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>
				{`
					html {
						font-family: ${defaultFont.style.fontFamily};
					}
				`}
			</style>
			<Header {...MOCK_HEADER} />
			<div className="wrapper">
				<div className="base">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</>
	);
}
