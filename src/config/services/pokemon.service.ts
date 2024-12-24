import { GetAllPokemonResponse } from "../../store/modules/pokemon/pokemonTypes";
import { api, ResponseAPI } from "./api.service";

export async function fetchAllPokemonService(): Promise<
  ResponseAPI<GetAllPokemonResponse>
> {
  try {
    const response = await api.get("/pokemon");

    return {
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      ok: error.response.data.ok,
      message: error.response.data.message,
    };
  }
}
