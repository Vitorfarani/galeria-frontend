import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export interface ExhibitionDetail {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  obras: {
    id: number;
    titulo: string;
    urlImagem: string;
  }[];
}

export function useExhibitionDetail(id: number) {
  return useQuery<ExhibitionDetail, Error>({
    queryKey: ["exposicao", id],
    queryFn: async () => {
      const { data } = await api.get<ExhibitionDetail>(`/exposicoes/${id}`);
      return data;
    },
  });
}
