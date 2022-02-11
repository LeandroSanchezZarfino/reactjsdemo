import { useDispatch, connect } from 'react-redux';
import { ActionsEnum } from '../utils/InitialState';
import { Character, } from '../interfaces/ApiInterface';
import { Button } from 'antd';
import { StarOutlined } from '@ant-design/icons';

interface Props {
    characters: Array<Character>;
    item: Character
}

const LikeButtonComponent: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            {props.characters.findIndex((character: Character) => character.id === props.item.id) === -1 ?
                <Button icon={<StarOutlined />} onClick={() => dispatch({ type: ActionsEnum.ADD, payload: props.item })} />
                :
                <Button icon={<StarOutlined />} danger onClick={() => dispatch({ type: ActionsEnum.DELETE, payload: props.item })} />
            }
        </>
    )
}


const mapStateToProps = (state: any) => {
    return { characters: state.favs }
}
export default connect(mapStateToProps)(LikeButtonComponent);