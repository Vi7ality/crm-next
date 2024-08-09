import StatusLabel, { Status } from '@/app/components/status-label';

export default function Home() {
  console.log(process.env.CRM_SECRET_KEY)
  return (
    <main>
      <h1 className="text-2xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
