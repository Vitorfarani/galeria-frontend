import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export interface GalleryItem {
  id: number;
  titulo: string;
  descricao: string;
  dataCriacao: string;
  nomeArtista: string;
  urlImagem: string;
}

export function useGallery() {
  return useQuery<GalleryItem[], Error>({
    queryKey: ["galeria"],
    queryFn: async () => {
      const { data } = await api.get<GalleryItem[]>("/obras/galeria");
      return data;
    },
    initialData: [],   // 👉 garante que data seja sempre array, nunca undefined
  });
}
