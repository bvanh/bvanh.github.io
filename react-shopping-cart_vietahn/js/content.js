class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          thumbnail: "https://colorlib.com/etc/fashe/images/item-10.jpg",
          name: "Men Tshirt",
          price: 1000000,
          quantity: 1,
          rating: 4
        },
        {
          id: 2,
          thumbnail: "https://colorlib.com/etc/fashe/images/item-05.jpg",
          name: "Mug Adventure",
          price: 500000,
          quantity: 1,
          rating: 3
        }
      ],
      voucher: [
        {
          coupon: "THANGCHIN",
          value: 100000
        },
        {
          coupon: "THANGMUOI",
          value: 200000
        }
      ],
      discount: 0
    };
  }
  nhapSoluong(index, value) {
    let x = parseInt(value);
    if (x >= 0) {
      const newProduct = this.state.products;
      newProduct[index].quantity = x;
      this.setState({
        quantity: newProduct
      });
    }
  }
  // <input defulfValue=>value>
  tangSoluong(index) {
    const newProduct = this.state.products;
    newProduct[index].quantity++;
    this.setState({
      quantity: newProduct
    });
  }
  giamSoluong(index) {
    const newProduct = this.state.products;
    newProduct[index].quantity--;
    if (newProduct[index].quantity < 1) {
      newProduct[index].quantity = 1;
      this.setState({
        quantity: newProduct
      });
    }
  }
  xoaSanpham(index) {
    const newProduct = this.state.products;
    newProduct.splice(index, 1);
    this.setState({
      products: newProduct
    });
  }
  inputCoupon(event) {
    const value = event.target.value;
    const newCoupon = this.state.voucher;
    // CODECOUPON = TRUNGTHU,TETTHIEUNHI
    for (let i = 0; i < newCoupon.length; i++) {
      if (newCoupon[i].coupon == "THANGCHIN" && value == "TRUNGTHU" || newCoupon[i].coupon == "THANGMUOI" && value == "TETTHIEUNHI") {
        newCoupon[i].coupon = value;
        this.setState({
          voucher: newCoupon
        });
      } else {
        this.setState({
          discount: 0
        });
      }
    }
  }
  appCoupon() {
    const checkCoupon = this.state.voucher;
    // const adddiscount = this.state.discount;
    for (let i = 0; i < checkCoupon.length; i++) {
      if (checkCoupon[i].coupon == "TRUNGTHU" || checkCoupon[i].coupon == "TETTHIEUNHI") {
        // adddiscount+=checkCoupon[i].value;
        this.setState({
          discount: checkCoupon[i].value
        });
        console.log(this.state.discount)
      }
      // else if(checkCoupon[i].coupon =="TRUNGTHU"&&checkCoupon[i].coupon =="TETTHIEUNHI"){
      //   this.setState({
      //     discount: checkCoupon[0].value+=checkCoupon[1].value
      // });
      // }
    }
  }
  render() {
    const products = this.state.products;
    let cartItems = [];
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      totalPrice += product.price * product.quantity;

      cartItems.push(
        <tr className="table-row" key={product.id}>
          <td className="column-1">
            <div className="cart-img-product b-rad-4 o-f-hidden">
              <img src={product.thumbnail} alt="IMG-PRODUCT" />
            </div>
          </td>
          <td className="column-2">
            {product.name}
            <br />
            <br />
            <Rating value={product.rating} />
            <br />
            <br />
            <button>
              <i
                className="fa fa-2x fa-trash"
                onClick={() => this.xoaSanpham(i)}
              ></i>
            </button>
          </td>

          <td className="column-3">{product.price.toLocaleString()}VND</td>
          <td className="column-4">
            <div className="flex-w bo5 of-hidden w-size17">
              <button
                className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
                onClick={() => this.giamSoluong(i)}
              >
                <i className="fs-12 fa fa-minus" aria-hidden="true" />
              </button>
              <input
                className="size8 m-text18 t-center num-product"
                type="number"
                name="num-product1"
                value={product.quantity}
                onChange={() => this.nhapSoluong(i, event.target.value)}
              />
              <button
                className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
                onClick={() => this.tangSoluong(i)}
              >
                <i className="fs-12 fa fa-plus" aria-hidden="true" />
              </button>
            </div>
          </td>
          <td className="column-5">
            {(product.price * product.quantity).toLocaleString()}VND
          </td>
        </tr>
      );
    }

    return (
      <div>
        <section
          className="bg-title-page p-t-40 p-b-50 flex-col-c-m"
          style={{
            backgroundImage:
              "url(https://colorlib.com/etc/fashe/images/heading-pages-01.jpg)"
          }}
        >
          <h2 className="l-text2 t-center">Cart</h2>
        </section>
        {/* Cart */}
        <section className="cart bgwhite p-t-70 p-b-100">
          <div className="container">
            {/* Cart item */}
            <div className="container-table-cart pos-relative">
              <div className="wrap-table-shopping-cart bgwhite">
                <table className="table-shopping-cart">
                  <tbody>
                    <tr className="table-head">
                      <th className="column-1" />
                      <th className="column-2">Product</th>
                      <th className="column-3">Price</th>
                      <th className="column-4 p-l-70">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>

                    {/* Danh sach san pham */}
                    {cartItems}
                  </tbody>
                </table>
              </div>
            </div>
            {/* coupon */}
            <Coupon
              appCoupon={this.appCoupon.bind(this)}
              input={() => this.inputCoupon(event)}
            />
            {/* Total */}
            <Tonghop value={totalPrice} discount={this.state.discount} />
          </div>
        </section>
      </div>
    );
  }
}
