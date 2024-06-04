import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform, sortOrder) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: sortOrder,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, sortOrder]
  );
export default useGames;
