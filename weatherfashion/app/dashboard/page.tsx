import { lusitana } from '@/app/ui/fonts';
import { InputCard, OutputCard } from '@/app/ui/dashboard/cards';
 
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Calculator
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <InputCard title="Calculation Input"/>
        <OutputCard title="Output"/>
      </div>
    </main>
  );
}