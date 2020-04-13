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
}

export {
  pageTitle,
  handleSelect,
};