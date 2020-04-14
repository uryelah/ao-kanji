import { fetchKanjiGroup } from '../../helpers/index.js';

it('is a function', () => {
  expect(typeof fetchKanjiGroup).toBe('function');
});

it('is has 3 parameters', () => {
  expect(fetchKanjiGroup.length).toBe(3);
});

let actionsColateral = false;

const actions = {
  fetchSubscription: () => {
    actionsColateral = true;
  },
};

it('calls its first paramter fetchSubscription property', () => {
  fetchKanjiGroup(actions, 2, 'grade');

  expect(actionsColateral).toBe(true);
});
