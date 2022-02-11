import { List, Card, Button, Image } from 'antd';
import { InitialState } from '../utils/InitialState';
import { connect } from 'react-redux';
import { Character } from '../interfaces/ApiInterface';
import { Link } from 'react-router-dom';
import LikeButtonComponent from './LikeButtonComponent';

interface Props {
    favs: Array<Character>;
}

const FavsComponent = (props: Props) => {

    return (
        <>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={props.favs}
                renderItem={item => (
                    <List.Item>
                        <Card title={<Link to={`/detail/${item.id}`}>{item.name}</Link>}
                            extra={<LikeButtonComponent item={item} />}
                            cover={<Image src={item.image} />}
                        >{item.status}</Card>
                    </List.Item>
                )} />
        </>
    )
}

const mapStateToProps = (state: InitialState) => ({ favs: state.favs });

export default connect(mapStateToProps)(FavsComponent);