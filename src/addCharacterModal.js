import { CapacitorHttp } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

// Home Page (List of Characters)
class HomePage extends HTMLElement {
    constructor() {
        super();
        this.characters = [];
    }

    async fetchPlanetsData() {
        const loader = document.querySelector('ion-loading');
        await loader.present();

        try {
            // Fetch characters from API
            const response = await CapacitorHttp.get(
                {
                    url: 'https://rickandmortyapi.com/api/character'
                }
            );

            const { info, results } = response.data;
            this.paginationInfo = info; 
            console.log('Got list of characters info:', info);

            this.characters = results.map((character) => ({
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                type: character.type,
                gender: character.gender,
                origin: character.origin,
                location: character.location,
                image: character.image,
                episode: character.episode,
                url: character.url,
                created: character.created
            }));
            
            console.log('Got list of characters:', this.characters);

            await addCharacters(this.characters);

            const savedCharacters = await getCharacters();

            console.log('getCharacters:', savedCharacters);

            if (!Array.isArray(savedCharacters)) {
                console.error('Saved characters is not an array:', savedCharacters);
                return;
            }

            console.log('saved characters:', savedCharacters);

            const charactersMap = new Map();

            savedCharacters.forEach((character) => charactersMap.set(character.id, character));
            this.characters.forEach((character) => charactersMap.set(character.id, character));

            const mergedCharacters = Array.from(charactersMap.values());
            await addCharacters(mergedCharacters);

            this.renderCharacters(mergedCharacters);
        } catch (error) {
            console.error('Error while getting response from character endpoint:', error);
        } finally {
            await loader.dismiss();
        }
    }

    async connectedCallback() {
        await this.fetchPlanetsData();
        const savedCharacters = getCharacters() || [];
        let allCharacters = (typeof savedCharacters !== 'undefined' ? savedCharacters : []).concat(savedCharacters);

        // Add event listener for sorting
        document.getElementById('sortCriteria').addEventListener('ionChange', (event) => {
            const criteria = event.detail.value;
            this.sortCharacters(allCharacters, criteria);
        });

    }

    sortCharacters(characters, criteria) {
        switch (criteria) {
            case 'name_asc':
                console.log(`Before sorting ${criteria}`);
                console.log(characters);
                characters.sort((a, b) => a.name.localeCompare(b.name));
                console.log(`After sorting ${criteria}`);
                console.log(characters);
                break;
            case 'name_desc':
                console.log(`Before sorting ${criteria}`);
                console.log(characters);
                characters.sort((a, b) => b.name.localeCompare(a.name));
                console.log(`After sorting ${criteria}`);
                console.log(characters);
                break;
        }
        this.renderCharacters(characters);
    }

    extractMassValue(massString) {
        // Converts mass string to numeric field: '4.8675×10^24 kg'
        const massNumberString = massString.split(' ')[0]; // Get the part before 'kg'
        const massValue = parseFloat(massNumberString.replace('×10^', 'e')); // Replace scientific notation
        return massValue;
    }

    renderCharacters(characters) {
        this.innerHTML = `
        <ion-header>
            <ion-toolbar color="primary" style="text-align: center;">
                <ion-title>All characters</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row>
                    ${characters.map(character => `
                    <ion-col size="5" size-sm="3" size-md="3">
                        <ion-card class="character-card" button href="/character/${character.id}">
                            <ion-img src="${character.image}"></ion-img>
                            <ion-card-header>
                                <ion-card-title>${character.name}</ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                <p><strong>Status:</strong> ${character.status}</p>
                                <p><strong>Species:</strong> ${character.species}</p>
                                <p><strong>Type:</strong> ${character.type || 'N/A'}</p>
                                <p><strong>Gender:</strong> ${character.gender}</p>
                                <p><strong>Origin:</strong> 
                                    ${character.origin.name} 
                                    ${character.origin.url ? `<a href="${character.origin.url}" target="_blank">(Details)</a>` : ''}
                                </p>
                                <p><strong>Location:</strong> 
                                    ${character.location.name} 
                                    ${character.location.url ? `<a href="${character.location.url}" target="_blank">(Details)</a>` : ''}
                                </p>
                                <p><strong>Episodes:</strong></p>
                                <ul>
                                    ${character.episode.map(ep => `<li>${ep}</li>`).join('')}
                                </ul>
                                <p><strong>Created:</strong> ${new Date(character.created).toLocaleDateString()}</p>
                            </ion-card-content>
                            <ion-router-link href="${character.url}">
                                <ion-button shape="round" fill="outline" expand="block" color="blue">More</ion-button>
                            </ion-router-link>
                        </ion-card>
                    </ion-col>
                    `).join('')}
                </ion-row>
            </ion-grid>
        </ion-content>
      `;
    }
}

