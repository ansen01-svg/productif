import AppRouter from "./routes";
import AppStoreProvider from "./store_provider";

function App() {
  return (
    <div className="MyTodos">
      <AppStoreProvider>
        <AppRouter />
      </AppStoreProvider>
    </div>
  );
}

export default App;
