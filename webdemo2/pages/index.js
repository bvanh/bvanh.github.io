import Head from 'next/head';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'navbar'
        }
    }
    showSidebar() {
        this.setState({
            status: 'showbar'
        })
    }
    hideSidebar() {
        this.setState({
            status: 'hidebar'
        })
    }
    render() {
        return (
            <div>
                <Head>
                    <link rel='stylesheet' href='./static/style-index.css' />
                </Head>
                <div className='header'>
                    <p>
                        <span className='log'>Đăng Nhập/Đăng ký</span>
                        <img className='show-sidebar' src='./static/img/show-sidebar.png' onClick={this.showSidebar.bind(this)} />
                    </p>
                    <p>Webdemo2</p>
                    <div className='cart'>
                        <p className='search'>
                            <img className='icon' src='./static/img/search_icon.png' />
                            Giỏ hàng
                        </p>
                        <img className='icon' src='./static/img/shopping_cart_icon.png' width='24' height='24' />
                    </div>
                </div>
                <nav className={this.state.status}>
                    <ul className='menubar'>
                        <img className='hide-sidebar' src='./static/img/hide-sidebar.png' onClick={this.hideSidebar.bind(this)} />
                        <li><a href='/'>Trang Chủ</a>
                        </li>
                        <li ><a href='/'>Giới Thiệu</a></li>
                        <li className='menu' ><a href='/'>Giày Nữ </a>
                            <div className='sub-menu'>
                                <ul>
                                    <li className='sub-menu1'><a href='/'>Classic</a></li>
                                    <li className='sub-menu1'><a href='/'>One star</a></li>
                                    <li className='sub-menu1'><a href='/'>Chuck 07</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className='menu' ><a href='/'>Giày Nam</a>
                            <div className='sub-menu'>
                                <ul>
                                    <li className='sub-menu1'><a href='/'>Classic</a></li>
                                    <li className='sub-menu1'><a href='/'>One star</a></li>
                                    <li className='sub-menu1'><a href='/'>Chuck 07</a></li>
                                </ul>
                            </div></li>
                        <li ><a href='/'>Liên Hệ</a></li>
                        <li ><a href='/'>Tin Tức</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Index;