customElements.define('page-home', HomePage);

// Planets details
/* class PlanetPage extends HTMLElement {
    constructor() {
        super();
        this.planetDetails = null;
    }

    async fetchPlanetsData(planetName) {
        const loader = document.querySelector('ion-loading');
        loader.present();

        const savedPlanets = await getCharacters() || [];
        const planetIdsByName = savedPlanets
            .filter(planet => planet.name === planetName)
            .map(planet => planet.id);
        const firstPlanetId = planetIdsByName.length > 0 ? planetIdsByName[0] : null;

        try {
            const response = await CapacitorHttp.get({
                url: `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${firstPlanetId}`,
                headers: {
                    'x-rapidapi-key': '4e589db3eemshfcb89249b9eca45p1b7208jsn15f5635d60bf',
                    'x-rapidapi-host': 'planets-info-by-newbapi.p.rapidapi.com'
                }
            });
            const data = await response.data;
            console.log('Got planet details by id `${planetsId}` response:', data);
            this.planetDetails = {
                name: data.name,
                image: data.imgSrc.img,
                description: data.description,
                link: `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${data.id}`,
                details: {
                    volume: data.basicDetails.volume,
                    mass: data.basicDetails.mass,
                    temperature: "",
                    missions: []
                }
            };
            console.log('details:', this.planetDetails);
        } catch (error) {
            console.error('Error while getting planets response:', error);
        } finally {
            loader.dismiss();
        }
    }

    async connectedCallback() {
        const savedPlanets = await getCharacters() || [];
        const currentHash = window.location.hash; // Getting current hash (i.e, # / item / 123)
        const planetName = currentHash.split('/').pop(); // Getting last element after "/"
        await this.fetchPlanetsData(planetName);
        const planet = savedPlanets.find(p => p.name === planetName);

        if (!planet) {
            this.innerHTML = `
          <ion-header>
              <ion-toolbar>
                  <ion-title>Planet was not found</ion-title>
                  <ion-buttons slot="start">
                      <ion-back-button defaultHref="/"></ion-back-button>
                  </ion-buttons>
              </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
              <p>Sorry, none information was found for this planet.</p>
          </ion-content>
        `;
            return;
        }
        this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>${planet.name}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-breadcrumbs>
                <ion-breadcrumb href="/">Main</ion-breadcrumb>
                <ion-breadcrumb>${planet.name}</ion-breadcrumb>
            </ion-breadcrumbs>
            <ion-img src="${planet.image}"></ion-img>
            <ion-card>
                <ion-card-content>
                    <p>${planet.description}</p>
                </ion-card-content>
            </ion-card>
            <ion-chip color="primary">
                <ion-label>Temperature: ${planet.details.temperature}</ion-label>
            </ion-chip>
            <ion-chip color="secondary">
                <ion-label>Mass: ${planet.details.mass}</ion-label>
            </ion-chip>
            <ion-chip color="tertiary">
                <ion-label>Distance from Sun: ${planet.details.distance}</ion-label>

            </ion-chip>
            <ion-chip color="success">
                <ion-label>Discovery date: ${planet.details.discovery}</ion-label>
            </ion-chip>
            <ion-accordion-group>
                <ion-accordion value="atmosphere">
                    <ion-item slot="header">
                        <ion-label>Chemical composition of the atmosphere</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <p>${planet.details.atmosphere}</p>
                    </div>
                </ion-accordion>
                <ion-accordion value="satellites">
                    <ion-item slot="header">
                        <ion-label>Satelites</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <p>${planet.details.satellites}</p>
                    </div>
                </ion-accordion>
            </ion-accordion-group>
        </ion-content>
        `;
    }
    static get observedAttributes() {
        return ['name'];
    }
    attributeChangedCallback() {
        this.connectedCallback();
    }
}
customElements.define('planet-page', PlanetPage); */

