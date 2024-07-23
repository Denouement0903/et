import { Layout } from '../../libs/components/Layout';
import '../../libs/components/styles/globals.css';
import { Navbar } from '../../libs/components/NavBar';
import { Footer } from '../../libs/components/Footer';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const styles = useStyles();

  return (
    <Layout>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.content}>
          {children}
        </main>
        <Footer />
      </div>
    </Layout>
  );
}