const CLASSIFICATION_OPTIONS = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
}

const ANIMAL_OPTIONS = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}

function unhideAll(animals, classifications) {
  [animals, classifications].forEach(selection => {
    [...selection.children].forEach(option => {
      option.removeAttribute('hidden');
    })
  });
}

document.addEventListener('DOMContentLoaded', (e) => {
  const classifications = document.getElementById('animal-classifications');
  const animals = document.getElementById('animals');

  function hideOptions(targetValue, selectionType) {
    unhideAll(animals, classifications) 
    let matchingOptions;

    if (selectionType.id === 'animals') {
      matchingOptions = CLASSIFICATION_OPTIONS[targetValue];
    } else if (selectionType.id === 'animal-classifications') {
      matchingOptions = ANIMAL_OPTIONS[targetValue];
    }

    [...selectionType.children].forEach(selectionOption => {
      if (!matchingOptions.includes(selectionOption.value)) {
        selectionOption.setAttribute('hidden', 'true');
      }
    });
  }

  classifications.addEventListener('change', (e) => {
    let targetIndex = e.target.selectedIndex;
    let currentValue = e.target.options[targetIndex].value;
    hideOptions(currentValue, animals);
  });

  animals.addEventListener('change', (e) => {
    let targetIndex = e.target.selectedIndex;
    let currentValue = e.target.options[targetIndex].value;
    hideOptions(currentValue, classifications);
  });
});