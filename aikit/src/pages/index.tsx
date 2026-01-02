import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function RedirectContent() {
  if (ExecutionEnvironment.canUseDOM) {
    window.location.replace('/docs/intro');
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
      <Heading as="h1">Redirecting to documentation...</Heading>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Redirecting...">
      <BrowserOnly fallback={<RedirectContent />}>
        {() => <RedirectContent />}
      </BrowserOnly>
    </Layout>
  );
}