// Getting link to modal window
const addPlanetModal =
    document.querySelector('ion-modal[trigger="add-planet-modal"]');
// Getting button's links
const closeModalButton =
    addPlanetModal.querySelector('#close-add-planet-modal');
const confirmAddPlanetButton =
    addPlanetModal.querySelector('#confirm-add-planet');

// Event listener for "Close"
closeModalButton.addEventListener('click', async () => {
    await addPlanetModal.dismiss();
});

// Event listener for "Add"
confirmAddPlanetButton.addEventListener('click', () => {
    // getting links for modal's elements
    const nameInput = addPlanetModal.querySelector('#planetName');
    const imageInput = addPlanetModal.querySelector('#planetImage');
    const descriptionInput = addPlanetModal.querySelector('#planetDescription');
    const temperatureInput = addPlanetModal.querySelector('#planetTemperature');
    const massInput = addPlanetModal.querySelector('#planetMass');
    const atmosphereInput = addPlanetModal.querySelector('#planetAtmosphere');
    const satellitesInput = addPlanetModal.querySelector('#planetSatellites');
    const missionsInput = addPlanetModal.querySelector('#planetMissions');

    const newPlanet = {
        name: nameInput.value.trim(),
        image: imageInput.value.trim(),
        description: descriptionInput.value.trim(),
        details: {
            temperature: temperatureInput.value.trim(),
            mass: massInput.value.trim(),
            atmosphere: atmosphereInput.value.trim(),
            satellites: satellitesInput.value.split(',').map(s => s.trim()),
            missions: missionsInput.value.split(',').map(m => m.trim())
        }
    };

    // Obligatory fields
    if (!newPlanet.name || !newPlanet.image || !newPlanet.description) {
        alert('Please fill up all necessary fields.');
        return;
    }

    // Getting array of save planets from Preferences or creating empty array
    const savedPlanets = getCharacters() || [];
    // Add new planet to Preferences
    addCharacter(newPlanet);
    // Close modal window
    addPlanetModal.dismiss();

    // Clearing form's fields
    nameInput.value = '';
    imageInput.value = '';
    descriptionInput.value = '';
    temperatureInput.value = '';
    massInput.value = '';
    atmosphereInput.value = '';
    satellitesInput.value = '';
    missionsInput.value = '';

    const homePage = document.querySelector('page-home');
    if (homePage) {
        homePage.connectedCallback();
    }
});

async function addCharacter(character) {
    const { value } = await Preferences.get({ key: 'characters' });
    const characters = value ? JSON.parse(value) : [];
    const characterIndex = characters.findIndex(p => p.id === character.id);
    if (characterIndex !== -1) {
        characters[characterIndex] = character;
    } else {
        characters.push(character);
    }

    await Preferences.set({
        key: 'characters',
        value: JSON.stringify(characters)
    });
}

async function addCharacters(charactersToAdd) {
    const { value } = await Preferences.get({ key: 'characters' });
    const existingcharacters = value ? JSON.parse(value) : [];

    const characterMap = new Map(existingcharacters.map(character => [character.id, character]));

    charactersToAdd.forEach(character => {
        characterMap.set(character.id, character);
    });

    const updatedcharacters = Array.from(characterMap.values());

    await Preferences.set({
        key: 'characters',
        value: JSON.stringify(updatedcharacters)
    });
}

async function getCharacters() {
    const { value } = await Preferences.get({ key: 'characters' });
    console.log('in getCharacters:', value);
    return JSON.parse(value);
}
