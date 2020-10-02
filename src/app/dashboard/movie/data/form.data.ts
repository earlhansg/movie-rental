
const date = new Date();

export const formData = {
  borrowedDate: {
    label: 'Date',
    type: 'date',
    value: date
  }
};

export const movieformData = {
  name: {
    label: 'Name',
    type: 'text',
    placeholder: 'Enter movie name',
    value: ''
  },
  ratings: {
    label: 'Ratings',
    type: 'number',
    placeholder: 'Enter movie rating',
    value: 5
  },
  genre: {
    label: 'Genre',
    type: 'text-area',
    placeholder: 'Enter movie genre',
    value: ''
  },
  directed: {
    label: 'Directed',
    type: 'text',
    placeholder: 'Enter name',
    value: ''
  },
  about: {
    label: 'About',
    type: 'text-area',
    placeholder: 'Enter about',
    value: ''
  }
};
