import { Input } from "antd";

const Header = ({setQuery}) => {

    const {Search} = Input
    const onSearch = value => setQuery(value)

    return <header>
        <img src='https://previews.123rf.com/images/alfianiqbal/alfianiqbal2004/alfianiqbal200400239/145054248-picture-gallery-icon-logo-vector-illustrattion-photo-gallery-icon-design-vector-template-trendy-pict.jpg' alt='logo' width='20%' height='100px' />
        <h1> Photo Gallary </h1>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />

    </header>
}

export default Header;
