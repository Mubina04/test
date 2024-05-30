import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform, sortSelectedOrder) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: sortSelectedOrder?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, sortSelectedOrder?.id]
  );
export default useGames;
