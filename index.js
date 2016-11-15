const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className: "oldercoaster"},
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
        React.createElement('ul', {},
        [
          React.createElement('li', {}, 'Agnes'),
          React.createElement('li', {}, 'Muriel')
        ]
        )
      )
  }
})

const InFrontOfYou = React.createClass({
  render() {
    return React.createElement('div', {},
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, ["Sometimes, the solution is ",
        React.createElement('strong', {}, "right in front of you.")
      ])
    )
  }
})

// const ButcherShop = React.createClass({
//   render() {
//     return React.createElement('div', {className: "butcher-shop"},
//       React.createElement('p', {}, "Hello! We have the following products for sale today:"),
//       React.createElement('ul', {},
//         [
//           React.createElement('li', {}, 'Tenderloin'),
//           React.createElement('li', {}, 'Short ribs'),
//           React.createElement('li', {}, 'Beef shin'),
//           React.createElement('li', {}, 'Ribeye'),
//         ]
//     )
//   )
//   }
// })

const ButcherShop = React.createClass({
  render() {
    return React.createElement('div', {className: "butcher-shop"},
      React.createElement('p', {}, "Hello! We have the following products for sale today:"),
      React.createElement('ul', {},
        BUTCHER_PRODUCTS.map(function(product) {
        return React.createElement("li", {}, product);
      })))
        // [
        //   React.createElement('li', {}, 'Tenderloin'),
        //   React.createElement('li', {}, 'Short ribs'),
        //   React.createElement('li', {}, 'Beef shin'),
        //   React.createElement('li', {}, 'Ribeye'),
        // ]
    

  }
})


// const ShoppingList = React.createClass({
//   render() {
//     return React.createElement('ul', {}, [
//       React.createElement('li', {}, 'Bananas'),
//       React.createElement('li', {}, 'Vanilla ice cream'),
//       React.createElement('li', {}, 'Chocolate'),
//     ]);
//   }
// });


// const nestedButtons = React.createElement('div', {}, [
//   React.createElement(Button),
//   React.createElement(Button),
// ]);

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
