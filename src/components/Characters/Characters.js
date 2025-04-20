import React, { useEffect } from "react";
import { IonContent } from "@ionic/react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import aos from "aos";
import "aos/dist/aos.css";
import "./Characters.css";

import Filter from "./Filter/Filter";
import Popup from "./Popup/Popup";
import CharacterCard from "./CharacterCard";

import useCharacters from "./hooks/useCharacters";
import useModal from "./hooks/useModal";

const Characters = () => {
  const {
    characters,
    page,
    pages,
    setPage,
    filters,
    setFilters,
    filterOptions,
  } = useCharacters();

  const {
    isOpen,
    selectedCharacter,
    openModal,
    closeModal,
  } = useModal();

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <IonContent>
      <div className="characters" id="characters">
        <div className="characters__container container">
          <h1 className="container__title">Characters</h1>

          <Filter
            filterOptions={filterOptions}
            filters={filters}
            onChange={setFilters}
          />

          <Stack spacing={2} className="container__pagination">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => openModal(character)}
              />
            ))}
          </Stack>

          <Popup isOpen={isOpen} info={selectedCharacter} handleClose={closeModal} />

          <Pagination
            className="characters__container__navigation container__navigation"
            count={pages}
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </div>
      </div>
    </IonContent>
  );
};

export default Characters;
