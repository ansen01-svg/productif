import AppRouter from "./routes";
import AppStoreProvider from "./store_provider";
import AppThemeProvider from "./mui_theme_provider";

function App() {
  return (
    <div className="MyTodos">
      <AppStoreProvider>
        <AppThemeProvider>
          <AppRouter />
        </AppThemeProvider>
      </AppStoreProvider>
    </div>
  );
}

export default App;
