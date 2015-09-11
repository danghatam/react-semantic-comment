import React, {Component, PropTypes} from 'react';

class Comment extends Component {

    constructor(){
        super();
        this.propTypes = {
            comments : PropTypes.array,
            onSubmit : PropTypes.func
        };
        this.defaultProps = {
            comments : []
        };
        this.state = {anonymous: false};
    }

    postComment(){
        let node = React.findDOMNode(this.refs.inputComment);
        this.props.onSubmit(node.value, this.state.anonymous);
        node.value = "";
    }

    change() {
        this.setState({anonymous: !this.state.anonymous})
    }

    render() {
        let comments = this.props.comments.map(comment =>
                <div className="comment" key={comment.cid}>
                    <a className="avatar">
                        <img
                            src={ comment.user === undefined
                            ? "https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/anonymous-128.png"
                            : comment.user.avatar === undefined
                            ? "http://mobilemovement.tv/uploads/users/no_avatar.jpg"
                            : comment.user.avatar }/>
                    </a>

                    <div className="content">
                        <a className="author">{comment.user === undefined ? "Anonymous" : comment.user.name}</a>

                        <div className="metadata">
                            <span className="date">{new Date(comment.created).toString()}</span>
                        </div>
                        <div className="text">
                            {comment.content}
                        </div>
                        <div className="actions">
                            <a className="like">Like</a>
                        </div>
                    </div>
                </div>
        );
        return (
            <div className="ui comments">
                <h3 className="ui dividing header">Comments</h3>
                {comments}
                <form className="ui reply form">
                    <div className="field">
                        <textarea ref="inputComment"></textarea>
                    </div>
                    <div className="field">
                        <div className="ui toggle checkbox">
                            <input type="checkbox" ref="anonymous" checked={this.state.anonymous}
                                   onChange={this.change.bind(this)} />
                            <label>Anonymous</label>
                        </div>
                    </div>
                    <div className="ui blue labeled submit icon button" onClick={this.postComment.bind(this)}>
                        <i className="icon edit"></i> Add Reply
                    </div>
                </form>
            </div>
        );
    }
}

export default Comment;
