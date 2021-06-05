import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getUserDetail} from '../actions/users';
import Spinner from './Spinner';

const UserDetail = ({ getUserDetail, users:{user, loading}, match}) => {

    useEffect(() => {
        getUserDetail(match.params.id);
    }, [getUserDetail, match.params.id]);

    return (
        <Fragment>
            {user === null || loading? <Spinner/>: <Fragment>
            <div className="container text-center">
                <h1 className="my-5">{user.data.first_name} { user.data.last_name}</h1>
                <img className="img-fluid img-large" src={user.data.avatar} alt={user.data.first_name} />
                <br />
                <p className="my-3">Email: {user.data.email}</p>
                <p className="my-3">Support: {user.support.url}</p>
                <p className="my-3">{user.support.text}</p>
            </div>
            </Fragment>}
        </Fragment>
      );
}

UserDetail.propTypes = {
    getUserDetail: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    users: state.users
})
 
export default connect(mapStateToProps, { getUserDetail})(UserDetail);