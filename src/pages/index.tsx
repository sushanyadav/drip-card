import { DripCard } from '@/common/components/DripCard';
import { PageHead } from '@/common/components/PageHead';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D0E13] bg-[url('/bg.svg')] bg-bottom bg-no-repeat xl:bg-contain">
      <PageHead
        removeTitleAppend
        description="Home page description"
        name="Home"
      />
      <DripCard>
        <DripCard.Header
          description="Reload window to start animation again."
          heading="you're almost there"
        />
        <DripCard.Body className="text-base">
          Drip card body contents, Drip card body contents, Drip card body
          contents,, Drip card body contents,, Drip card body contents,, Drip
          card body contents,, Drip card body contents,, Drip card body
          contents,, Drip card body contents,, Drip card body contents,, Drip
          card body contents,, Drip card body contents,, Drip card body
          contents,, Drip card body contents,, Drip card body contents,, Drip
          card body contents,, Drip card body contents,, Drip card body
          contents.
        </DripCard.Body>
        <DripCard.Footer className="text-sm">
          Drip card footer contents, Drip card footer contents, Drip card footer
          contents, Drip card footer contents, Drip card footer contents, Drip
          card footer contents, Drip card footer contents, Drip card footer
          contents, Drip card footer contents, Drip card footer contents, Drip
          card footer contents, Drip card footer contents, Drip card footer
          contents, Drip card footer contents.
        </DripCard.Footer>
      </DripCard>
    </div>
  );
}
