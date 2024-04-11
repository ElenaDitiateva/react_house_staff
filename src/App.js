import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул велюровый",
          img: "chair.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: 549.99,
        },
        {
          id: 2,
          title: "Зеркало",
          img: "mirror.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "interior",
          price: 266.99,
        },
        {
          id: 3,
          title: "Диван бирюзовый",
          img: "sofa1.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "sofas",
          price: 1699.99,
        },
        {
          id: 4,
          title: "Стол журнальный",
          img: "table.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "interior",
          price: 739.99,
        },
        {
          id: 5,
          title: "Диван велюровый",
          img: "sofa3.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "sofas",
          price: 2155.99,
        },
        {
          id: 6,
          title: "Набор из 2х пуфов",
          img: "poufs.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "interior",
          price: 249.99,
        },
        {
          id: 7,
          title: "Диван угловой",
          img: "sofa2.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "sofas",
          price: 3830.00,
        },
        {
          id: 8,
          title: "Стул белый",
          img: "chair3.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: 632.99,
        },
        {
          id: 9,
          title: "Кресло",
          img: "armchair.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: 699.99,
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
    } else {
      this.setState({ currentItems: this.state.items.filter(el => el.category === category) })
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App;
