import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

async function Images() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });

  return (<div className="flex flex-wrap gap-4 w-full items-center justify-around">
    {images.map((image, index) => (
      <div key={image.id} className=" flex flex-col w-48">
        <img src={image.url} alt="image" className="my-auto" />
        <div >{image.name}</div>
      </div>))}
  </div>)
}

export default async function HomePage() {



  return (
    <main className="">

      <SignedOut>
        <div className="h-full w-full text-3xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>

    </main>
  );
}
