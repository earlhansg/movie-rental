
export const userformData = {
  firstName: {
    label: 'Firstname',
    type: 'text',
    placeholder: 'Enter the firstname',
    value: ''
  },
  lastName: {
    label: 'Lastname',
    type: 'text',
    placeholder: 'Enter the lastname',
    value: ''
  },
  gender: {
    label: 'Gender',
    type: 'select',
    value: 'F',
    options: [
      { label: '(choose one)', value: '' },
      { label: 'Female', value: 'F' },
      { label: 'Male', value: 'M' },
    ]
  },
  address: {
    label: 'Address',
    type: 'text',
    placeholder: 'Enter your address',
    value: ''
  },
  userId: {
    label: 'User ID',
    type: 'text',
    placeholder: 'Enter User ID',
    value: ''
  }
};
