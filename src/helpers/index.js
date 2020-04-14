const pageTitle = {
  6: ['Grade level Kanji', 'App__header App__header--6', 'grade='],
  11: ['Macquarie study list', 'App__header App__header--11', 'list=mac:c'],
  20: ['AP exam list', 'App__header App__header--20', 'list=ap:c'],
};

const handleSelect = (e, actions) => {
  let { value } = e.target;
  value = value.toLowerCase();

  if (value === 'grade') {
    actions.groupByGrade();
  } else if (value === 'macquarie') {
    actions.groupByMacquarie();
  } else if (value === 'ap exam') {
    actions.groupByAP();
  }
};

const toggleSorting = (e, order, toggleSort) => {
  e.stopPropagation();

  toggleSort(order);
};

const updateFilter = (number, filterBy) => {
  filterBy(number);
};

const clickHandler = (kanji, history, eleState) => {
  history.push(`/kanjis/${kanji}`, eleState);
};

const makeRequest = ({ actions, match, state }) => {
  const { params } = match;
  let url;
  if (params.grade_num) {
    url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?${pageTitle[state.groupBy.length][2]}${params.grade_num}`;
  } else if (params.word) {
    url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${params.word}`;
  }

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
      'x-rapidapi-key': 'c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f',
    },
  };

  actions.fetchSubscription(url, options);
};

const handleClick = (grade, group, history, state) => {
  // eslint-disable-next-line no-nested-ternary
  const path = group.includes('grade') ? 'grade' : (group.includes('ap') ? 'ap-chapter' : 'chapter');
  history.push(`/${path}/${grade}`, state);
};

const fetchKanjiGroup = (actions, grade, group) => {
  const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?${group}${grade}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
      'x-rapidapi-key': 'c6d4c3d3d5msh0980a85de22153ap1c95ecjsn1ea8a3f1317f',
    },
  };

  actions.fetchSubscription(url, options);
};

const handleFilter = (e, input, updateFilter, filterCallback) => {
  const strokes = parseInt(input.value, 10);

  updateFilter(strokes, filterCallback);

  e.preventDefault();
};

const isOn = (n, sorting) => {
  const type = n < 0 ? 'down' : 'up-alt';

  if (sorting === n) {
    return `fas fa-sort-amount-${type} fas-on`;
  }

  return `fas fa-sort-amount-${type} fas-off`;
};

const defineFilter = filter => {
  if (filter) {
    return (
      element => element.kanji.stroke === filter
    );
  }

  return (
    element => element
  );
};

export {
  isOn,
  pageTitle,
  handleClick,
  defineFilter,
  handleFilter,
  makeRequest,
  clickHandler,
  updateFilter,
  handleSelect,
  toggleSorting,
  fetchKanjiGroup,
};
