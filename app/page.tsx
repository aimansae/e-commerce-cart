import Nav from "./components/Nav";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:mx-auto">
      <Nav/>
      <ProductSection></ProductSection>
      
    </main>
  );
}
