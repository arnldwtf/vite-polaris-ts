import '@shopify/polaris/build/esm/styles.css';
import './App.css';

import {
  AppProvider,
  Card,
  Page,
} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import AlertButton from './components/Button';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Home page">
        <Card>
          <AlertButton />
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
