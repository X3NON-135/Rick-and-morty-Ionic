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
    pages,
    page,
    setPage,
    filterOptions,
    filters,
    setFilters,
  } = useCharacters();

  const { isOpen, openModal, closeModal, selectedCharacter } = useModal();

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <IonContent>
      <div className="characters" id="characters">
        <div className="characters__container container">
          <h1 className="container__title">Characters</h1>

          <Filter
            {...filterOptions}
            setSpecies={(species) => setFilters((f) => ({ ...f, species }))}
            setStatus={(status) => setFilters((f) => ({ ...f, status }))}
            setGender={(gender) => setFilters((f) => ({ ...f, gender }))}
          />

          <Stack spacing={2} className="container__pagination hide">
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
