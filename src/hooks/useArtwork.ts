import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export interface ArtworkDetail {
  id: number;
  titulo: string;
  descricao: string;
  dataCriacao: string;
  nomeArtista: string;
  urlImagem: string;
}

export function useArtwork(id: number) {
  return useQuery<ArtworkDetail, Error>({
    queryKey: ["obra", id],
    queryFn: async () => {
      const { data } = await api.get<ArtworkDetail>(`/obras/${id}/detalhes`);
      return data;
    },
  });
}
