import ExhibitionsList from "../../components/ExhibitionsList";

export const metadata = {
  title: "Exposições – GaleriaX",
};

export default function ExposicoesPage() {
  return (
    <>
      <h1 className="container mx-auto px-6 pt-12 text-3xl font-heading text-primary">
        Exposições
      </h1>
      <ExhibitionsList />
    </>
  );
}
