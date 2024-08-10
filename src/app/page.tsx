import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  console.log(process.env.CRM_SECRET_KEY);
  return (
    <main>
      <h1 className="text-2xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
