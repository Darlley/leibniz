import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-4">
      <h1 className='text-xl font-bold'><Link href="https://nextui.org/docs/customization/create-theme" target='_blank'>Custom Theme NextUI</Link></h1>
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>
    </main>
  );
}
