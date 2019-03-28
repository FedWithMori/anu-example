import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from 'components/home';
import { getUserInfo } from '@redux/actions';

const mapStateToProps = state => ({
    userInfo: state.Home.userInfo
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getUserInfo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
