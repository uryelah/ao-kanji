import { handleSelect } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof handleSelect).toBe('function');
});

it('is has 2 parameters', () => {
  expect(handleSelect.length).toBe(2);
});

let propagation = true;

const event = {
  target: {
    value: '',
  },
  stopPropagation: () => {
    propagation = false;
  }
};

let actionColateral = null;

const actions = {
  groupByGrade: () => {
    actionColateral = 'grade';
  },
  groupByMacquarie: () => {
    actionColateral = 'macquarie';
  },
  groupByAP: () => {
    actionColateral = 'ap exam';
  },
};

it('call different functions from its second argument depending on the first argument', () => {
  event.target.value = 'grade';

  handleSelect(event, actions)

  expect(actionColateral).toBe('grade');
});

it('call different functions from its second argument depending on the first argument', () => {
  event.target.value = 'macquarie';

  handleSelect(event, actions)

  expect(actionColateral).toBe('macquarie');
});

it('call different functions from its second argument depending on the first argument', () => {
  event.target.value = 'ap exam';

  handleSelect(event, actions)

  expect(actionColateral).toBe('ap exam');
});
