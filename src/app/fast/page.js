import { SlowComponent } from "@/components/slowComp";
import { Suspense } from "react";
import LoadingComp from "@/components/loadingcomp";
export default function FastPage() {
  return (
    <main>
      <h1>Fast Page</h1>
      <Suspense fallback={<LoadingComp />}>
        <SlowComponent />
      </Suspense>
    </main>
  );
}
