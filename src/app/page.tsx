import { Banner } from "@/components/common/Banner";
import { Catalog } from "@/components/common/Catalog";
import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <main className="h-full min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Banner />
      <Catalog />
    </main>
  );
}
