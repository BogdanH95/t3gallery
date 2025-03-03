import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    'https://ovdp442lko.ufs.sh/f/6w9q6I7nNtp4zj9WUJHAwmrRXJQkNUWHpcvgOD1ZihVCe8l6',
    'https://ovdp442lko.ufs.sh/f/6w9q6I7nNtp4i4C0gBcvjJscDtmeyAan9uVO3p2SZ4IE5FKf',
    'https://ovdp442lko.ufs.sh/f/6w9q6I7nNtp48VbnGcnwXT02OPkfmq7wJNIRGyCnQVvHbYpo',
  ]

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 w-full items-center justify-around">
        {mockImages.map((image, index) => (
          <div key={image.id + index} className="w-48 p-4 my-auto">
            <img src={image.url} alt="image" className="my-auto" />
          </div>))}
      </div>

    </main>
  );
}
