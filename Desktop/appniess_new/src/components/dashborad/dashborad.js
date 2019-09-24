import React, { Component } from 'react'
import './dashborad.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/action';
import { Redirect } from 'react-router-dom';
import Navigation from '../navigation/navigation'
class Dashborad extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {

        let auth = localStorage.getItem("token");

    let authRedirect = null;
        if (!auth) {
            authRedirect = <Redirect to='/' />
        }
        const postItems = this.props.posts.map(post => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.age}</td>
                <td>{post.gender}</td>
                <td>{post.email}</td>
            </tr>

        ));
        return (
            
            <div style={{ "overflow-x": "auto" }}>
            {authRedirect} 
            <Navigation />
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>

                    </tr>
                    {postItems}

                </table>
            </div>
        )
    }
}

Dashborad.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Dashborad);
