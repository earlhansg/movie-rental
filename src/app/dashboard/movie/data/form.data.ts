
const date = new Date();

export const formData = {
  returnDate: {
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
  status: {
    label: 'Status',
    type: 'select',
    value: 'new',
    options: [
      { label: '(choose one)', value: '' },
      { label: 'Upcoming', value: 'upcoming' },
      { label: 'Trending', value: 'trending' },
      { label: 'New', value: 'new' }
    ]
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
