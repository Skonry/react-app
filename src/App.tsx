import Navbar from './components/Navbar';

type AppProps = {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default App;
