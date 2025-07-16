import Gallery from "../../../components/Gallery";

export const metadata = {
  title: "Galeria de Obras – GaleriaX",
};

export default function GaleriaPage() {
  return (
    <>
      <h1 className="container mx-auto px-6 pt-12 text-3xl font-heading text-primary">
        Galeria de Obras
      </h1>
      <Gallery />
    </>
  );
}
