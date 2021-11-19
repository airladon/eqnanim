const figure = new Fig.Figure({
  color: [0.8, 0.8, 0.8, 1],
  backgroundColor: [0, 0, 0, 1],
});

const eqn = figure.add(
  {
    make: 'collections.equation',
    elements: {
      line: { symbol: 'line', arrow: { start: 'triangle' } },
      unknown: ' ? ',
      equals: ' = ',
      plus: ' + ',
      x: { color: [1, 1, 0, 1] },
    },
    scale: 1.6,
    formDefaults: { alignment: { fixTo: 'equals' } },
    forms: {
      0: ['x', 'plus', '7', 'equals', 'unknown'],
      1: [{ topComment: ['x', '9', 'line', 0.1] }, 'plus', '7', 'equals', 'unknown'],
      2: ['9', 'plus', '7', 'equals', 'unknown'],
      3: ['9', 'plus', '7', 'equals', { topComment: ['unknown', '16', 'line', 0.1] }],
      4: ['9', 'plus', '7', 'equals', '16'],
    },
    position: [0.1, -0.1],
  },
);

const next = figure.add({
  make: 'collections.button', label: 'Next', position: [0.7, -0.8],
});

next.notifications.add('touch', () => eqn.animations.new().nextForm(1).start());


