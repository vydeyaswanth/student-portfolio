import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/ui/page-components/layout';

export default function App({ Component, pageProps }) {
  return (
					<Layout
						layout={pageProps.layout || 'authenticated'}
						head={pageProps.head || ''}
					>
						<Component {...pageProps} />
					</Layout>
	);
}
