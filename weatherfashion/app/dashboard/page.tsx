import { lusitana } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
 
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Calculator
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Input" value={0} type="" />
        <Card title="Output" value={0} type="" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">

      </div>
    </main>
  );
}