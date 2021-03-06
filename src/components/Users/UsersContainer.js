import React from "react";
import {connect} from "react-redux";

import {
    baseRequestUsers,
    followUser, getUsersByChangedPage, getUsersByChangedPageSize,
    unfollowUser
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../../common/Preloader";
import {compose} from "redux";
import {
    getAwaitingResponse,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/usersSelectors";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.baseRequestUsers()
        // console.log('я вмонтировалась -append(jsx to DOM)')
    }

    componentWillUnmount() {
        console.log('я отмонтировалась -i will delete(jsx from DOM)')
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersByChangedPage(pageNumber)
    }
    onPageSizeChanged = (pageSize) => {
        this.props.getUsersByChangedPageSize(pageSize)
    }



    render() {
        // console.log('я отрендерилась- пришли новые пропсы')

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       onPageSizeChanged={this.onPageSizeChanged}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       awaitingResponse={this.props.awaitingResponse}
                       follow={this.props.followUser}
                       unfollow={this.props.unfollowUser}
                />
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        ///получение данных из селекторов
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        awaitingResponse: getAwaitingResponse(state)
    }
}

export default compose(
    connect(mapStateToProps, {followUser, unfollowUser, baseRequestUsers, getUsersByChangedPage,getUsersByChangedPageSize}),
)(UsersAPIComponent);