import Nav from "./components/Nav";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:mx-auto">
      <Nav />
      <ProductSection></ProductSection>
    </main>
  );
}
