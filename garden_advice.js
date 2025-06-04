// Hardcoded values for the season and plant type
// stores answers inputted by user in variables named season/plantType.
let season = prompt('Enter a season: ', 'summer');
let plantType = prompt('Enter a type of pant: ', 'flower');

// Store advice in an object for multiple plants and seasons.
//seasons
const seasonAdvice = {
  summer: 'Water your plants regularly and provide some shade.\n',
  winter: 'Protect your plants from frost with covers.\n',
};
//plant
const plantTypeAdvice = {
  flower: 'Use fertiliser to encourage blooms.',
  vegetable: 'Keep an eye out for pests!',
};
// plants that thrive in the given season.
const plantSuggestion = {
  summer: {
    flower:
      'Flowers that are tolerant to heat include: "Dahlia", "Marigolds", and "Zinnias".',
    vegetable:
      'Vegetable that thrive in summer include: "Cucumber", "Tomatoes", and "Beans".',
  },

  winter: {
    flower:
      'Flowers that thrive in winter include: "Camellia", "Pansy", and "Cyclamen".',
    vegetable:
      'Vegetable that thrive in winter include: "Carrots", "Spinach", and "Cabbage".',
  },
};

// determine advice for season
// checks if there is a deffintion for the season
// if there is return it, otherwise return with no advice
function adviceForSeason(season) {
  const adviceForSeason = seasonAdvice[season];
  if (adviceForSeason) {
    return adviceForSeason;
  }
  return 'No advice for this season.\n';
}

// Determine advice based on the plant type
// checks if there is a deffintion for the  plant type
// if there is return it, otherwise return with no advice
function adviceForPlantType(plantType) {
  const adviceForplantType = plantTypeAdvice[plantType];
  if (adviceForplantType) {
    return adviceForplantType;
  }
  return 'No advice for this type of plant.';
}

// Suggest plants that thrive in the season
// checks if there are plant suggestions for the season
// if there are return the suggestions, otherwise return nothing.
function plantSuggestionForSeason(season, plantType) {
  const suggestionForSeason = plantSuggestion[season];
  const suggestionForPlantsOfTypeInSeason = suggestionForSeason[plantType];
  // if there are suggestions for plants of that season and type
  if (suggestionForSeason && suggestionForPlantsOfTypeInSeason) {
    return '\n' + suggestionForPlantsOfTypeInSeason;
  }
  //dont return anything if there is no suggestion
  return '';
}

// get advice for inputted season, inputted plant type, and suggestions of plant type for that given season
let advice =
  adviceForSeason(season) +
  adviceForPlantType(plantType) +
  plantSuggestionForSeason(season, plantType);
// Log the generated advice to the console
console.log(advice);