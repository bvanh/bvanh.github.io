function Tonghop(props) {
    return (
        <div>
            {/* Total */}
            <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                <h5 className="m-text20 p-b-24">
                    Cart Totals
                            </h5>
                {/*  */}
                <div className="flex-w flex-sb-m p-b-12">
                    <span className="s-text18 w-size19 w-full-sm">
                        Subtotal:
                                </span>
                    <span className="m-text21 w-size20 w-full-sm">
                        {props.value.toLocaleString()}VND
                    </span>
                </div>
                {/*  */}
                {props.discount > 0 &&
                    <div className="flex-w flex-sb-m p-b-12">
                        <span className="s-text18 w-size19 w-full-sm">
                            Discount:
                                </span>
                        <span className="m-text21 w-size20 w-full-sm">
                            {props.discount.toLocaleString()}VND
                    </span>
                    </div>
                }
                {/*  */}
                <div className="flex-w flex-sb-m p-t-26 p-b-30">
                    <span className="m-text22 w-size19 w-full-sm">
                        Total:
                                </span>
                    <span className="m-text21 w-size20 w-full-sm">
                        {(props.value - props.discount).toLocaleString()}VND
                                </span>
                </div>
                <div className="size15 trans-0-4">
                    {/* Button */}
                    <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                        Proceed to Checkout
                                </button>
                </div>
            </div>
        </div>
    )
}
