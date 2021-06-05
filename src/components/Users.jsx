import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getUsers} from '../actions/users';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Users = ({getUsers, users:{users, loading}}) => {

  const [sortUserBy, setSortUserBy] = useState('');

  useEffect(()=>{
    getUsers();
  }, [getUsers]);


  //Sort
  const sortUser = (e) => {
    setSortUserBy(e.target.value);
  if (e.target.value === '2'){
    users.sort(function(a,b){
      if(a.first_name > b.first_name){
        return 1;
      }else{
        return -1;
      }
    });
  }else if(e.target.value === '3'){
    users.sort(function(a,b){
      if(a.last_name > b.last_name){
        return 1;
      }else{
        return -1;
      }
  });
}else{
  users.sort(function(a,b){
    if(a.id > b.id){
      return 1;
    }else{
      return -1;
    }
});
}

} 

    return (
        <Fragment>
          {loading ? <Spinner /> : <div className="container">
            <h1 className="text-center my-5">Users</h1>
            <div className="w-100">
              <div className="d-flex justify-content-end align-items-center me-lg-5 mg-sm-1">
                  <h6 className="me-3 mt-2">Sort By: </h6>
                  <select value={sortUserBy} onChange = {(e)=> sortUser(e)}>
                    <option value={1} >None</option>
                    <option value={2}>First Name</option>
                    <option value={3}>Last Name</option>
                  </select>
              </div>
            </div>
            <div className="mt-3">
              <div className="row">
              {users.map(user =>(
                <div key={user.id} className="col-lg-4 col-md-6 col-sm-12 text-center mb-5">
                  <Link to={`/${user.id}`}>
                    
                      <div>
                        <img className="img-fluid" src={user.avatar} alt={user.first_name}/>
                        <p>{user.first_name} {user.last_name}</p>
                        <p className="text-left">Email: {user.email}</p>
                      </div>

                  </Link>
                </div>
              ))}
              </div>
            </div>
        </div>
        }
        </Fragment>
      );
}

Users.propTypes={
  getUsers : PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps,{getUsers})(Users);