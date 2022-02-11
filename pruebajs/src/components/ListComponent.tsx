import { useEffect, useState } from 'react';
import { List, Card, Image } from 'antd';
import { Paginated, Character, } from '../interfaces/ApiInterface';
import * as CharacterService from '../service/CharacterService';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LikeButtonComponent from './LikeButtonComponent';

interface Props {
    characters: Array<Character>;
}

const ListComponent: React.FC<Props> = (props) => {
    const [listData, setListdata] = useState<Paginated<Character>>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch();
    }, [currentPage])

    const fetch = () => {
        setLoading(true);
        CharacterService.getCharactersPaginated(currentPage)
            .then(({ data }: { data: Paginated<Character> }) => {
                setListdata(data);
            }).finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={listData?.results}
                loading={loading}
                pagination={{
                    onChange: (page: number) => setCurrentPage(page),
                    current: currentPage,
                    total: listData?.info.count,
                    pageSize: 20
                }}
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

const mapStateToProps = (state: any) => {
    return { characters: state.favs }
}
export default connect(mapStateToProps)(ListComponent);