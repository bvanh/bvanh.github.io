function Coupon(props) {
    return (
        <div className="flex-w flex-r-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
            <div className="flex-w flex-m w-full-sm">
                <div className="size11 bo4 m-r-10">
                    <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="Coupon Code"
                        onChange={props.input}
                    />
                </div>
                <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                    {/* Button */}
                    <button
                        className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                        onClick={props.appCoupon}
                    >
                        Apply coupon
            </button>
                </div>
            </div>
        </div>
    );
}
