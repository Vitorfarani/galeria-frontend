import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export interface Exhibition {
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

export function useExhibitions() {
  return useQuery<Exhibition[], Error>({
    queryKey: ["exposicoes"],
    queryFn: async () => {
      const { data } = await api.get<Exhibition[]>("/exposicoes");
      return data;
    },
    initialData: [], // garante que data nunca seja undefined
  });
}
