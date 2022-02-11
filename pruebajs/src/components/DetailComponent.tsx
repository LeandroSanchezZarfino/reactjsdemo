import { useEffect, useState } from 'react';
import { Character } from '../interfaces/ApiInterface';
import { Col, Row, PageHeader, Typography, Image, Space } from 'antd';
import * as CharacterService from '../service/CharacterService';
import { useParams } from 'react-router-dom'
import LikeButtonComponent from './LikeButtonComponent';

const { Text } = Typography;

const DetailComponent: React.FC = () => {

    const params = useParams();
    const [character, setCharacter] = useState<Character>();

    useEffect(() => {

        CharacterService.getCharacter(parseInt(params!!.id!!))
            .then(({ data }: { data: Character }) => {
                setCharacter(data);
            })
    }, [])

    return (<>
        <PageHeader
            title={character?.name}
            extra={<LikeButtonComponent item={character} />} />
        <Row justify='center'>
            <Col span={6}>
                <Image src={character?.image} />
            </Col>
        </Row>
        <Row justify='center'>
            <Col span={6}>
                <Space direction='vertical'>
                    <Text key="1">{character?.status}</Text>
                    <Text key="2">{character?.gender}</Text>
                    <Text key="4">{character?.location.name}</Text>
                    <Text key="5">{character?.species}</Text>
                </Space>
            </Col>
        </Row>
    </>);
}

export default (DetailComponent);